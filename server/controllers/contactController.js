/**
 * Contact Controller
 * Handles all contact form business logic
 */
// contactController.js ke top pe add karo (existing imports ke baad)
import nodemailer from 'nodemailer';
import Contact from '../models/Contact.js';



const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,       
  port: parseInt(process.env.SMTP_PORT),  
  secure: process.env.SMTP_SECURE === 'true',  
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});



// ✅ Transporter verify karo — server start hone pe pata chalega SMTP connected hai ya nahi
transporter.verify((error, success) => {
  if (error) {
    console.error('❌ SMTP Connection Failed:', error.message);
  } else {
    console.log('✅ SMTP Server Ready — Mails bhej sakte hain');
  }
});


/**
 * @desc    Create new contact submission
 * @route   POST /api/contact
 * @access  Public
 */
export const createContact = async (req, res, next) => {
  try {
    const { name, email, phone, company, anything, services } = req.body;

    // Check for recent submission (spam prevention)
    const hasRecent = await Contact.hasRecentSubmission(email, phone);
    if (hasRecent) {
      return res.status(429).json({
        success: false,
        message: 'You have already submitted a contact form recently. Please try again after 24 hours.'
      });
    }

    // Create new contact
    const contact = await Contact.create({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      phone: phone.trim(),
      company: company ? company.trim() : '',
      anything: anything ? anything.trim() : '',
      services
    });

    res.status(201).json({
      success: true,
      message: 'Thank you for contacting us! We will get back to you soon.',
      data: {
        id: contact._id,
        name: contact.name,
        email: contact.email,
        createdAt: contact.createdAt
      }
    });
  } catch (error) {
    console.error('Error creating contact:', error);
    
    // Handle validation errors
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        errors: errors
      });
    }

    // Pass to error handler middleware
    next(error);
  }
};

/**
 * @desc    Get all contact submissions
 * @route   GET /api/contacts
 * @access  Private/Admin
 */
export const getAllContacts = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const status = req.query.status;
    const search = req.query.search;

    // Build query
    let query = {};
    if (status && ['pending', 'contacted', 'completed'].includes(status)) {
      query.status = status;
    }
    
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { phone: { $regex: search, $options: 'i' } }
      ];
    }

    const contacts = await Contact.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Contact.countDocuments(query);

    res.status(200).json({
      success: true,
      data: contacts,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
        hasNextPage: page < Math.ceil(total / limit),
        hasPrevPage: page > 1
      }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get single contact submission
 * @route   GET /api/contact/:id
 * @access  Private/Admin
 */
export const getContactById = async (req, res, next) => {
  try {
    const contact = await Contact.findById(req.params.id);
    
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact submission not found'
      });
    }

    res.status(200).json({
      success: true,
      data: contact
    });
  } catch (error) {
    next(error);
  }
};


/**
 * @desc    Update contact status
 * @route   PUT /api/contact/:id/status
 * @access  Private/Admin
 */
export const updateContactStatus = async (req, res, next) => {
  try {
    const { status } = req.body;
    
    if (!['pending', 'contacted', 'completed'].includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid status value. Must be: pending, contacted, or completed'
      });
    }

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact submission not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Contact status updated successfully',
      data: contact
    });
  } catch (error) {
    next(error);
  }
};



/**
 * @desc    Delete contact submission
 * @route   DELETE /api/contact/:id
 * @access  Private/Admin
 */
export const deleteContact = async (req, res, next) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact submission not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Contact submission deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};




/**
 * @desc    Get contact statistics
 * @route   GET /api/contacts/stats
 * @access  Private/Admin
 */
export const getContactStats = async (req, res, next) => {
  try {
    const total = await Contact.countDocuments();
    const pending = await Contact.countDocuments({ status: 'pending' });
    const contacted = await Contact.countDocuments({ status: 'contacted' });
    const completed = await Contact.countDocuments({ status: 'completed' });
    
    // Get last 7 days submissions
    const last7Days = await Contact.aggregate([
      {
        $match: {
          createdAt: { $gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) }
        }
      },
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
          count: { $sum: 1 }
        }
      },
      { $sort: { _id: 1 } }
    ]);

    res.status(200).json({
      success: true,
      data: {
        total,
        pending,
        contacted,
        completed,
        last7Days
      }
    });
  } catch (error) {
    next(error);
  }
};




/**
 * @desc    Submit quick contact form — sends email via Nodemailer (no DB)
 * @route   POST /api/contact/quick
 * @access  Public
 */
export const submitQuickContact = async (req, res, next) => {
  try {
    const { name, email, phone, city, company, designation } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: 'Name, email and phone are required.',
      });
    }

    const mailOptions = {
      from: `"Mind Frame India Website" <${process.env.SMTP_USER}>`,
      to: "msali@mindframeindia.com",
      cc: "seo@mindframeindia.com",
      replyTo: email,
      subject: `New Lead: ${name} — ${company || 'No Company'}`,
      html: `
        <h2 style="color:#c9a84c;font-family:Arial,sans-serif;">New Quick Contact Submission</h2>
        <table cellpadding="10" style="border-collapse:collapse;width:100%;font-family:Arial,sans-serif;font-size:14px;">
          <tr style="background:#f9f9f9"><td><strong>Name</strong></td><td>${name}</td></tr>
          <tr><td><strong>Email</strong></td><td><a href="mailto:${email}">${email}</a></td></tr>
          <tr style="background:#f9f9f9"><td><strong>Phone</strong></td><td>${phone}</td></tr>
          <tr><td><strong>City</strong></td><td>${city || '—'}</td></tr>
          <tr style="background:#f9f9f9"><td><strong>Company</strong></td><td>${company || '—'}</td></tr>
          <tr><td><strong>Designation</strong></td><td>${designation || '—'}</td></tr>
        </table>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      message: "Thank you! We'll be in touch shortly.",
    });
  } catch (error) {
    console.error('Nodemailer error:', error);
    next(error);
  }
};


// export const submitQuickContact = async (req, res, next) => {
//   try {
//     const { name, email, phone, city, company, designation } = req.body;

//     console.log('📩 Quick Contact Request aaya:', { name, email, phone, city, company, designation });

//     if (!name || !email || !phone) {
//       console.warn('⚠️ Validation fail — required fields missing');
//       return res.status(400).json({
//         success: false,
//         message: 'Name, email and phone are required.',
//       });
//     }

//     const mailOptions = {
//       from: `"Mind Frame India Website" <${process.env.SMTP_USER}>`,
//       to: "abdullahansari982076@gmail.com",
  
//       replyTo: email,
//       subject: `New Lead: ${name} — ${company || 'No Company'}`,
//       html: `...same as before...`,
//     };

//     console.log('📤 Mail bhejne ki koshish ho rahi hai...', {
//       from: mailOptions.from,
//       to: mailOptions.to,
//       subject: mailOptions.subject,
//     });

//     const info = await transporter.sendMail(mailOptions);

//     console.log('✅ Mail successfully bheja gaya!', {
//       messageId: info.messageId,
//       response: info.response,
//     });

//     return res.status(200).json({
//       success: true,
//       message: "Thank you! We'll be in touch shortly.",
//     });

//   } catch (error) {
//     console.error('❌ Mail bhejne mein error aaya:', {
//       message: error.message,
//       code: error.code,         // e.g. ECONNREFUSED, EAUTH
//       command: error.command,   // e.g. AUTH, DATA
//     });
//     next(error);
//   }
// };






/**
 * @desc    Submit TV/Service page contact form — sends email via Nodemailer (no DB)
 * @route   POST /api/contact/service
 * @access  Public
 */
export const submitServiceContact = async (req, res, next) => {
  try {
    const { name, email, mobile, location, message } = req.body;

    if (!name || !email || !mobile || !location || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required.',
      });
    }

    const mailOptions = {
      from: `"Mind Frame India Website" <${process.env.SMTP_USER}>`,
      to: "msali@mindframeindia.com",
      cc: "seo@mindframeindia.com",
      replyTo: email,
      subject: `New Service Enquiry: ${name} — ${location}`,
      html: `
        <h2 style="color:#b08d57;font-family:Arial,sans-serif;">New Service Page Enquiry</h2>
        <table cellpadding="10" style="border-collapse:collapse;width:100%;font-family:Arial,sans-serif;font-size:14px;">
          <tr style="background:#f9f9f9"><td><strong>Name</strong></td><td>${name}</td></tr>
          <tr><td><strong>Email</strong></td><td><a href="mailto:${email}">${email}</a></td></tr>
          <tr style="background:#f9f9f9"><td><strong>Mobile</strong></td><td>${mobile}</td></tr>
          <tr><td><strong>Location</strong></td><td>${location}</td></tr>
          <tr style="background:#f9f9f9"><td><strong>Message</strong></td><td>${message}</td></tr>
        </table>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      message: "Thank you! We'll be in touch shortly.",
    });
  } catch (error) {
    console.error('Nodemailer error:', error);
    next(error);
  }
};






/**
 * @desc    Submit [PageName] contact form
 * @route   POST /api/contact/[pagename]
 * @access  Public
 */
export const submitTelevisionContact = async (req, res, next) => {
  try {
    const { name, email, mobile, location, message } = req.body;

    if (!name || !email || !mobile || !location || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required.',
      });
    }

    const mailOptions = {
      from: `"Mind Frame India Website" <${process.env.SMTP_USER}>`,
      to: "msali@mindframeindia.com",
      cc: "seo@mindframeindia.com",
      replyTo: email,
      subject: `New television Enquiry: ${name} — ${location}`,
      html: `
        <h2 style="color:#b08d57;font-family:Arial,sans-serif;">New [PageName] Page Enquiry</h2>
        <table cellpadding="10" style="border-collapse:collapse;width:100%;font-family:Arial,sans-serif;font-size:14px;">
          <tr style="background:#f9f9f9"><td><strong>Name</strong></td><td>${name}</td></tr>
          <tr><td><strong>Email</strong></td><td><a href="mailto:${email}">${email}</a></td></tr>
          <tr style="background:#f9f9f9"><td><strong>Mobile</strong></td><td>${mobile}</td></tr>
          <tr><td><strong>Location</strong></td><td>${location}</td></tr>
          <tr style="background:#f9f9f9"><td><strong>Message</strong></td><td>${message}</td></tr>
        </table>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      message: "Thank you! We'll be in touch shortly.",
    });
  } catch (error) {
    console.error('Nodemailer error:', error);
    next(error);
  }
};
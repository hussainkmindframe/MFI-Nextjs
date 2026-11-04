import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Admin from './models/Admin.js';

dotenv.config();

const resetPassword = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected.');

    const email = process.env.ADMIN_EMAIL || 'admin@mindframe.com';
    const password = process.env.ADMIN_PASSWORD || 'Mind@123';

    let admin = await Admin.findOne({ email });
    if (!admin) {
      console.log('Admin not found, creating a new one...');
      admin = new Admin({ email, password, name: 'Admin', role: 'admin' });
    } else {
      console.log('Admin found, updating password...');
      admin.password = password;
    }

    await admin.save();
    console.log(`Admin credentials updated successfully!\nEmail: ${email}\nPassword: ${password}`);
    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
};

resetPassword();

'use client'

import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import apiClient from "@/services/apiClient";
import SEO from '@/components/SEO';
import { seoConfig } from '@/config/seoConfig';

const socialLinks = {
  facebook: {
    url: "https://www.facebook.com/mindframeindiapvtltd",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  twitter: {
    url: "https://x.com/MindFrameIndia",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  instagram: {
    url: "https://www.instagram.com/mindframeindia",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  linkedin: {
    url: "https://www.linkedin.com/company/mind-frame-india",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  youtube: {
    url: "https://www.youtube.com/channel/UCQDHao37b1_WlbiU2z4Kt9Q",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
      </svg>
    ),
  },
};

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: "2px" }}>
    <circle cx="12" cy="12" r="10" stroke="#b08d57" strokeWidth="1.5" />
    <path d="M8 12l3 3 5-6" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name cannot exceed 100 characters"),
  email: Yup.string()
    .required("Email is required")
    .email("Please enter a valid email"),
  subject: Yup.string()
    .required("Subject is required")
    .max(200, "Subject cannot exceed 200 characters"),
  age: Yup.string()
    .required("Age is required")
    .matches(/^\d+$/, "Age must be a number")
    .test("age-range", "Age must be between 18 and 60", (val) => {
      const n = parseInt(val);
      return n >= 18 && n <= 60;
    }),
  experience: Yup.string()
    .required("Experience is required")
    .max(200, "Experience cannot exceed 200 characters"),
  mobile: Yup.string()
    .required("Mobile number is required")
    .matches(/^[0-9+\-\s()]+$/, "Invalid mobile number format")
    .min(10, "Mobile must be at least 10 digits"),
  location: Yup.string()
    .required("Location is required")
    .max(200, "Location cannot exceed 200 characters"),
  applyFor: Yup.string().required("Please select a position"),
  resume: Yup.mixed()
    .required("Resume is required")
    .test("fileSize", "File size must be less than 2MB", (file) => {
      if (!file) return false;
      return file.size <= 5 * 1024 * 1024;
    })
    .test("fileType", "Only PDF files are allowed", (file) => {
      if (!file) return false;
      return file.type === "application/pdf";
    }),
});

const errStyle = {
  color: "#f87171",
  fontSize: "11px",
  marginTop: "5px",
  fontFamily: "'DM Sans', sans-serif",
};

export default function Careers() {
  const [loading, setLoading] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [positions, setPositions] = useState([]);
  const [isLoadingJobs, setIsLoadingJobs] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoadingJobs(true);
      try {
        const response = await apiClient.get('/positions/active');
        if (response.data.success && response.data.data.length > 0) {
          const positionsData = response.data.data;
          setPositions(positionsData);

          const jobsData = positionsData.map((pos) => ({
            id: pos._id,
            location: pos.location,
            title: pos.title,
            experience: `Minimum Experience – ${pos.experience}`,
            description: pos.description
              ? [pos.description]
              : ["Join our team for an exciting career opportunity."],
            requirements:
              pos.requirements && pos.requirements.length > 0
                ? pos.requirements
                : ["Good communication skills", "Team player", "Problem solving attitude"],
          }));
          setJobs(jobsData);
        } else {
          setJobs([]);
          setPositions([]);
        }
      } catch (error) {
        console.error('Failed to fetch positions:', error);
        setJobs([]);
        setPositions([]);
      } finally {
        setIsLoadingJobs(false);
      }
    };
    fetchData();
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      age: "",
      experience: "",
      mobile: "",
      location: "",
      applyFor: "",
      resume: null,
    },
    validationSchema,
    enableReinitialize: true,
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      try {
        const formData = new FormData();
        Object.entries(values).forEach(([key, val]) => {
          if (val !== null && val !== undefined) formData.append(key, val);
        });

        const response = await apiClient.post("/career", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        if (response.data.success) {
          toast.success("Application submitted successfully! We will get back to you soon.");
          resetForm();
        } else {
          toast.error("Something went wrong. Please try again.");
        }
      } catch (error) {
        console.error("Career form error:", error);
        toast.error(error.response?.data?.message || "Failed to submit. Please try again.");
      } finally {
        setLoading(false);
      }
    },
  });

  const fields = [
    { name: "name", label: "Name*", type: "text", full: false },
    { name: "email", label: "E-mail*", type: "email", full: false },
    { name: "subject", label: "Subject*", type: "text", full: true },
    { name: "age", label: "Age*", type: "text", full: false },
    { name: "experience", label: "Experience*", type: "text", full: false },
    { name: "mobile", label: "Mobile No.*", type: "tel", full: true },
    { name: "location", label: "Location*", type: "text", full: true },
  ];

  if (isLoadingJobs) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", background: "#fff" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{
            display: "inline-block", width: "40px", height: "40px",
            border: "3px solid rgba(176,141,87,0.2)", borderTopColor: "#b08d57",
            borderRadius: "50%", animation: "spin 0.7s linear infinite", marginBottom: "20px"
          }} />
          <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#666" }}>Loading career opportunities...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title={seoConfig.careers.title}
        description={seoConfig.careers.description}
        keywords={seoConfig.careers.keywords}
        path={seoConfig.careers.path}
      />
      <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#fff", minHeight: "100vh" }}>
        <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }

        .career-input {
          width: 100%;
          background: rgba(255,255,255,0.08);
          border: 1px solid #333;
          border-radius: 6px;
          padding: 12px 14px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          color: #fff;
          outline: none;
          transition: all 0.3s ease;
        }
        .career-input::placeholder { color: #666; }
        .career-input:focus { border-color: #b08d57; background: rgba(176,141,87,0.1); }
        .career-input.error-field { border-color: #f87171; }
        select.career-input option { background: #1a1510; color: #fff; }

        .job-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: start;
        }
        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px 32px;
        }
        .contact-inner {
          display: flex;
          gap: 60px;
          flex-wrap: wrap;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .spinner {
          display: inline-block;
          width: 14px; height: 14px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .job-row { grid-template-columns: 1fr; gap: 24px; }
          .form-grid { grid-template-columns: 1fr; }
          .contact-inner { flex-direction: column; gap: 40px; }
        }
      `}</style>

      {/* ── HEADER ── */}
      <div style={{ background: "#fff", padding: "32px 24px 48px", textAlign: "center" }}>
   
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(42px, 8vw, 72px)",
          fontWeight: 700, color: "#b08d57",
          letterSpacing: "-1px", lineHeight: 1, marginBottom: "14px",
        }}>
          Careers
        </h1>
        <div style={{ width: "48px", height: "2px", background: "#b08d57", margin: "0 auto" }} />
      </div>

      {/* ── JOB LISTINGS ── */}
      <div style={{ background: "#fff" }}>
        {jobs.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 24px" }}>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 700, color: "#b08d57", marginBottom: "16px"
            }}>
              No Current Openings
            </p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "#999", lineHeight: 1.8 }}>
              We don't have any open positions at the moment.<br />
              Please check back later or send us your resume below.
            </p>
          </div>
        ) : (
          jobs.map((job, i) => (
            <div key={job.id} style={{ background: i % 2 === 0 ? "#fff" : "#f7f5f1", padding: "48px 0" }}>
              <div style={{ maxWidth: "840px", margin: "0 auto", padding: "0 24px" }}>
                <div className="job-row">
                  <div>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase", color: "#b08d57", marginBottom: "8px" }}>
                      {job.location}
                    </p>
                    <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 700, color: "#1a1510", marginBottom: "10px", lineHeight: 1.2 }}>
                      {job.title}
                    </h2>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", fontWeight: 600, color: "#1a1510", marginBottom: "18px" }}>
                      {job.experience}
                    </p>
                    {job.description.map((para, j) => (
                      <p key={j} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#666", lineHeight: 1.8, marginBottom: "12px" }}>
                        {para}
                      </p>
                    ))}
                  </div>
                  <div>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 600, color: "#1a1510", marginBottom: "16px" }}>
                      Requirements:
                    </p>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                      {job.requirements.map((req, k) => (
                        <li key={k} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                          <CheckIcon />
                          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#555", lineHeight: 1.5 }}>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* ── APPLY FORM ── */}
      <div style={{ background: "#1a1510", padding: "60px 24px 64px" }}>
        <div style={{ maxWidth: "840px", margin: "0 auto" }} className="contact-inner">

          {/* Left info */}
          <div style={{ minWidth: "220px", flex: "0 0 220px" }}>
            <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, color: "#fff", lineHeight: 1.1, marginBottom: "12px" }}>
              Get In<br />Touch
            </h2>
            <div style={{ width: "40px", height: "2px", background: "#b08d57", marginBottom: "24px" }} />
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12.5px", color: "#aaa", lineHeight: 1.9, marginBottom: "16px" }}>
              302, 3rd Floor, Crescent Towers, Behind Crystal Plaza, Next to Morya House, Off Link Road, Andheri (West), Mumbai – 400 053
            </p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12.5px", color: "#ccc", marginBottom: "4px" }}>
              <span style={{ color: "#b08d57" }}>Ph.:</span> +91 22 65707081, +91 22 40125517/18/19
            </p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12.5px", color: "#ccc", marginBottom: "24px" }}>
              <span style={{ color: "#b08d57" }}>M.:</span> +91 9892000733
            </p>
            <div style={{ display: "flex", gap: "16px" }}>
              {Object.entries(socialLinks).map(([name, { url, icon }]) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  style={{ color: "#888", display: "inline-flex", transition: "color 0.25s" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#b08d57"}
                  onMouseLeave={e => e.currentTarget.style.color = "#888"}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div style={{ flex: 1, minWidth: "280px" }}>
            <form onSubmit={formik.handleSubmit} noValidate>
              <div className="form-grid">

                {fields.map(({ name, label, type, full }) => (
                  <div key={name} style={{ gridColumn: full ? "1 / -1" : undefined }}>
                    <input
                      type={type}
                      name={name}
                      placeholder={label}
                      value={formik.values[name]}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      onFocus={e => { e.target.style.borderColor = "#b08d57"; e.target.style.background = "rgba(176,141,87,0.1)"; }}
                      onBlurCapture={e => { e.target.style.borderColor = "#333"; e.target.style.background = "rgba(255,255,255,0.08)"; }}
                      className={`career-input${formik.touched[name] && formik.errors[name] ? " error-field" : ""}`}
                    />
                    {formik.touched[name] && formik.errors[name] && (
                      <div style={errStyle}>{formik.errors[name]}</div>
                    )}
                  </div>
                ))}

                {/* Apply For */}
                <div style={{ gridColumn: "1 / -1" }}>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", color: "#b08d57", marginBottom: "6px", letterSpacing: "0.5px" }}>
                    Apply For* :
                  </p>
                  <select
                    name="applyFor"
                    value={formik.values.applyFor}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`career-input${formik.touched.applyFor && formik.errors.applyFor ? " error-field" : ""}`}
                    style={{ cursor: "pointer", color: formik.values.applyFor ? "#fff" : "#666" }}
                  >
                    <option value="" disabled style={{ color: "#888", background: "#1a1510" }}>
                      {positions.length === 0 ? "No positions available" : "Select a position"}
                    </option>
                    {positions.map(opt => (
                      <option
                        key={opt._id}
                        value={opt.title}
                        style={{ color: "#fff", background: "#1a1510" }}
                      >
                        {opt.title}
                      </option>
                    ))}
                  </select>
                  {formik.touched.applyFor && formik.errors.applyFor && (
                    <div style={errStyle}>{formik.errors.applyFor}</div>
                  )}
                </div>

                {/* Resume upload */}
                <div style={{ gridColumn: "1 / -1" }}>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", color: "#b08d57", letterSpacing: "0.5px", marginBottom: "8px" }}>
                    Resume* :
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                    <label
                      style={{
                        fontFamily: "'DM Sans', sans-serif", fontSize: "12px",
                        padding: "9px 20px",
                        border: `1px solid ${formik.touched.resume && formik.errors.resume ? "#f87171" : "#b08d57"}`,
                        borderRadius: "4px",
                        color: formik.touched.resume && formik.errors.resume ? "#f87171" : "#b08d57",
                        cursor: "pointer", background: "transparent",
                        transition: "all 0.25s",
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background = "#b08d57"; e.currentTarget.style.color = "#1a1510"; }}
                      onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = formik.touched.resume && formik.errors.resume ? "#f87171" : "#b08d57"; }}
                    >
                      Choose File
                      <input
                        type="file"
                        name="resume"
                        accept=".pdf"
                        style={{ display: "none" }}
                        onChange={e => {
                          formik.setFieldValue("resume", e.currentTarget.files[0] || null);
                          formik.setFieldTouched("resume", true, false);
                        }}
                      />
                    </label>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", color: "#888" }}>
                      {formik.values.resume ? formik.values.resume.name : "No file chosen (PDF only, max 2MB)"}
                    </span>
                  </div>
                  {formik.touched.resume && formik.errors.resume && (
                    <div style={errStyle}>{formik.errors.resume}</div>
                  )}
                </div>

              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                style={{
                  marginTop: "32px",
                  width: "100%",
                  background: loading ? "rgba(176,141,87,0.6)" : "#b08d57",
                  border: "none",
                  padding: "14px 32px",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  color: "#1a1510",
                  cursor: loading ? "not-allowed" : "pointer",
                  borderRadius: "4px",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                }}
                onMouseEnter={e => { if (!loading) { e.currentTarget.style.background = "#9a7842"; e.currentTarget.style.transform = "translateY(-1px)"; } }}
                onMouseLeave={e => { if (!loading) { e.currentTarget.style.background = "#b08d57"; e.currentTarget.style.transform = "translateY(0)"; } }}
              >
                {loading ? (
                  <><span className="spinner" /> Submitting...</>
                ) : (
                  "Submit Application"
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
    </>
  );
}
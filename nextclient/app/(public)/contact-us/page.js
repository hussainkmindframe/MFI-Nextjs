"use client";

// pages/Contact.jsx or components/Contact.jsx

import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import apiClient from "@/services/apiClient";
import SEO from "@/components/SEO";
import { seoConfig } from "@/config/seoConfig";

const gold = "#c9a84c";

const inputStyle = {
  border: "none",
  borderBottom: "1px solid #999",
  background: "transparent",
  fontFamily: "Georgia, serif",
  fontSize: 13,
  color: "#1a1a1a",
  padding: "8px 0",
  outline: "none",
  width: "100%",
};

const errorStyle = {
  color: "#d32f2f",
  fontSize: 11,
  marginTop: 4,
  fontFamily: "Georgia, serif",
};

const services = [
  ["Digital Marketing", "Corporate Films/TVCs/Film Production"],
  ["Website Design & Development", "Video Animation 2D/3D"],
  ["Creative Designing", "Augmented Reality/Virtual Reality"],
  ["Brand Identity", "Product Campaign"],
  ["Creative Campaign", "Media Planning"],
  ["ATL/BTL", ""],
];

const offices = [
  {
    heading: "HEAD OFFICE",
    city: "MUMBAI, INDIA",
    address:
      "302, 3rd Floor, Crescent Towers, Behind Crystal Plaza, Next to Morya House, Off Link Road, Andheri (West), Mumbai – 400 053",

    phone: "+91 9892000733",
    email: "info@mindframeindia.com",
  },
];

const branches = [
  {
    city: "– MUMBAI , INDIA",
    address:
      "6th Floor Bhukanvala Chambers B-22, Off Link Road, Veera Desai Rd, Andheri West, Mumbai, Maharashtra 400053",

    phone: "+91 9892000733 / +91 9167830733",
    email: "info@mindframeindia.com",
  },
  {
    city: "– HYDERABAD , INDIA",
    address:
      "501, Fifth floor, Pioneer Heights, Lane Opp International Public School, Manikonda Road, Hyderabad 500008",
    phone: "",
    email: "info@mindframeindia.com",
  },

  {
    city: "– CALIFORNIA , UNITED STATES OF AMERICA",
    address:
      "Bishop Ranch 3, 2603 Camino Ramon, Suite 200, San Ramon, California 94583, United States of America",
    phone: "+1 (925) 205 8356",
    email: "info@mindframeglobal.com",
  },
];

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),
  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^[0-9+\-\s()]+$/, "Invalid phone number format")
    .min(10, "Phone number must be at least 10 digits"),
  company: Yup.string(),
  anything: Yup.string(),
  services: Yup.array()
    .min(1, "Please select at least one service")
    .required("Please select at least one service"),
});

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      anything: "",
      services: [],
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      try {
        const response = await apiClient.post("/contact", values);

        if (response.data.success) {
          toast.success("Thank you! We will get back to you soon.");
          resetForm();
        } else {
          toast.error("Something went wrong. Please try again.");
        }
      } catch (error) {
        console.error("Contact form error:", error);
        toast.error(
          error.response?.data?.message ||
            "Failed to submit. Please try again.",
        );
      } finally {
        setLoading(false);
      }
    },
  });

  const handleServiceToggle = (service) => {
    const currentServices = formik.values.services;
    const newServices = currentServices.includes(service)
      ? currentServices.filter((s) => s !== service)
      : [...currentServices, service];
    formik.setFieldValue("services", newServices);
  };

  const cityStyle = {
    fontSize: 12,
    color: "#888",
    textTransform: "uppercase",
    letterSpacing: 1,
    margin: "0 0 8px",
  };
  const addrStyle = {
    fontSize: 12.5,
    color: "#444",
    lineHeight: 1.65,
    margin: "0 0 4px",
  };
  const contactLineStyle = { fontSize: 12, color: "#666", margin: "2px 0" };

  return (
    <>
      <SEO
        title={seoConfig.contact.title}
        description={seoConfig.contact.description}
        keywords={seoConfig.contact.keywords}
        path={seoConfig.contact.path}
      />
      <div
        style={{
          background: "#f7f6f2",
          fontFamily: "Georgia, serif",
          minHeight: "100vh",
        }}
      >
        <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .contact-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 56px 48px 80px;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 64px;
          align-items: flex-start;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px 16px;
          margin-bottom: 24px;
        }

        @media (max-width: 768px) {
          .contact-wrapper {
            padding: 36px 20px 60px;
          }

          .contact-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .form-row {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .services-grid {
            grid-template-columns: 1fr;
            gap: 10px;
          }

          .contact-title {
            font-size: 32px !important;
          }
        }

        @media (max-width: 480px) {
          .contact-wrapper {
            padding: 28px 16px 48px;
          }

          .contact-title {
            font-size: 28px !important;
          }
        }
      `}</style>

        <div className="contact-wrapper">
          {/* Title */}
          <h1
            className="contact-title"
            style={{
              fontSize: 46,
              fontWeight: 900,
              color: "#1a1a1a",
              margin: "0 0 10px",
              letterSpacing: -1,
            }}
          >
            Get In Touch
          </h1>
          <div
            style={{ width: 60, height: 3, background: gold, marginBottom: 48 }}
          />

          {/* Two Column Layout */}
          <div className="contact-grid">
            {/* Left: Office Addresses */}
            <div>
              {/* Head Office */}
              <div
                style={{
                  marginBottom: 28,
                  paddingBottom: 28,
                  borderBottom: "1px solid #e0ddd5",
                }}
              >
                <h2
                  style={{
                    fontSize: 13,
                    fontWeight: 900,
                    textTransform: "uppercase",
                    letterSpacing: 2,
                    color: "#1a1a1a",
                    margin: "0 0 4px",
                  }}
                >
                  HEAD OFFICE
                </h2>
                <p style={cityStyle}>MUMBAI, INDIA</p>
                <p style={addrStyle}>{offices[0].address}</p>
                <p style={contactLineStyle}>Email: {offices[0].email}</p>
                <p style={contactLineStyle}>Mob: {offices[0].phone}</p>
              </div>

              {/* Branch Offices */}
              <div
                style={{
                  marginBottom: 28,
                  paddingBottom: 10,
                  borderBottom: "1px solid #e0ddd5",
                }}
              >
                <h2
                  style={{
                    fontSize: 13,
                    fontWeight: 900,
                    textTransform: "uppercase",
                    letterSpacing: 2,
                    color: "#1a1a1a",
                    margin: "0 0 20px",
                  }}
                >
                  BRANCH OFFICES
                </h2>
              </div>

              {branches.map((b, i) => (
                <div
                  key={i}
                  style={{
                    marginBottom: i < branches.length - 1 ? 24 : 0,
                    paddingBottom: i < branches.length - 1 ? 24 : 0,
                    borderBottom:
                      i < branches.length - 1 ? "1px solid #e0ddd5" : "none",
                  }}
                >
                  <p
                    style={{ ...cityStyle, color: "#1a1a1a", fontWeight: 700 }}
                  >
                    {b.city}
                  </p>
                  <p style={addrStyle}>{b.address}</p>
                  {b.phone && <p style={contactLineStyle}>Mob: {b.phone}</p>}
                  <p style={contactLineStyle}>Email: {b.email}</p>
                </div>
              ))}
            </div>

            {/* Right: Form */}
            <form onSubmit={formik.handleSubmit}>
              {/* Name + Email */}
              <div className="form-row">
                <div style={{ width: "100%" }}>
                  <input
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Name*"
                    style={inputStyle}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <div style={errorStyle}>{formik.errors.name}</div>
                  )}
                </div>
                <div style={{ width: "100%" }}>
                  <input
                    name="email"
                    type="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="E-mail*"
                    style={inputStyle}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div style={errorStyle}>{formik.errors.email}</div>
                  )}
                </div>
              </div>

              {/* Phone */}
              <div style={{ marginBottom: 20 }}>
                <input
                  name="phone"
                  type="tel"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Phone*"
                  style={inputStyle}
                />
                {formik.touched.phone && formik.errors.phone && (
                  <div style={errorStyle}>{formik.errors.phone}</div>
                )}
              </div>

              {/* Company */}
              <div style={{ marginBottom: 24 }}>
                <input
                  name="company"
                  value={formik.values.company}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Your Company Name & Location*"
                  style={inputStyle}
                />
                {formik.touched.company && formik.errors.company && (
                  <div style={errorStyle}>{formik.errors.company}</div>
                )}
              </div>

              {/* Services */}
              <p
                style={{
                  fontSize: 12,
                  color: "#444",
                  margin: "0 0 14px",
                  lineHeight: 1.5,
                }}
              >
                I require the following services ( select at least one )
              </p>
              <div className="services-grid">
                {services
                  .flat()
                  .filter(Boolean)
                  .map((s) => (
                    <label
                      key={s}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        fontSize: 12,
                        color: "#333",
                        cursor: "pointer",
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={formik.values.services.includes(s)}
                        onChange={() => handleServiceToggle(s)}
                        style={{
                          width: 13,
                          height: 13,
                          accentColor: gold,
                          cursor: "pointer",
                          flexShrink: 0,
                        }}
                      />
                      {s}
                    </label>
                  ))}
              </div>
              {formik.touched.services && formik.errors.services && (
                <div style={{ ...errorStyle, marginBottom: 16 }}>
                  {formik.errors.services}
                </div>
              )}

              {/* Anything else */}
              <div style={{ marginBottom: 28 }}>
                <input
                  name="anything"
                  value={formik.values.anything}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Anything else you would like us to know.."
                  style={inputStyle}
                />
                {formik.touched.anything && formik.errors.anything && (
                  <div style={errorStyle}>{formik.errors.anything}</div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                style={{
                  background: loading ? "#b8952e" : gold,
                  color: "#fff",
                  border: "none",
                  padding: "12px 36px",
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: 2,
                  cursor: loading ? "not-allowed" : "pointer",
                  fontFamily: "Georgia, serif",
                  opacity: loading ? 0.7 : 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  width: "100%",
                  maxWidth: 200,
                }}
              >
                {loading ? (
                  <>
                    <span
                      style={{
                        display: "inline-block",
                        width: "14px",
                        height: "14px",
                        border: "2px solid #fff",
                        borderTop: "2px solid transparent",
                        borderRadius: "50%",
                        animation: "spin 0.8s linear infinite",
                      }}
                    />
                    SENDING...
                  </>
                ) : (
                  "SUBMIT"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

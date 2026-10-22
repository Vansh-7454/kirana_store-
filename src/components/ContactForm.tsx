"use client";

import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import { siteContent } from "@/data/siteContent";
import { getPhoneLink, getWhatsAppLink } from "@/lib/contactHelpers";

interface FormData {
  fullName: string;
  contactMethod: string;
  inquiryType: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  contactMethod?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    contactMethod: "",
    inquiryType: "Product Availability",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedStatus, setSubmittedStatus] = useState<"idle" | "validated">("idle");

  const phoneInfo = getPhoneLink();
  const whatsappInfo = getWhatsAppLink();

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Name must be at least 2 characters.";
    }

    if (!formData.contactMethod.trim()) {
      newErrors.contactMethod = "Please enter your phone number or email.";
    } else {
      const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contactMethod.trim());
      const isPhone = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(
        formData.contactMethod.trim().replace(/\s+/g, "")
      );
      if (!isEmail && !isPhone) {
        newErrors.contactMethod = "Please enter a valid phone number (10+ digits) or a valid email address.";
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please write your grocery list, question, or note.";
    } else if (formData.message.trim().length < 8) {
      newErrors.message = "Message must be at least 8 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmittedStatus("validated");
    } else {
      setSubmittedStatus("idle");
    }
  };

  return (
    <div className={styles.formWrapper}>
      <form onSubmit={handleSubmit} noValidate>
        {/* Full Name Field */}
        <div className="form-group">
          <label htmlFor="contact-fullName" className="form-label">
            Your Full Name <span className="required" aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="contact-fullName"
            name="fullName"
            className={`form-input ${errors.fullName ? "has-error" : ""}`}
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Ramesh Sharma"
            aria-required="true"
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
          />
          {errors.fullName && (
            <span id="fullName-error" className="form-error" role="alert">
              {errors.fullName}
            </span>
          )}
        </div>

        {/* Contact Method (Phone / Email) */}
        <div className="form-group">
          <label htmlFor="contact-method" className="form-label">
            Phone Number or Email <span className="required" aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="contact-method"
            name="contactMethod"
            className={`form-input ${errors.contactMethod ? "has-error" : ""}`}
            value={formData.contactMethod}
            onChange={handleChange}
            placeholder="e.g. 9876543210 or yourname@gmail.com"
            aria-required="true"
            aria-invalid={!!errors.contactMethod}
            aria-describedby={errors.contactMethod ? "contactMethod-error" : undefined}
          />
          {errors.contactMethod && (
            <span id="contactMethod-error" className="form-error" role="alert">
              {errors.contactMethod}
            </span>
          )}
        </div>

        {/* Inquiry Subject */}
        <div className="form-group">
          <label htmlFor="contact-inquiryType" className="form-label">
            Inquiry Type
          </label>
          <select
            id="contact-inquiryType"
            name="inquiryType"
            className="form-select"
            value={formData.inquiryType}
            onChange={handleChange}
          >
            <option value="Product Availability">Check Item / Brand Availability</option>
            <option value="Home Delivery Order">Neighborhood Home Delivery</option>
            <option value="Monthly Grocery Order">Monthly Provision / Bulk List</option>
            <option value="General Store Query">General Store Question</option>
          </select>
        </div>

        {/* Message */}
        <div className="form-group">
          <label htmlFor="contact-message" className="form-label">
            Your Message or Grocery List <span className="required" aria-hidden="true">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            className={`form-textarea ${errors.message ? "has-error" : ""}`}
            value={formData.message}
            onChange={handleChange}
            placeholder="List the items you need (e.g., 5kg Chakki Atta, 1L Mustard Oil, 2L Toned Milk) or ask any questions..."
            rows={4}
            aria-required="true"
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <span id="message-error" className="form-error" role="alert">
              {errors.message}
            </span>
          )}
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Validate & Review Enquiry
        </button>
      </form>

      {/* Honest Form Status (No Fake Success Message) */}
      {submittedStatus === "validated" && (
        <div className={styles.noticeBox} role="status">
          <div className={styles.noticeTitle}>
            <span>⚠️ All Fields Validated (Static Website Notice)</span>
          </div>
          <p className={styles.noticeText}>
            All fields in your form were checked and verified. However, this is a static launch website without a connected backend or email service. <strong>Your message was NOT sent or saved anywhere.</strong>
          </p>
          <p className={styles.noticeText}>
            To reach our store counter immediately or place your order today, please contact us directly:
          </p>
          <div className={styles.noticeActions}>
            <a
              href={whatsappInfo.isPlaceholder ? "#unconfigured-whatsapp" : whatsappInfo.href}
              className="btn btn-whatsapp"
              target={whatsappInfo.isPlaceholder ? undefined : "_blank"}
              rel="noopener noreferrer"
            >
              💬 Send on WhatsApp ({siteContent.storeDetails.whatsapp})
            </a>
            <a
              href={phoneInfo.isPlaceholder ? "#unconfigured-phone" : phoneInfo.href}
              className="btn btn-secondary"
            >
              📞 Call Counter ({siteContent.storeDetails.phone})
            </a>
          </div>
        </div>
      )}

      {/* Short Privacy Note under the form */}
      <div className={styles.privacyNote}>
        <p>{siteContent.contact.privacyNote}</p>
      </div>
    </div>
  );
}

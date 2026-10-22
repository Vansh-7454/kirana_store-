import React from "react";
import type { Metadata } from "next";
import styles from "./contact.module.css";
import { siteContent } from "@/data/siteContent";
import ContactForm from "@/components/ContactForm";
import { getPhoneLink, getWhatsAppLink, getMapLink } from "@/lib/contactHelpers";

export const metadata: Metadata = {
  title: siteContent.contact.metaTitle,
  description: siteContent.contact.metaDescription,
};

export default function ContactPage() {
  const phoneInfo = getPhoneLink();
  const whatsappInfo = getWhatsAppLink("Hello! I would like to place an order for groceries.");
  const mapInfo = getMapLink();

  return (
    <>
      {/* Page Header */}
      <section className={styles.pageHeader} aria-labelledby="contact-page-heading">
        <div className={`container ${styles.headerInner}`}>
          <span className="section-badge">Reach Us</span>
          <h1 id="contact-page-heading">{siteContent.contact.headline}</h1>
          <p className={styles.headerIntro}>{siteContent.contact.intro}</p>
          <div className="btn-group">
            <a
              href={whatsappInfo.isPlaceholder ? "#whatsapp-card" : whatsappInfo.href}
              target={whatsappInfo.isPlaceholder ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              💬 {siteContent.contact.whatsappButtonText}
            </a>
            <a
              href={phoneInfo.isPlaceholder ? "#phone-card" : phoneInfo.href}
              className="btn btn-primary"
            >
              📞 {siteContent.contact.callButtonText}
            </a>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section" aria-labelledby="contact-details-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-badge section-badge-accent">Direct Contact</span>
            <h2 id="contact-details-heading">Store Counter & Ordering Channels</h2>
            <p>
              Connect directly with our team for daily orders, price checks, or neighborhood delivery queries.
            </p>
          </div>

          <div className={styles.contactGrid}>
            {/* Left Column: Direct Contact Info Cards */}
            <div className={styles.cardsStack}>
              {/* WhatsApp Card */}
              <div id="whatsapp-card" className={styles.contactCard}>
                <div className={styles.cardHeaderRow}>
                  <span className={styles.cardIcon} aria-hidden="true">💬</span>
                  <h3 className={styles.cardTitle}>WhatsApp Ordering</h3>
                </div>
                <p className={styles.cardValue}>{siteContent.storeDetails.whatsapp}</p>
                <p>Send your handwritten list, voice note, or item names for quick packing.</p>
                {whatsappInfo.isPlaceholder ? (
                  <div className={styles.placeholderWarning}>
                    ⚠️ Placeholder: Replace <code>whatsapp</code> and <code>whatsappRaw</code> in <code>src/data/siteContent.ts</code> to enable direct chat.
                  </div>
                ) : (
                  <a
                    href={whatsappInfo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                  >
                    Open WhatsApp Chat →
                  </a>
                )}
              </div>

              {/* Telephone Card */}
              <div id="phone-card" className={styles.contactCard}>
                <div className={styles.cardHeaderRow}>
                  <span className={styles.cardIcon} aria-hidden="true">📞</span>
                  <h3 className={styles.cardTitle}>Telephone Counter</h3>
                </div>
                <p className={styles.cardValue}>{siteContent.storeDetails.phone}</p>
                <p>Speak directly with the shopkeeper during opening hours.</p>
                {phoneInfo.isPlaceholder ? (
                  <div className={styles.placeholderWarning}>
                    ⚠️ Placeholder: Replace <code>phone</code> and <code>phoneRaw</code> in <code>src/data/siteContent.ts</code> to enable tap-to-call.
                  </div>
                ) : (
                  <a href={phoneInfo.href} className="btn btn-primary">
                    Tap to Call Store Counter
                  </a>
                )}
              </div>

              {/* Physical Address & Map Card */}
              <div id="address-card" className={styles.contactCard}>
                <div className={styles.cardHeaderRow}>
                  <span className={styles.cardIcon} aria-hidden="true">📍</span>
                  <h3 className={styles.cardTitle}>Store Location</h3>
                </div>
                <p className={styles.cardValue}>{siteContent.storeDetails.address}</p>
                <p><strong>Service Area:</strong> {siteContent.storeDetails.serviceArea}</p>
                {mapInfo.isPlaceholder ? (
                  <div className={styles.placeholderWarning}>
                    ⚠️ Placeholder: Update <code>address</code> and <code>mapQueryUrl</code> in <code>src/data/siteContent.ts</code> to connect live Google Maps.
                  </div>
                ) : (
                  <a
                    href={mapInfo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    🗺️ {siteContent.contact.mapButtonText}
                  </a>
                )}
              </div>

              {/* Opening Hours Card */}
              <div className={styles.contactCard}>
                <div className={styles.cardHeaderRow}>
                  <span className={styles.cardIcon} aria-hidden="true">🕒</span>
                  <h3 className={styles.cardTitle}>Counter Timings</h3>
                </div>
                <p className={styles.cardValue}>{siteContent.storeDetails.openingHours}</p>
                <p><strong>Doorstep Delivery:</strong> {siteContent.storeDetails.deliveryNote}</p>
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <div>
              <div style={{ marginBottom: "var(--space-4)" }}>
                <span className="section-badge">Send Inquiry</span>
                <h2>{siteContent.contact.formHeadline}</h2>
                <p>{siteContent.contact.formIntro}</p>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

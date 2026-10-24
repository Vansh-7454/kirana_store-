import React from "react";
import type { Metadata } from "next";
import styles from "./contact.module.css";
import { siteContent } from "@/data/siteContent";
import StoreStatusBadge from "@/components/StoreStatusBadge";

export const metadata: Metadata = {
  title: siteContent.contact.metaTitle,
  description: siteContent.contact.metaDescription,
};

export default function ContactPage() {
  return (
    <div className={styles.contactPage}>
      {/* ===================================================================
          1. COMPACT PAGE HEADER WITH STATUS BADGE
          =================================================================== */}
      <section className={styles.pageHeader} aria-labelledby="contact-heading">
        <div className={`container ${styles.headerInner}`}>
          <span className="section-badge">Visit & Connect</span>
          <h1 id="contact-heading" className={styles.pageTitle}>
            Store Location & Hours
          </h1>
          <p className={styles.pageIntro}>
            {siteContent.contact.intro}
          </p>

          <div className={styles.statusWrap}>
            <StoreStatusBadge />
          </div>
        </div>
      </section>

      {/* ===================================================================
          2. STORE DETAILS & GOOGLE MAP GRID
          =================================================================== */}
      <section className={styles.contentSection} aria-label="Store Location and Contacts">
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Left Column: Store Details Card */}
            <div className={styles.detailsCard}>
              <div className={styles.cardHeader}>
                <h2 className={styles.cardTitle}>Counter Information</h2>
                <p className={styles.cardSubtitle}>
                  Verified contact details and timings for Sharma General Store.
                </p>
              </div>

              {/* Store & Locality */}
              <div className={styles.detailRow}>
                <div className={styles.detailIcon} aria-hidden="true">🏪</div>
                <div className={styles.detailInfo}>
                  <div className={styles.detailLabel}>Store Name & Locality</div>
                  <div className={styles.detailValue}>
                    <strong>{siteContent.storeDetails.name}</strong>
                    <br />
                    <span>{siteContent.storeDetails.address}</span>
                  </div>
                </div>
              </div>

              {/* Opening Hours & Schedule */}
              <div className={styles.detailRow}>
                <div className={styles.detailIcon} aria-hidden="true">🕒</div>
                <div className={styles.detailInfo}>
                  <div className={styles.detailLabel}>Operating Hours</div>
                  <div className={styles.detailValue}>
                    <strong>{siteContent.storeDetails.openingHoursDisplay}</strong>
                    <br />
                    <span className={styles.detailMuted}>
                      Open Monday to Sunday (All 7 Days)
                    </span>
                  </div>
                </div>
              </div>

              {/* Phone Helpline */}
              <div className={styles.detailRow}>
                <div className={styles.detailIcon} aria-hidden="true">📞</div>
                <div className={styles.detailInfo}>
                  <div className={styles.detailLabel}>Store Phone Helpline</div>
                  <div className={styles.detailValue}>
                    <a
                      href={`tel:${siteContent.storeDetails.phoneRaw}`}
                      className={styles.contactLink}
                    >
                      {siteContent.storeDetails.phone}
                    </a>
                    <br />
                    <span className={styles.detailMuted}>
                      Available during 7:00 AM – 10:00 PM
                    </span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Ordering */}
              <div className={styles.detailRow}>
                <div className={styles.detailIcon} aria-hidden="true">💬</div>
                <div className={styles.detailInfo}>
                  <div className={styles.detailLabel}>WhatsApp Quick Order</div>
                  <div className={styles.detailValue}>
                    <a
                      href={siteContent.storeDetails.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.contactLink}
                    >
                      {siteContent.storeDetails.whatsapp}
                    </a>
                    <br />
                    <span className={styles.detailMuted}>
                      Send typed list, handwritten photo, or voice note
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className={styles.actionsGroup}>
                <a
                  href={siteContent.storeDetails.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-block"
                  style={{ fontSize: "16px", padding: "13px 20px" }}
                >
                  💬 Order on WhatsApp Now
                </a>

                <a
                  href={`tel:${siteContent.storeDetails.phoneRaw}`}
                  className="btn btn-primary btn-block"
                  style={{ fontSize: "16px", padding: "13px 20px" }}
                >
                  📞 Call Counter ({siteContent.storeDetails.phone})
                </a>
              </div>
            </div>

            {/* Right Column: Google Maps Embed & Get Directions */}
            <div className={styles.mapWrapper}>
              <div className={styles.mapFrameContainer}>
                <iframe
                  title="Sharma General Store Location in Indirapuram, Ghaziabad"
                  src={siteContent.storeDetails.mapEmbedUrl}
                  className={styles.mapFrame}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className={styles.mapFooter}>
                <div>
                  <div className={styles.mapLocalityTitle}>
                    📍 {siteContent.storeDetails.locality}
                  </div>
                  <div className={styles.mapLocalitySubtitle}>
                    Serving residential societies across Ahinsa Khand
                  </div>
                </div>

                <a
                  href={siteContent.storeDetails.mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ fontWeight: 700, padding: "10px 18px" }}
                >
                  🗺️ Get Directions →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

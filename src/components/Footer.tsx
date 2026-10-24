"use client";

import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";
import { siteContent } from "@/data/siteContent";
import WordmarkLogo from "./WordmarkLogo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        {/* Brand & Locality */}
        <div className={styles.brandCol}>
          <WordmarkLogo isLight={true} />
          <p className={styles.brandDesc}>
            Your trusted family-owned Kirana store serving residential societies across Indirapuram, Ghaziabad with everyday pantry staples and prompt doorstep delivery.
          </p>
          <div className={styles.localityTag}>
            <svg
              className={styles.localityPin}
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>{siteContent.storeDetails.locality}</span>
          </div>
        </div>

        {/* Quick Navigation (Strictly 3 Pages) */}
        <div className={styles.navCol}>
          <h3 className={styles.colTitle}>Store Navigation</h3>
          <ul className={styles.linkList}>
            {siteContent.navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.footerLink}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Verified Store Hours & WhatsApp CTA */}
        <div className={styles.infoCol}>
          <h3 className={styles.colTitle}>Store Hours & Contact</h3>
          <ul className={styles.infoList}>
            <li className={styles.infoItem}>
              <div className={styles.infoIconWrap} aria-hidden="true">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div className={styles.infoTextGroup}>
                <span className={styles.infoPrimary}>
                  Daily: {siteContent.storeDetails.openingHoursDisplay}
                </span>
                <span className={styles.infoSub}>
                  Open Monday through Sunday
                </span>
              </div>
            </li>

            <li className={styles.infoItem}>
              <div className={styles.infoIconWrap} aria-hidden="true">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className={styles.infoTextGroup}>
                <a
                  href={`tel:${siteContent.storeDetails.phoneRaw}`}
                  className={styles.phoneLink}
                >
                  {siteContent.storeDetails.phone}
                </a>
                <span className={styles.infoSub}>
                  Direct store counter line
                </span>
              </div>
            </li>
          </ul>

          <div className={styles.ctaWrap}>
            <a
              href={siteContent.storeDetails.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappBtn}
            >
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12.031 2C6.51 2 2.016 6.49 2.016 12c0 1.94.55 3.75 1.51 5.28L2 22l4.89-1.48A9.94 9.94 0 0 0 12.03 22c5.52 0 10.01-4.49 10.01-10s-4.49-10-10.01-10zm5.88 14.19c-.25.7-.99 1.28-1.74 1.44-.5.11-1.15.19-3.33-.71-2.79-1.15-4.57-3.99-4.71-4.18-.14-.19-1.13-1.5-1.13-2.86 0-1.36.71-2.03.96-2.31.25-.28.56-.35.74-.35.19 0 .37.01.53.02.17.01.4-.06.63.48.24.56.81 1.98.88 2.13.07.14.12.31.02.5-.1.19-.15.3-.29.47-.15.17-.31.37-.44.5-.15.15-.31.31-.13.62.18.31.8 1.32 1.72 2.14 1.18 1.05 2.18 1.37 2.49 1.53.31.15.49.13.67-.08.19-.21.79-.92 1-1.23.21-.31.43-.26.72-.15.29.11 1.83.86 2.14 1.02.31.15.52.23.6.36.08.13.08.76-.17 1.46z" />
              </svg>
              <span>Order on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Dynamic Bottom Bar */}
      <div className={styles.bottomBarWrap}>
        <div className={`container ${styles.bottomBar}`}>
          <p>© {currentYear} {siteContent.storeDetails.name}. All rights reserved.</p>
          <p className={styles.bottomLocality}>
            Serving Indirapuram, Ghaziabad · Asia/Kolkata
          </p>
        </div>
      </div>
    </footer>
  );
}

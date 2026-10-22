"use client";

import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";
import { siteContent } from "@/data/siteContent";
import { getPhoneLink, getWhatsAppLink, getMapLink } from "@/lib/contactHelpers";

export default function Footer() {
  const phoneInfo = getPhoneLink();
  const whatsappInfo = getWhatsAppLink("Hello! I want to enquire about groceries.");
  const mapInfo = getMapLink();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        {/* Brand Column */}
        <div className={styles.brandCol}>
          <div className={styles.footerLogo}>{siteContent.storeDetails.shortName}</div>
          <p className={styles.footerDesc}>{siteContent.storeDetails.tagline}</p>
          <div className={styles.placeholderNote}>
            <span>⚙️ Details managed in <code>src/data/siteContent.ts</code></span>
          </div>
        </div>

        {/* Quick Links Column */}
        <div>
          <h2 className={styles.colTitle}>Quick Links</h2>
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

        {/* Contact Info Column */}
        <div>
          <h2 className={styles.colTitle}>Store & Timings</h2>
          <ul className={styles.contactList}>
            <li className={styles.contactItem}>
              <span className={styles.contactIcon} aria-hidden="true">📍</span>
              <span>{siteContent.storeDetails.address}</span>
            </li>
            <li className={styles.contactItem}>
              <span className={styles.contactIcon} aria-hidden="true">📞</span>
              <span>{siteContent.storeDetails.phone}</span>
            </li>
            <li className={styles.contactItem}>
              <span className={styles.contactIcon} aria-hidden="true">🕒</span>
              <span>{siteContent.storeDetails.openingHours}</span>
            </li>
            <li className={styles.contactItem}>
              <span className={styles.contactIcon} aria-hidden="true">🛵</span>
              <span>{siteContent.storeDetails.deliveryNote}</span>
            </li>
          </ul>
        </div>

        {/* Direct Action Column */}
        <div>
          <h2 className={styles.colTitle}>Direct Connect</h2>
          <div className={styles.actionStack}>
            <a
              href={whatsappInfo.isPlaceholder ? "/contact#whatsapp" : whatsappInfo.href}
              target={whatsappInfo.isPlaceholder ? undefined : "_blank"}
              rel="noopener noreferrer"
              className={`btn btn-whatsapp ${styles.footerBtn}`}
              title={whatsappInfo.isPlaceholder ? "Placeholder: WhatsApp number not yet configured" : "Open WhatsApp chat"}
            >
              💬 WhatsApp Order
            </a>

            <a
              href={phoneInfo.isPlaceholder ? "/contact#phone" : phoneInfo.href}
              className={`btn btn-secondary ${styles.footerBtn}`}
              title={phoneInfo.isPlaceholder ? "Placeholder: Phone number not yet configured" : "Call store"}
            >
              📞 Call Counter
            </a>

            <a
              href={mapInfo.isPlaceholder ? "/contact#address" : mapInfo.href}
              target={mapInfo.isPlaceholder ? undefined : "_blank"}
              rel="noopener noreferrer"
              className={`btn btn-secondary ${styles.footerBtn}`}
              title={mapInfo.isPlaceholder ? "Placeholder: Map location not yet configured" : "Open in Google Maps"}
            >
              🗺️ Store Directions
            </a>
          </div>
        </div>
      </div>

      <div className={`container ${styles.bottomBar}`}>
        <p>© 2026 {siteContent.storeDetails.name}. All rights reserved.</p>
        <p>Built with Next.js (App Router) & TypeScript.</p>
      </div>
    </footer>
  );
}

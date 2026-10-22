"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import { siteContent } from "@/data/siteContent";
import { getPhoneLink, getWhatsAppLink } from "@/lib/contactHelpers";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const phoneInfo = getPhoneLink();
  const whatsappInfo = getWhatsAppLink("Hello! I would like to place an order.");

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      {/* Top Notification Bar */}
      <div className={styles.topBar}>
        <div className={`container ${styles.topBarInner}`}>
          <div className={styles.topBarItem}>
            <span>🕒 {siteContent.storeDetails.openingHours}</span>
          </div>
          <div className={styles.topBarItem}>
            <span>📍 {siteContent.storeDetails.serviceArea}</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={styles.navBar}>
        <div className={`container ${styles.navContainer}`}>
          {/* Starter Text-Based Logo */}
          <Link href="/" className={styles.logo} aria-label={`${siteContent.storeDetails.shortName} Homepage`}>
            <div className={styles.logoIcon} aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
                <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                <path d="M10 13a2 2 0 0 0 4 0" />
              </svg>
            </div>
            <div className={styles.logoTextGroup}>
              <span className={styles.logoTitle}>{siteContent.storeDetails.shortName}</span>
              <span className={styles.logoSubtitle}>Neighborhood Grocery</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className={styles.desktopNav} aria-label="Main Navigation">
            {siteContent.navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Header Quick Actions */}
          <div className={styles.headerActions}>
            <a
              href={whatsappInfo.isPlaceholder ? "/contact#whatsapp" : whatsappInfo.href}
              target={whatsappInfo.isPlaceholder ? undefined : "_blank"}
              rel="noopener noreferrer"
              className={`btn btn-whatsapp ${styles.actionBtn}`}
              title={whatsappInfo.isPlaceholder ? "Placeholder: WhatsApp number not yet configured" : "Chat on WhatsApp"}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              <span>WhatsApp</span>
            </a>

            <a
              href={phoneInfo.isPlaceholder ? "/contact#phone" : phoneInfo.href}
              className={`btn btn-primary ${styles.actionBtn}`}
              title={phoneInfo.isPlaceholder ? "Placeholder: Phone number not yet configured" : "Call Store"}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>Call Us</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className={styles.mobileToggle}
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Accessible Mobile Navigation Drawer */}
      <div
        id="mobile-navigation"
        className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ""}`}
        role="region"
        aria-label="Mobile Navigation"
      >
        <ul className={styles.mobileNavList}>
          {siteContent.navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`${styles.mobileNavLink} ${isActive ? styles.mobileNavLinkActive : ""}`}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className={styles.mobileActions}>
          <a
            href={whatsappInfo.isPlaceholder ? "/contact#whatsapp" : whatsappInfo.href}
            target={whatsappInfo.isPlaceholder ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-block"
          >
            💬 Chat on WhatsApp
          </a>
          <a
            href={phoneInfo.isPlaceholder ? "/contact#phone" : phoneInfo.href}
            className="btn btn-primary btn-block"
          >
            📞 Call Store Counter
          </a>
        </div>
      </div>
    </header>
  );
}

"use client";

import React, { useState, useEffect, useRef, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import { siteContent } from "@/data/siteContent";
import WordmarkLogo from "./WordmarkLogo";
import StoreStatusBadge from "./StoreStatusBadge";

const emptySubscribe = () => () => {};

export default function Header() {
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  // Close mobile menu on route change during render
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsMobileMenuOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile dropdown when clicking outside or pressing Escape
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside, { passive: true });
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      ref={headerRef}
      className={`${styles.header} ${isScrolled ? styles.headerScrolled : ""}`}
    >
      <div className={`container ${styles.headerInner}`}>
        {/* Left: Wordmark Logo */}
        <div className={styles.logoWrap}>
          <WordmarkLogo />
        </div>

        {/* Center: Desktop Navigation */}
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
                <span>{link.label}</span>
                {isActive && <span className={styles.activeIndicator} />}
              </Link>
            );
          })}
        </nav>

        {/* Right: WhatsApp CTA & Mobile Toggle */}
        <div className={styles.headerActions}>
          <a
            href={siteContent.storeDetails.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappHeaderBtn}
            aria-label="Order on WhatsApp"
          >
            <svg
              className={styles.whatsappIcon}
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12.031 2C6.51 2 2.016 6.49 2.016 12c0 1.94.55 3.75 1.51 5.28L2 22l4.89-1.48A9.94 9.94 0 0 0 12.03 22c5.52 0 10.01-4.49 10.01-10s-4.49-10-10.01-10zm5.88 14.19c-.25.7-.99 1.28-1.74 1.44-.5.11-1.15.19-3.33-.71-2.79-1.15-4.57-3.99-4.71-4.18-.14-.19-1.13-1.5-1.13-2.86 0-1.36.71-2.03.96-2.31.25-.28.56-.35.74-.35.19 0 .37.01.53.02.17.01.4-.06.63.48.24.56.81 1.98.88 2.13.07.14.12.31.02.5-.1.19-.15.3-.29.47-.15.17-.31.37-.44.5-.15.15-.31.31-.13.62.18.31.8 1.32 1.72 2.14 1.18 1.05 2.18 1.37 2.49 1.53.31.15.49.13.67-.08.19-.21.79-.92 1-1.23.21-.31.43-.26.72-.15.29.11 1.83.86 2.14 1.02.31.15.52.23.6.36.08.13.08.76-.17 1.46z" />
            </svg>
            <span className={styles.whatsappBtnText}>Order on WhatsApp</span>
          </a>

          {/* Mobile Menu Hamburger / Close Toggle */}
          <button
            type="button"
            className={`${styles.mobileToggle} ${isMobileMenuOpen ? styles.mobileToggleActive : ""}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-dropdown-menu"
          >
            {isMobileMenuOpen ? (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-dropdown-menu"
          className={styles.mobileDropdown}
          role="region"
          aria-label="Mobile Navigation"
        >
          <div className={`container ${styles.mobileDropdownInner}`}>
            <nav className={styles.mobileNavList} aria-label="Mobile Links">
              {siteContent.navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`${styles.mobileNavLink} ${isActive ? styles.mobileNavLinkActive : ""}`}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className={styles.mobileNavLabel}>{link.label}</span>
                    {isActive ? (
                      <span className={styles.mobileActiveDot} aria-hidden="true" />
                    ) : (
                      <span className={styles.mobileNavArrow} aria-hidden="true">→</span>
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className={styles.mobileDropdownDivider} />

            <div className={styles.mobileStoreInfoCard}>
              <StoreStatusBadge />
              <div className={styles.mobileStoreAddress}>
                <span>📍 {siteContent.storeDetails.address}</span>
              </div>
            </div>

            <div className={styles.mobileActionButtons}>
              <a
                href={siteContent.storeDetails.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mobileWhatsappBtn}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg
                  className={styles.actionIcon}
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12.031 2C6.51 2 2.016 6.49 2.016 12c0 1.94.55 3.75 1.51 5.28L2 22l4.89-1.48A9.94 9.94 0 0 0 12.03 22c5.52 0 10.01-4.49 10.01-10s-4.49-10-10.01-10zm5.88 14.19c-.25.7-.99 1.28-1.74 1.44-.5.11-1.15.19-3.33-.71-2.79-1.15-4.57-3.99-4.71-4.18-.14-.19-1.13-1.5-1.13-2.86 0-1.36.71-2.03.96-2.31.25-.28.56-.35.74-.35.19 0 .37.01.53.02.17.01.4-.06.63.48.24.56.81 1.98.88 2.13.07.14.12.31.02.5-.1.19-.15.3-.29.47-.15.17-.31.37-.44.5-.15.15-.31.31-.13.62.18.31.8 1.32 1.72 2.14 1.18 1.05 2.18 1.37 2.49 1.53.31.15.49.13.67-.08.19-.21.79-.92 1-1.23.21-.31.43-.26.72-.15.29.11 1.83.86 2.14 1.02.31.15.52.23.6.36.08.13.08.76-.17 1.46z" />
                </svg>
                <span>Order on WhatsApp</span>
              </a>

              <a
                href={`tel:${siteContent.storeDetails.phoneRaw}`}
                className={styles.mobileCallBtn}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg
                  className={styles.actionIcon}
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>Call Store Counter</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop overlay portaled to document.body */}
      {isMounted &&
        isMobileMenuOpen &&
        createPortal(
          <div
            className={styles.mobileBackdrop}
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />,
          document.body
        )}
    </header>
  );
}

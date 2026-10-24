import React from "react";
import Link from "next/link";
import styles from "./WordmarkLogo.module.css";
import { siteContent } from "@/data/siteContent";

interface WordmarkLogoProps {
  isLight?: boolean;
}

export default function WordmarkLogo({ isLight = false }: WordmarkLogoProps) {
  return (
    <Link
      href="/"
      className={`${styles.logoLink} ${isLight ? styles.logoLight : ""}`}
      aria-label={`${siteContent.storeDetails.name} Home`}
    >
      <div className={styles.logoIcon} aria-hidden="true">
        {/* Restrained grocery leaf/grain motif */}
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M11 20A7 7 0 0 1 4 13c0-4.4 3.6-8 8-8s8 3.6 8 8a7 7 0 0 1-7 7" />
          <path d="M12 9v11" />
          <path d="m8 15 4-4 4 4" />
        </svg>
      </div>

      <div className={styles.logoText}>
        <span className={styles.brandName}>{siteContent.storeDetails.brandName}</span>
        <span className={styles.brandSub}>{siteContent.storeDetails.brandSub}</span>
      </div>
    </Link>
  );
}

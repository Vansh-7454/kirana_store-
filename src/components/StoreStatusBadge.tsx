"use client";

import React, { useState, useEffect } from "react";
import styles from "./StoreStatusBadge.module.css";
import { siteContent } from "@/data/siteContent";

export function checkIsOpenKolkata(date = new Date()): boolean {
  try {
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: siteContent.storeDetails.timeZone || "Asia/Kolkata",
      hour: "numeric",
      minute: "numeric",
      hourCycle: "h23",
    });

    const parts = formatter.formatToParts(date);
    const hourPart = parts.find((p) => p.type === "hour")?.value ?? "0";
    const minutePart = parts.find((p) => p.type === "minute")?.value ?? "0";

    const hour = parseInt(hourPart, 10);
    const minute = parseInt(minutePart, 10);
    const totalMinutes = hour * 60 + minute;

    // Open from 07:00 (420 mins) up to, but not including, 22:00 (1320 mins)
    const openTimeMinutes = siteContent.storeDetails.openingHour * 60; // 420
    const closeTimeMinutes = siteContent.storeDetails.closingHour * 60; // 1320

    return totalMinutes >= openTimeMinutes && totalMinutes < closeTimeMinutes;
  } catch (err) {
    console.error("Error calculating Kolkata store status:", err);
    return true; // Fallback
  }
}

interface StoreStatusBadgeProps {
  className?: string;
}

export default function StoreStatusBadge({ className }: StoreStatusBadgeProps) {
  // Start with calculation based on current time
  const [isOpen, setIsOpen] = useState<boolean>(() => checkIsOpenKolkata());

  useEffect(() => {
    // Automatically refresh every 30 seconds so if the user leaves the page open
    // past 07:00 AM or 10:00 PM, the status updates automatically
    const interval = setInterval(() => {
      setIsOpen(checkIsOpenKolkata());
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`${styles.statusBadge} ${isOpen ? styles.statusOpen : styles.statusClosed} ${className || ""}`}
      role="status"
      aria-live="polite"
    >
      <span className={styles.statusDot} aria-hidden="true" />
      <span className={styles.statusText}>
        {isOpen ? (
          <>
            <strong>Open Now</strong> · {siteContent.storeDetails.openingHoursDisplay}
          </>
        ) : (
          <>
            <strong>Closed</strong> · Opens at 7:00 AM
          </>
        )}
      </span>
    </div>
  );
}

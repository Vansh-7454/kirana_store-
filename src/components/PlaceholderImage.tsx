import React from "react";
import styles from "./PlaceholderImage.module.css";

interface PlaceholderImageProps {
  title: string;
  categoryTag?: string;
  aspectRatio?: "4/3" | "16/9" | "1/1";
  alt: string;
  recommendedPhoto?: string;
  className?: string;
}

export default function PlaceholderImage({
  title,
  categoryTag,
  aspectRatio = "4/3",
  alt,
  recommendedPhoto,
  className = "",
}: PlaceholderImageProps) {
  const ratioClass =
    aspectRatio === "16/9"
      ? styles.ratio169
      : aspectRatio === "1/1"
      ? styles.ratio11
      : styles.ratio43;

  return (
    <div
      className={`${styles.wrapper} ${ratioClass} ${className}`}
      role="img"
      aria-label={alt}
    >
      <svg
        className={styles.icon}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
        <circle cx="9" cy="9" r="2" />
        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
      </svg>
      {categoryTag && <span className={styles.tag}>{categoryTag}</span>}
      <span className={styles.title}>{title}</span>
      {recommendedPhoto && (
        <span className={styles.swapNotice}>
          <strong>Photo to send:</strong> {recommendedPhoto}
        </span>
      )}
    </div>
  );
}

import React from "react";
import Image from "next/image";
import styles from "./StoreImage.module.css";

interface StoreImageProps {
  src: string;
  alt: string;
  aspectRatio?: "4/3" | "16/9" | "1/1";
  priority?: boolean;
  className?: string;
  sizes?: string;
}

export default function StoreImage({
  src,
  alt,
  aspectRatio = "16/9",
  priority = false,
  className = "",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
}: StoreImageProps) {
  const ratioClass =
    aspectRatio === "4/3"
      ? styles.ratio43
      : aspectRatio === "1/1"
      ? styles.ratio11
      : styles.ratio169;

  return (
    <div className={`${styles.imageContainer} ${ratioClass} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={styles.image}
      />
    </div>
  );
}

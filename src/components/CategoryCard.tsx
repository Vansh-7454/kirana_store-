import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./CategoryCard.module.css";
import { GroceryCategory } from "@/data/categoriesData";

interface CategoryCardProps {
  category: GroceryCategory;
  href?: string;
  index?: number;
}

export default function CategoryCard({
  category,
  href = `/products#${category.slug}`,
  index = 0,
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      id={`cat-${category.slug}`}
      className={styles.categoryCard}
      aria-label={`Browse ${category.name} category`}
    >
      {/* Softly colored, rounded square image container */}
      <div
        className={styles.imageContainer}
        style={{
          backgroundColor: category.bgColor || "#F4E1CF",
        }}
      >
        <div className={styles.imageWrapper}>
          <Image
            src={category.imageSrc}
            alt={category.imageAlt}
            width={320}
            height={320}
            className={styles.categoryImage}
            loading={index < 4 ? "eager" : "lazy"}
          />
        </div>
      </div>

      {/* Category Name Centered Directly Beneath Image */}
      <h3 className={styles.categoryTitle}>{category.name}</h3>
    </Link>
  );
}

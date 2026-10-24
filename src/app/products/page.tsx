import React from "react";
import type { Metadata } from "next";
import styles from "./products.module.css";
import { siteContent } from "@/data/siteContent";
import { EXACT_CATEGORIES } from "@/data/categoriesData";
import CategoryCard from "@/components/CategoryCard";

export const metadata: Metadata = {
  title: siteContent.products.metaTitle,
  description: siteContent.products.metaDescription,
};

export default function ProductsPage() {
  return (
    <div className={styles.productsPage}>
      {/* ===================================================================
          1. COMPACT EDITORIAL PAGE INTRO
          =================================================================== */}
      <section className={styles.pageHeader} aria-labelledby="products-page-title">
        <div className={`container ${styles.headerInner}`}>
          <span className="section-badge">Store Provisions</span>
          <h1 id="products-page-title" className={styles.pageTitle}>
            Everything for Your Everyday Kitchen
          </h1>
          <p className={styles.pageIntro}>
            Browse the eight essential grocery categories stocked daily at Sharma General Store in Indirapuram. Tap any category to send your order directly on WhatsApp.
          </p>

          <div className={styles.headerActionWrap}>
            <a
              href={siteContent.storeDetails.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              💬 Order on WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* ===================================================================
          2. EXACTLY EIGHT DISTINCTIVE GROCERY CATEGORY CARDS
          =================================================================== */}
      <section className={styles.catalogSection} aria-label="Grocery Categories">
        <div className="container">
          <div className={styles.grid}>
            {EXACT_CATEGORIES.map((category, idx) => (
              <CategoryCard
                key={category.id}
                category={category}
                index={idx}
                href={siteContent.storeDetails.whatsappUrl}
              />
            ))}
          </div>

          {/* Quick WhatsApp Order Callout Card */}
          <div className={styles.orderCallout}>
            <div className={styles.orderCalloutContent}>
              <span className={styles.calloutBadge}>Direct Store Counter</span>
              <h2 className={styles.orderCalloutTitle}>
                Ready to order from Sharma General Store?
              </h2>
              <p className={styles.orderCalloutText}>
                Send your grocery shopping list directly to our store counter on WhatsApp. We verify items in stock, pack them fresh, and deliver to your society doorstep.
              </p>
            </div>

            <div className={styles.calloutActions}>
              <a
                href={siteContent.storeDetails.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ fontSize: "16px", padding: "13px 26px" }}
              >
                💬 Send Grocery List on WhatsApp
              </a>
              <a
                href={`tel:${siteContent.storeDetails.phoneRaw}`}
                className="btn btn-secondary"
                style={{ fontSize: "16px", padding: "13px 24px" }}
              >
                📞 Call Shopkeeper ({siteContent.storeDetails.phone})
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

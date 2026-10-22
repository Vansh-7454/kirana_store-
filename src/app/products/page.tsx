import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import styles from "./products.module.css";
import { siteContent } from "@/data/siteContent";
import StoreImage from "@/components/StoreImage";
import { getPhoneLink, getWhatsAppLink } from "@/lib/contactHelpers";

export const metadata: Metadata = {
  title: siteContent.products.metaTitle,
  description: siteContent.products.metaDescription,
};

export default function ProductsPage() {
  const phoneInfo = getPhoneLink();

  return (
    <>
      {/* Page Header */}
      <section className={styles.pageHeader} aria-labelledby="products-page-heading">
        <div className={`container ${styles.headerInner}`}>
          <span className="section-badge">Store Catalog</span>
          <h1 id="products-page-heading">{siteContent.products.headline}</h1>
          <p className={styles.headerIntro}>{siteContent.products.intro}</p>
          <div className="btn-group">
            <Link href="/contact" className="btn btn-primary">
              {siteContent.products.orderCtaText}
            </Link>
            <a
              href={phoneInfo.isPlaceholder ? "/contact#phone" : phoneInfo.href}
              className="btn btn-secondary"
            >
              📞 Call Counter for Availability
            </a>
          </div>
        </div>
      </section>

      {/* Main Products Grid */}
      <section className="section" aria-labelledby="all-categories-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-badge section-badge-accent">Categories</span>
            <h2 id="all-categories-heading">Daily Grocery & Provision Sections</h2>
            <p>
              Browse our regular stock items below. Every item is verified for freshness, authentic packaging, and genuine manufacturing dates.
            </p>
          </div>

          <div className={styles.productsGrid}>
            {siteContent.products.categories.map((category) => {
              const categoryWhatsapp = getWhatsAppLink(
                `Hello! I would like to check availability or order items from "${category.title}".`
              );

              return (
                <article
                  key={category.id}
                  id={category.id}
                  className={styles.categoryCard}
                  aria-labelledby={`cat-title-${category.id}`}
                >
                  <StoreImage
                    src={category.imageSrc}
                    alt={category.imageAlt}
                    aspectRatio="16/9"
                    sizes="(max-width: 860px) 100vw, 550px"
                  />

                  <div className={styles.cardContent}>
                    <h3 id={`cat-title-${category.id}`} className={styles.categoryTitle}>
                      {category.title}
                    </h3>
                    <p className={styles.categoryDesc}>{category.shortDescription}</p>

                    <h4 className={styles.itemsSectionTitle}>Common In-Stock Items</h4>
                    <ul className={styles.itemList}>
                      {category.items.map((item, idx) => (
                        <li key={idx} className={styles.itemBullet}>
                          <span className={styles.checkMark} aria-hidden="true">✔</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className={styles.cardFooter}>
                      <a
                        href={categoryWhatsapp.isPlaceholder ? "/contact#whatsapp" : categoryWhatsapp.href}
                        target={categoryWhatsapp.isPlaceholder ? undefined : "_blank"}
                        rel="noopener noreferrer"
                        className="btn btn-whatsapp"
                      >
                        💬 {category.ctaText} via WhatsApp
                      </a>

                      <Link href="/contact" className="btn btn-outline">
                        Store Contact
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Custom Order Callout */}
          <div className={styles.customOrderBox}>
            <div className={styles.customOrderText}>
              <h3 className={styles.customOrderTitle}>
                {siteContent.products.customOrderNoticeHeadline}
              </h3>
              <p>{siteContent.products.customOrderNoticeText}</p>
            </div>
            <div className="btn-group">
              <Link href="/contact" className="btn btn-primary">
                Contact Counter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

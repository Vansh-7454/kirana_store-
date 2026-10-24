import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { siteContent } from "@/data/siteContent";
import { EXACT_CATEGORIES } from "@/data/categoriesData";
import CategoryCard from "@/components/CategoryCard";
import StoreStatusBadge from "@/components/StoreStatusBadge";

export default function HomePage() {
  return (
    <>
      {/* ===================================================================
          1. HERO SECTION — Editorial Two-Column Kirana Showcase
          =================================================================== */}
      <section className={styles.hero} aria-labelledby="hero-heading">
        <div className={`container ${styles.heroGrid}`}>
          {/* Left: Text & CTA Column */}
          <div className={styles.heroTextCol}>
            <div className={styles.eyebrowRow}>
              <span className={styles.eyebrow}>{siteContent.home.eyebrow}</span>
              <span className={styles.eyebrowSeparator} aria-hidden="true">·</span>
              <span className={styles.localityText}>
                📍 {siteContent.storeDetails.locality}
              </span>
            </div>

            <h1 id="hero-heading" className={styles.heroTitle}>
              Everyday Essentials,<br />
              <span className={styles.heroTitleAccent}>Close to Home.</span>
            </h1>

            <p className={styles.heroIntro}>{siteContent.home.intro}</p>

            <div className={styles.statusWrap}>
              <StoreStatusBadge />
            </div>

            <div className={styles.heroActions}>
              <a
                href={siteContent.storeDetails.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ fontSize: "16px", padding: "13px 24px" }}
              >
                <svg
                  width="19"
                  height="19"
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
                className="btn btn-secondary"
                style={{ fontSize: "16px", padding: "13px 22px" }}
              >
                <span>📞 Call Store</span>
              </a>
            </div>
          </div>

          {/* Right: Thoughtfully sized & framed grocery visual */}
          <div className={styles.heroVisualCol}>
            <div className={styles.heroImageFrame}>
              <Image
                src={siteContent.home.heroImage.src}
                alt={siteContent.home.heroImage.alt}
                width={640}
                height={480}
                priority
                className={styles.heroImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          2. CATEGORY CATALOGUE — Exactly Eight Distinctive Categories
          =================================================================== */}
      <section className={styles.categorySection} aria-labelledby="category-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Store Catalogue</span>
            <h2 id="category-heading" className="section-title">
              {siteContent.home.categorySectionTitle}
            </h2>
            <p className="section-subtitle">
              {siteContent.home.categorySectionSubtitle}
            </p>
          </div>

          <div className={styles.categoryGrid}>
            {EXACT_CATEGORIES.map((category, idx) => (
              <CategoryCard
                key={category.id}
                category={category}
                index={idx}
                href={`/products#${category.slug}`}
              />
            ))}
          </div>

          <div className={styles.categoryFooterAction}>
            <Link href="/products" className="btn btn-outline">
              View All 8 Categories on Products Page →
            </Link>
          </div>
        </div>
      </section>

      {/* ===================================================================
          3. COUNTER STORY & STORE DETAILS — Asymmetrical Editorial Layout
          =================================================================== */}
      <section className={styles.storySection} aria-labelledby="story-heading">
        <div className="container">
          <div className={styles.storyGrid}>
            {/* Story & Kirana Values */}
            <div className={styles.storyTextWrap}>
              <span className="section-badge">Neighborhood Trust</span>
              <h2 id="story-heading" className={styles.storyTitle}>
                A Dependable Kirana Serving Indirapuram Societies
              </h2>
              <p className={styles.storyLead}>
                Sharma General Store has been supplying residential families in Ahinsa Khand and surrounding Indirapuram societies with dependable kitchen provisions, trusted Indian grocery brands, and personalized counter service.
              </p>

              <div className={styles.valuesList}>
                <div className={styles.valueItem}>
                  <div className={styles.valueIcon} aria-hidden="true">🌾</div>
                  <div>
                    <h3 className={styles.valueHeading}>Daily Fresh Essentials</h3>
                    <p className={styles.valueText}>
                      Chakki-ground whole wheat atta, unpolished pulses, aged basmati rice, and everyday dairy milk pouches restocked daily.
                    </p>
                  </div>
                </div>

                <div className={styles.valueItem}>
                  <div className={styles.valueIcon} aria-hidden="true">⚖️</div>
                  <div>
                    <h3 className={styles.valueHeading}>Transparent Local Rates</h3>
                    <p className={styles.valueText}>
                      Honest, consistent neighborhood market pricing with zero surge fees or hidden costs for nearby families.
                    </p>
                  </div>
                </div>

                <div className={styles.valueItem}>
                  <div className={styles.valueIcon} aria-hidden="true">💬</div>
                  <div>
                    <h3 className={styles.valueHeading}>Direct WhatsApp Packing</h3>
                    <p className={styles.valueText}>
                      Simply message your grocery list or photo to our store counter. We verify items in stock, pack carefully, and confirm quickly.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Store Details Card */}
            <div className={styles.detailsCardWrap}>
              <div className={styles.detailsCard}>
                <h3 className={styles.detailsCardTitle}>Store Information</h3>

                <div className={styles.detailBlock}>
                  <span className={styles.detailLabel}>📍 Store Location</span>
                  <p className={styles.detailValue}>
                    <strong>{siteContent.storeDetails.name}</strong><br />
                    {siteContent.storeDetails.address}
                  </p>
                </div>

                <div className={styles.detailBlock}>
                  <span className={styles.detailLabel}>🕒 Operating Hours</span>
                  <p className={styles.detailValue}>
                    <strong>{siteContent.storeDetails.openingHoursDisplay}</strong><br />
                    <span>Open Monday to Sunday (All 7 Days)</span>
                  </p>
                </div>

                <div className={styles.detailBlock}>
                  <span className={styles.detailLabel}>📞 Direct Phone Line</span>
                  <p className={styles.detailValue}>
                    <a href={`tel:${siteContent.storeDetails.phoneRaw}`} className={styles.phoneLink}>
                      {siteContent.storeDetails.phone}
                    </a><br />
                    <span style={{ fontSize: "12.5px", color: "var(--color-text-muted)" }}>
                      Call during counter hours for inquiries
                    </span>
                  </p>
                </div>

                <div className={styles.detailsCardActions}>
                  <a
                    href={siteContent.storeDetails.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp btn-block"
                  >
                    💬 Order on WhatsApp
                  </a>
                  <Link href="/contact" className="btn btn-secondary btn-block">
                    🗺️ View Map & Directions →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          4. DIRECT WHATSAPP ORDERING STRIP
          =================================================================== */}
      <section className={styles.orderStrip} aria-label="Order Groceries on WhatsApp">
        <div className="container">
          <div className={styles.orderStripInner}>
            <div>
              <span className={styles.orderStripBadge}>Fast Society Delivery</span>
              <h2 className={styles.orderStripTitle}>
                Have a grocery list ready today?
              </h2>
              <p className={styles.orderStripText}>
                Send your list to Sharma General Store on WhatsApp. We will pack your items fresh and deliver to your society doorstep in Indirapuram.
              </p>
            </div>

            <div className={styles.orderStripActions}>
              <a
                href={siteContent.storeDetails.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ fontSize: "16px", padding: "13px 26px" }}
              >
                💬 Order on WhatsApp Now
              </a>
              <a
                href={`tel:${siteContent.storeDetails.phoneRaw}`}
                className="btn btn-secondary"
                style={{ fontSize: "16px", padding: "13px 22px" }}
              >
                📞 Call Counter
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

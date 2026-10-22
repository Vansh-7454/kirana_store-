import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import styles from "./about.module.css";
import { siteContent } from "@/data/siteContent";
import StoreImage from "@/components/StoreImage";

export const metadata: Metadata = {
  title: siteContent.about.metaTitle,
  description: siteContent.about.metaDescription,
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className={styles.pageHeader} aria-labelledby="about-page-heading">
        <div className={`container ${styles.headerInner}`}>
          <span className="section-badge">Our Background</span>
          <h1 id="about-page-heading">{siteContent.about.headline}</h1>
          <p className={styles.headerIntro}>{siteContent.about.intro}</p>
          <div className="btn-group">
            <Link href={siteContent.about.ctaButton.href} className="btn btn-primary">
              {siteContent.about.ctaButton.text}
            </Link>
            <Link href="/products" className="btn btn-secondary">
              View Product Range
            </Link>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section section-white" aria-labelledby="story-heading">
        <div className={`container ${styles.storyGrid}`}>
          <div className={styles.storyContent}>
            <span className="section-badge">Family-Run Store</span>
            <h2 id="story-heading">{siteContent.about.storyHeadline}</h2>
            {siteContent.about.storyParagraphs.map((para, index) => (
              <p key={index} className={styles.storyParagraph}>
                {para}
              </p>
            ))}
          </div>

          <div>
            <StoreImage
              src={siteContent.about.storyImage.src}
              alt={siteContent.about.storyImage.alt}
              aspectRatio="4/3"
              sizes="(max-width: 960px) 100vw, 500px"
            />
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="section section-alt" aria-labelledby="audience-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-badge section-badge-accent">Our Customers</span>
            <h2 id="audience-heading">{siteContent.about.audienceHeadline}</h2>
            <p>
              We cater to residents across our local neighborhood, providing dependable grocery services tailored to daily needs.
            </p>
          </div>

          <div className={styles.audienceGrid}>
            {siteContent.about.audienceList.map((item, index) => (
              <div key={index} className={styles.audienceCard}>
                <h3 className={styles.audienceTitle}>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments & Standards */}
      <section className="section section-white" aria-labelledby="commitments-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Integrity</span>
            <h2 id="commitments-heading">{siteContent.about.commitmentsHeadline}</h2>
            <p>
              The basic standards we hold ourselves accountable to each morning when the store shutters open.
            </p>
          </div>

          <div className={styles.commitmentsGrid}>
            {siteContent.about.commitments.map((commitment, index) => (
              <div key={index} className={styles.commitmentCard}>
                <h3 className={styles.commitmentTitle}>{commitment.title}</h3>
                <p>{commitment.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Step CTA */}
      <section className="section" aria-labelledby="about-cta-heading">
        <div className="container">
          <div className="card" style={{ textAlign: "center", padding: "var(--space-10) var(--space-6)" }}>
            <h2 id="about-cta-heading">{siteContent.about.ctaHeadline}</h2>
            <p style={{ maxWidth: "600px", margin: "0 auto var(--space-6)" }}>
              {siteContent.about.ctaIntro}
            </p>
            <div className="btn-group" style={{ justifyContent: "center" }}>
              <Link href={siteContent.about.ctaButton.href} className="btn btn-primary">
                {siteContent.about.ctaButton.text}
              </Link>
              <Link href="/products" className="btn btn-outline">
                Browse Daily Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import React from "react";
import Link from "next/link";
import styles from "./page.module.css";
import { siteContent } from "@/data/siteContent";
import StoreImage from "@/components/StoreImage";
import { getPhoneLink, getWhatsAppLink } from "@/lib/contactHelpers";

export default function HomePage() {
  const phoneInfo = getPhoneLink();
  const whatsappInfo = getWhatsAppLink("Hello! I want to order daily groceries.");

  // Featured 3 categories for the homepage preview
  const featuredCategories = siteContent.products.categories.slice(0, 3);

  return (
    <>
      {/* 1. Hero Section */}
      <section className={styles.hero} aria-labelledby="hero-heading">
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <span aria-hidden="true">🏪</span> {siteContent.home.heroBadge}
            </div>
            <h1 id="hero-heading" className={styles.heroTitle}>
              {siteContent.home.heroHeadline}
            </h1>
            <p className={styles.heroIntro}>{siteContent.home.heroIntro}</p>

            <div className={styles.heroActions}>
              <Link href={siteContent.home.heroPrimaryCta.href} className="btn btn-primary">
                {siteContent.home.heroPrimaryCta.text}
              </Link>

              <a
                href={whatsappInfo.isPlaceholder ? "/contact#whatsapp" : whatsappInfo.href}
                target={whatsappInfo.isPlaceholder ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                title={whatsappInfo.isPlaceholder ? "Placeholder: WhatsApp number not yet configured" : "Order on WhatsApp"}
              >
                💬 Order on WhatsApp
              </a>

              <a
                href={phoneInfo.isPlaceholder ? "/contact#phone" : phoneInfo.href}
                className="btn btn-secondary"
                title={phoneInfo.isPlaceholder ? "Placeholder: Phone number not yet configured" : "Call Store"}
              >
                📞 Call Counter
              </a>
            </div>

            <div className={styles.heroPills}>
              <span className={styles.pillItem}>🛵 Free Local Delivery Available</span>
              <span className={styles.pillItem}>🥛 Fresh Morning Milk & Dairy</span>
              <span className={styles.pillItem}>🌾 Sealed Genuine Staples</span>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <StoreImage
              src={siteContent.home.heroImage.src}
              alt={siteContent.home.heroImage.alt}
              aspectRatio="4/3"
              priority={true}
              sizes="(max-width: 992px) 100vw, 500px"
            />
          </div>
        </div>
      </section>

      {/* 2. Services / Products Overview */}
      <section className="section section-white" aria-labelledby="products-overview-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Daily Stock</span>
            <h2 id="products-overview-heading">{siteContent.home.servicesPreviewHeadline}</h2>
            <p>{siteContent.home.servicesPreviewIntro}</p>
          </div>

          <div className={styles.categoryGrid}>
            {featuredCategories.map((category) => (
              <article key={category.id} className={styles.categoryCard}>
                <StoreImage
                  src={category.imageSrc}
                  alt={category.imageAlt}
                  aspectRatio="4/3"
                  sizes="(max-width: 640px) 100vw, (max-width: 992px) 50vw, 360px"
                />
                <div className={styles.categoryBody}>
                  <h3 className={styles.categoryTitle}>{category.title}</h3>
                  <p className={styles.categoryDesc}>{category.shortDescription}</p>
                  <ul className={styles.itemList}>
                    {category.items.slice(0, 3).map((item, index) => (
                      <li key={index} className={styles.itemBullet}>
                        <span className={styles.itemCheck} aria-hidden="true">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={`/products#${category.id}`} className="btn btn-outline btn-block">
                    View Items & Details
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.centerCta}>
            <Link href="/products" className="btn btn-primary">
              View All 6 Grocery Categories →
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Short About Section */}
      <section className="section section-alt" aria-labelledby="about-overview-heading">
        <div className={`container ${styles.aboutGrid}`}>
          <div>
            <span className="section-badge">Local Community Store</span>
            <h2 id="about-overview-heading">{siteContent.home.aboutPreviewHeadline}</h2>
            <p className="lead">{siteContent.home.aboutPreviewIntro}</p>
            <p>{siteContent.home.aboutPreviewParagraph}</p>
            <div className="btn-group">
              <Link href={siteContent.home.aboutPreviewCta.href} className="btn btn-primary">
                {siteContent.home.aboutPreviewCta.text}
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Visit Store Location
              </Link>
            </div>
          </div>

          <div className={styles.aboutInfoCard}>
            <h3 className={styles.infoCardTitle}>Store Counter At A Glance</h3>
            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>Neighborhood Service Area</span>
              <span className={styles.infoValue}>{siteContent.storeDetails.serviceArea}</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>Store Hours</span>
              <span className={styles.infoValue}>{siteContent.storeDetails.openingHours}</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>Counter Contact</span>
              <span className={styles.infoValue}>{siteContent.storeDetails.phone}</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>Delivery Policy</span>
              <span className={styles.infoValue}>{siteContent.storeDetails.deliveryNote}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us (Real Points Only) */}
      <section className="section section-white" aria-labelledby="why-choose-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-badge section-badge-accent">Our Promise</span>
            <h2 id="why-choose-heading">{siteContent.home.whyChooseHeadline}</h2>
            <p>{siteContent.home.whyChooseIntro}</p>
          </div>

          <div className={styles.whyGrid}>
            {siteContent.home.whyChooseItems.map((item, idx) => (
              <div key={idx} className={styles.whyCard}>
                <span className={styles.whyBadge}>{item.badge}</span>
                <h3 className={styles.whyTitle}>{item.title}</h3>
                <p className={styles.whyDesc}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Contact Call to Action Banner */}
      <section className="section" aria-labelledby="cta-banner-heading">
        <div className="container">
          <div className={styles.ctaBanner}>
            <h2 id="cta-banner-heading" className={styles.ctaTitle}>
              {siteContent.home.ctaBannerHeadline}
            </h2>
            <p className={styles.ctaText}>{siteContent.home.ctaBannerIntro}</p>
            <div className={styles.ctaActions}>
              <Link href={siteContent.home.ctaBannerPrimary.href} className="btn btn-accent">
                {siteContent.home.ctaBannerPrimary.text}
              </Link>
              <Link href={siteContent.home.ctaBannerSecondary.href} className="btn btn-secondary">
                {siteContent.home.ctaBannerSecondary.text}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

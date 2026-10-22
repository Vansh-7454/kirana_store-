import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section" style={{ minHeight: "65vh", display: "flex", alignItems: "center" }}>
      <div className="container" style={{ textAlign: "center", maxWidth: "600px" }}>
        <span className="section-badge" style={{ backgroundColor: "#fef2f2", color: "#b91c1c", borderColor: "#fecaca" }}>
          Page Not Found (404)
        </span>
        <h1 style={{ marginTop: "1rem", marginBottom: "1rem" }}>
          We Couldn&apos;t Find That Shelf
        </h1>
        <p className="lead" style={{ marginBottom: "2rem" }}>
          The page or product category you are looking for might have been moved, renamed, or is currently out of stock.
        </p>

        <div className="btn-group" style={{ justifyContent: "center" }}>
          <Link href="/" className="btn btn-primary">
            Return to Store Homepage
          </Link>
          <Link href="/products" className="btn btn-secondary">
            Browse Product Range
          </Link>
          <Link href="/contact" className="btn btn-outline">
            Contact Store Counter
          </Link>
        </div>
      </div>
    </section>
  );
}

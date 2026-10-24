import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section" style={{ minHeight: "65vh", display: "flex", alignItems: "center" }}>
      <div className="container" style={{ textAlign: "center", maxWidth: "680px" }}>
        <span
          className="section-badge"
          style={{
            backgroundColor: "var(--color-danger-bg)",
            color: "var(--color-danger)",
            borderColor: "var(--color-danger-border)",
          }}
        >
          Page Not Found (404)
        </span>
        <h1 style={{ marginTop: "var(--space-16)", marginBottom: "var(--space-16)" }}>
          We Could Not Find That Shelf
        </h1>
        <p className="lead" style={{ marginBottom: "var(--space-32)", marginLeft: "auto", marginRight: "auto" }}>
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

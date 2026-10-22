# Kirana & Daily Provisions Store Website

A fast, lightweight, accessible, and responsive static website built with **Next.js (App Router)** and **TypeScript**, using custom Vanilla CSS.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## 📝 How to Edit Store Details and Text Content

All store details, headlines, phone numbers, addresses, product categories, and copy are kept in **ONE single file** for simple editing:

👉 **[`src/data/siteContent.ts`](file:///c:/Users/USER/Desktop/kirana_store-/src/data/siteContent.ts)**

Open that file to update:
- `name`: Your store name (replaces `[ADD STORE NAME]`).
- `phone` & `phoneRaw`: Your contact phone number and raw digits for tap-to-call.
- `whatsapp` & `whatsappRaw`: Your WhatsApp number for direct chat orders.
- `email`: Store email address.
- `address`: Physical shop address.
- `openingHours`: Daily counter timings (e.g., `Monday to Sunday: 7:00 AM – 10:00 PM`).
- `serviceArea`: Delivery radius / neighborhood name.
- `categories`: Update or add products and in-stock items.

---

## 📸 Store Photographs

The website comes configured with realistic, authentic documentary photographs of an Indian Kirana Store (no AI glossy artifacts or CGI looks). All images are placed in `public/images/` and optimized using Next.js `Image`:

1. **Storefront & Counter (`/images/hero-storefront.jpg`, 4:3)**:
   - Used on Homepage Hero.
   - Shows clean shelves of daily provisions, grains, pulses, digital weighing scale, and customers.
2. **Daily Dairy & Bakery Shelf (`/images/dairy-bakery.jpg`, 16:9)**:
   - Used on Homepage and Products page.
   - Shows milk packets, paneer, curd, butter, and bakery breads in refrigerator chiller.
3. **Food Grains, Atta & Pulses (`/images/grains-pulses.jpg`, 16:9)**:
   - Used on Homepage and Products page.
   - Shows neatly arranged atta bags, rice sacks, lentils, and cooking oils.
4. **Spices & Cooking Essentials (`/images/spices-oils.jpg`, 16:9)**:
   - Used on Homepage and Products page.
   - Shows jars of whole spices (jeera, mustard, cloves), turmeric, red chilli, and pure desi ghee.
5. **Packaged Foods & Beverages (`/images/packaged-foods.jpg`, 16:9)**:
   - Used on Products page.
   - Shows tea, coffee, biscuits, cookies, and breakfast snacks.
6. **Household & Cleaning Supplies (`/images/cleaning-supplies.jpg`, 16:9)**:
   - Used on Products page.
   - Shows detergents, dishwashing bars, and household cleaners.
7. **Personal Care & Toiletries (`/images/personal-care.jpg`, 16:9)**:
   - Used on Products page.
   - Shows soaps, shampoos, hair oils, and toothpastes.
8. **Friendly Shopkeeper & Store Story (`/images/shopkeeper-counter.jpg`, 4:3)**:
   - Used on About Us page.
   - Shows friendly neighborhood shopkeeper standing behind the counter.

To swap with your own physical store photos anytime, simply replace the corresponding file in `public/images/`.

---

## 📁 Project Structure

```
kirana_store-/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout with fonts, header, footer, SEO
│   │   ├── globals.css        # Global CSS design system and variables
│   │   ├── page.tsx           # Home page (Hero, Categories, About, Why Choose Us, CTA)
│   │   ├── page.module.css    # Home page styles
│   │   ├── products/
│   │   │   ├── page.tsx       # Products catalog page
│   │   │   └── products.module.css
│   │   ├── about/
│   │   │   ├── page.tsx       # About page (Store story, audience, commitments)
│   │   │   └── about.module.css
│   │   ├── contact/
│   │   │   ├── page.tsx       # Contact page (Call, WhatsApp, Maps, Hours, Form)
│   │   │   └── contact.module.css
│   │   ├── not-found.tsx      # Friendly custom 404 page
│   │   ├── sitemap.ts         # Dynamic sitemap (sitemap.xml)
│   │   ├── robots.ts          # Robots.txt
│   │   └── icon.svg           # Starter favicon
│   ├── components/
│   │   ├── Header.tsx         # Accessible navigation header with mobile drawer
│   │   ├── Footer.tsx         # Footer with contact details & quick actions
│   │   ├── ContactForm.tsx    # Accessible contact inquiry form with field validation
│   │   └── PlaceholderImage.tsx # Neutral image placeholder with swap instructions
│   ├── data/
│   │   └── siteContent.ts     # Single source of truth for text & business info
│   └── lib/
│       └── contactHelpers.ts  # Link helpers (tel:, WhatsApp, Google Maps)
├── .env.example               # Environment variables template
├── package.json
└── tsconfig.json
```

---

## 🚢 Deployment

This site is 100% static and compatible with any static hosting platform:
- **Vercel**: Push to GitHub and import the repository into Vercel.
- **Netlify**: Deploy using `npm run build` with output directory `.next` (or static export `out`).
- **Cloudflare Pages / GitHub Pages**: Deploy standard build.

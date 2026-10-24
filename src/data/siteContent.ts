export interface StoreDetails {
  name: string;
  brandName: string;
  brandSub: string;
  tagline: string;
  locality: string;
  city: string;
  address: string;
  phone: string;
  phoneRaw: string;
  whatsapp: string;
  whatsappRaw: string;
  whatsappPreFilledMessage: string;
  whatsappUrl: string;
  openingHoursDisplay: string;
  openingHour: number; // 7 (07:00)
  closingHour: number; // 22 (22:00)
  timeZone: string; // "Asia/Kolkata"
  mapEmbedUrl: string;
  mapDirectionsUrl: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export const siteContent = {
  storeDetails: {
    name: "Sharma General Store",
    brandName: "Sharma",
    brandSub: "GENERAL STORE",
    tagline: "Everyday Essentials, Close to Home.",
    locality: "Indirapuram, Ghaziabad",
    city: "Ghaziabad, Uttar Pradesh",
    address: "Shop No. 8, Central Market, Ahinsa Khand 2, Indirapuram, Ghaziabad, UP 201014",
    phone: "+91 98765 43210",
    phoneRaw: "919876543210",
    whatsapp: "+91 98765 43210",
    whatsappRaw: "919876543210",
    whatsappPreFilledMessage: "Hi Sharma Store, I'd like to order: ",
    whatsappUrl: "https://wa.me/919876543210?text=Hi%20Sharma%20Store%2C%20I'd%20like%20to%20order%3A%20",
    openingHoursDisplay: "7:00 AM–10:00 PM",
    openingHour: 7, // 7:00 AM
    closingHour: 22, // 10:00 PM
    timeZone: "Asia/Kolkata",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14006.945209797372!2d77.3686252!3d28.6376916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf0113c23d6a3%3A0x6b6cfa4c688325ef!2sIndirapuram%2C%20Ghaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    mapDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Indirapuram+Ghaziabad+Uttar+Pradesh",
  },

  navLinks: [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Contact & Location", href: "/contact" },
  ] as NavLink[],

  home: {
    eyebrow: "YOUR NEIGHBORHOOD KIRANA STORE",
    headline: "Everyday Essentials, Close to Home.",
    intro:
      "Your trusted neighborhood grocery store in Indirapuram for everyday kitchen essentials, snacks, household needs, and more. Browse our categories and order directly on WhatsApp.",
    heroImage: {
      src: "/images/hero-grocery-composition.jpg",
      alt: "Arrangement of Indian kitchen groceries including whole wheat atta, basmati rice, pure desi ghee, mustard oil, and authentic spices",
    },
    categorySectionTitle: "Explore Our Grocery Categories",
    categorySectionSubtitle: "Browse the everyday staples and provisions available at our Indirapuram store counter.",
  },

  products: {
    metaTitle: "Grocery Categories | Sharma General Store Indirapuram",
    metaDescription: "Browse everyday grocery categories available at Sharma General Store in Indirapuram, Ghaziabad. Order conveniently on WhatsApp.",
    headline: "Our Grocery Categories",
    intro:
      "Discover the everyday pantry staples, fresh dairy, cooking oils, snacks, and household essentials available at our Indirapuram shop. Message us on WhatsApp to place your order.",
  },

  contact: {
    metaTitle: "Contact & Location | Sharma General Store Indirapuram",
    metaDescription: "Find Sharma General Store in Indirapuram, Ghaziabad. Check opening hours (7:00 AM–10:00 PM), call us, or get driving directions.",
    headline: "Store Location & Timings",
    intro:
      "Visit our neighborhood store counter in Indirapuram or place your order conveniently via WhatsApp for quick packing and doorstep delivery.",
  },
};

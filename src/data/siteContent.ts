export interface StoreDetails {
  name: string;
  shortName: string;
  tagline: string;
  businessType: string;
  serviceArea: string;
  phone: string;
  phoneRaw: string; // digits only for tel: link, or empty placeholder
  whatsapp: string;
  whatsappRaw: string; // digits only for wa.me link, or empty placeholder
  email: string;
  address: string;
  openingHours: string;
  mapQueryUrl: string;
  deliveryAvailable: boolean;
  deliveryNote: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ProductCategory {
  id: string;
  title: string;
  shortDescription: string;
  items: string[];
  ctaText: string;
  imageAlt: string;
  imageSrc: string;
}

export interface WhyChooseUsItem {
  title: string;
  description: string;
  badge: string;
}

export interface SiteContent {
  storeDetails: StoreDetails;
  navLinks: NavLink[];
  home: {
    heroBadge: string;
    heroHeadline: string;
    heroIntro: string;
    heroPrimaryCta: { text: string; href: string };
    heroSecondaryCta: { text: string; href: string };
    heroImage: { src: string; alt: string };
    servicesPreviewHeadline: string;
    servicesPreviewIntro: string;
    aboutPreviewHeadline: string;
    aboutPreviewIntro: string;
    aboutPreviewParagraph: string;
    aboutPreviewCta: { text: string; href: string };
    whyChooseHeadline: string;
    whyChooseIntro: string;
    whyChooseItems: WhyChooseUsItem[];
    ctaBannerHeadline: string;
    ctaBannerIntro: string;
    ctaBannerPrimary: { text: string; href: string };
    ctaBannerSecondary: { text: string; href: string };
  };
  products: {
    metaTitle: string;
    metaDescription: string;
    headline: string;
    intro: string;
    categories: ProductCategory[];
    customOrderNoticeHeadline: string;
    customOrderNoticeText: string;
    orderCtaText: string;
  };
  about: {
    metaTitle: string;
    metaDescription: string;
    headline: string;
    intro: string;
    storyHeadline: string;
    storyParagraphs: string[];
    audienceHeadline: string;
    audienceList: { title: string; text: string }[];
    commitmentsHeadline: string;
    commitments: { title: string; text: string }[];
    storyImage: { src: string; alt: string };
    ctaHeadline: string;
    ctaIntro: string;
    ctaButton: { text: string; href: string };
  };
  contact: {
    metaTitle: string;
    metaDescription: string;
    headline: string;
    intro: string;
    callButtonText: string;
    whatsappButtonText: string;
    mapButtonText: string;
    formHeadline: string;
    formIntro: string;
    privacyNote: string;
  };
}

export const siteContent: SiteContent = {
  storeDetails: {
    name: "[ADD STORE NAME - e.g. Apna Kirana & Daily Provisions]",
    shortName: "Kirana Store",
    tagline: "Fresh daily groceries, kitchen staples and friendly neighborhood service delivered to your door.",
    businessType: "Neighborhood Kirana & Grocery Store",
    serviceArea: "[ADD CITY / SERVICE AREA - e.g. Green Park & South Extension, New Delhi]",
    phone: "[ADD STORE PHONE NUMBER - e.g. +91 98765 43210]",
    phoneRaw: "", // Leave blank if placeholder, or put digits like "919876543210"
    whatsapp: "[ADD WHATSAPP NUMBER - e.g. +91 98765 43210]",
    whatsappRaw: "", // Leave blank if placeholder, or put digits like "919876543210"
    email: "[ADD EMAIL ADDRESS - e.g. store@example.com]",
    address: "[ADD STORE ADDRESS - e.g. Shop No. 12, Main Market, Near Community Hall]",
    openingHours: "[ADD OPENING HOURS - e.g. Monday to Sunday: 7:00 AM – 10:00 PM]",
    mapQueryUrl: "https://maps.google.com/?q=[ADD+STORE+ADDRESS]",
    deliveryAvailable: true,
    deliveryNote: "Free neighborhood delivery on grocery orders over [ADD MINIMUM ORDER AMOUNT, e.g. ₹300].",
  },

  navLinks: [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],

  home: {
    heroBadge: "Local Neighborhood Grocery",
    heroHeadline: "Fresh Daily Groceries & Kitchen Staples For Your Home",
    heroIntro:
      "Your trusted neighborhood kirana store. From farm-fresh produce and daily dairy to pantry essentials and branded staples, we keep your kitchen stocked with care.",
    heroPrimaryCta: { text: "Browse Products", href: "/products" },
    heroSecondaryCta: { text: "Contact & Timings", href: "/contact" },
    heroImage: {
      src: "/images/hero-storefront.jpg",
      alt: "Neighborhood kirana store counter stocked with daily provisions, pulses, grains, and dairy items",
    },
    servicesPreviewHeadline: "What We Stock Daily",
    servicesPreviewIntro: "Carefully sourced daily essentials, packed foods, and fresh kitchen necessities.",
    aboutPreviewHeadline: "Rooted in the Neighborhood",
    aboutPreviewIntro:
      "We believe a neighborhood store is built on honesty, fresh stock, and knowing our customers by name.",
    aboutPreviewParagraph:
      "Our shelves carry genuine brands, freshly received dairy and produce, and everyday household necessities. You can visit in person or place an order for fast doorstep delivery in our local area.",
    aboutPreviewCta: { text: "Read Our Story", href: "/about" },
    whyChooseHeadline: "Why Shop With Us",
    whyChooseIntro: "Simple, honest neighborhood service with no hidden conditions.",
    whyChooseItems: [
      {
        title: "Daily Fresh Arrivals",
        description: "Fresh milk, paneer, breads, and seasonal produce delivered every morning from verified suppliers.",
        badge: "Fresh Daily",
      },
      {
        title: "100% Genuine Branded Staples",
        description: "Only sealed, authentic packages from trusted food brands with verified batch numbers and expiry dates.",
        badge: "Genuine Quality",
      },
      {
        title: "Doorstep Neighborhood Delivery",
        description: "Quick drop-off to your apartment or home across our local service area. Send your list on WhatsApp or call.",
        badge: "Quick Delivery",
      },
      {
        title: "Fair Pricing & Accurate Weights",
        description: "Clear prices, transparent billing, and certified digital weighing for every loose grain and pulse.",
        badge: "Honest Service",
      },
    ],
    ctaBannerHeadline: "Need Groceries Delivered Today?",
    ctaBannerIntro:
      "Save time by calling or sending your shopping list directly to our store counter. We will pack it fresh for pickup or delivery.",
    ctaBannerPrimary: { text: "View Contact Details", href: "/contact" },
    ctaBannerSecondary: { text: "Explore Product Range", href: "/products" },
  },

  products: {
    metaTitle: "Products & Categories | Neighborhood Kirana Store",
    metaDescription:
      "Explore our daily stock of fresh vegetables, dairy products, grains, spices, packaged foods, and household essentials.",
    headline: "Our Product Range",
    intro:
      "Everyday kitchen and household essentials selected for quality and freshness. Visit our shop or place an order for local delivery.",
    categories: [
      {
        id: "fresh-produce-dairy",
        title: "Daily Dairy & Bakery",
        shortDescription: "Fresh milk, curd, paneer, butter, bread, and breakfast essentials delivered daily.",
        items: [
          "Fresh pouch milk & toned milk",
          "Fresh paneer, curd (dahi) & butter",
          "Brown bread, white bread & pav",
          "Farm-fresh eggs (pack of 6 & 12)",
        ],
        ctaText: "Enquire Stock",
        imageAlt: "Daily fresh dairy products, milk, paneer, and bakery essentials",
        imageSrc: "/images/dairy-bakery.jpg",
      },
      {
        id: "food-grains-staples",
        title: "Food Grains, Atta & Pulses",
        shortDescription: "Pure wheat flour, premium basmati rice, lentils, and cooking oils from trusted mills.",
        items: [
          "Whole wheat atta (Chakki fresh & branded)",
          "Basmati & everyday raw/steamed rice",
          "Toor dal, moong dal, chana & urad dal",
          "Cold-pressed mustard, sunflower & refined oils",
        ],
        ctaText: "Order Staples",
        imageAlt: "Clean food grains, bags of atta, lentils, and cooking oils",
        imageSrc: "/images/grains-pulses.jpg",
      },
      {
        id: "spices-cooking",
        title: "Spices & Cooking Essentials",
        shortDescription: "Authentic whole spices, ground masala powders, salt, sugar, and traditional condiments.",
        items: [
          "Whole spices (jeera, mustard, cardamom, cloves)",
          "Turmeric, red chilli & coriander powders",
          "Iodized salt, rock salt (sendha namak) & sugar",
          "Ginger-garlic paste, ghee & pickles",
        ],
        ctaText: "Check Availability",
        imageAlt: "Assorted Indian spices, masalas, salt, and pure ghee containers",
        imageSrc: "/images/spices-oils.jpg",
      },
      {
        id: "packaged-beverages",
        title: "Packaged Foods & Beverages",
        shortDescription: "Quick breakfast cereals, tea leaves, roast coffee, biscuits, and healthy snacks.",
        items: [
          "Premium CTC tea leaves & green tea",
          "Instant coffee & cocoa drinks",
          "Biscuits, cookies, namkeen & rusks",
          "Oats, noodles, pasta & breakfast cereals",
        ],
        ctaText: "Order Snacks",
        imageAlt: "Packaged tea, coffee, breakfast cereals, biscuits, and snacks",
        imageSrc: "/images/packaged-foods.jpg",
      },
      {
        id: "cleaning-hygiene",
        title: "Household & Cleaning Supplies",
        shortDescription: "Laundry detergents, dishwash bars, floor cleaners, and kitchen sanitizing supplies.",
        items: [
          "Detergent powders & washing liquids",
          "Dishwashing bars, liquids & scrub pads",
          "Floor cleaners, disinfectants & toilet cleaners",
          "Garbage bags, sponges & kitchen paper rolls",
        ],
        ctaText: "Order Cleaning Items",
        imageAlt: "Household cleaning supplies, laundry detergents, and disinfectants",
        imageSrc: "/images/cleaning-supplies.jpg",
      },
      {
        id: "personal-care",
        title: "Personal Care & Toiletries",
        shortDescription: "Bathing soaps, hair oils, shampoos, toothpastes, and personal hygiene essentials.",
        items: [
          "Bathing soaps & moisturizing body washes",
          "Herbal and regular hair oils & shampoos",
          "Toothpaste, toothbrushes & hand washes",
          "Shaving creams, razors & facial tissues",
        ],
        ctaText: "Order Care Items",
        imageAlt: "Personal hygiene, soaps, shampoos, and oral care products",
        imageSrc: "/images/personal-care.jpg",
      },
    ],
    customOrderNoticeHeadline: "Need an Item Not Listed Here?",
    customOrderNoticeText:
      "Our shelves carry over 800 everyday products. If you are looking for a specific brand or pack size, simply reach out to us by phone or WhatsApp.",
    orderCtaText: "Send Your Grocery List",
  },

  about: {
    metaTitle: "About Us | Neighborhood Kirana Store",
    metaDescription:
      "Learn about our neighborhood grocery store, our commitment to genuine goods, fresh daily stock, and caring community service.",
    headline: "About Our Kirana Store",
    intro:
      "A family-run neighborhood provision store dedicated to providing honest quality groceries and reliable service to local homes.",
    storyImage: {
      src: "/images/shopkeeper-counter.jpg",
      alt: "Friendly neighborhood kirana shopkeeper at the wooden grocery counter with digital scale and shelves of daily essentials",
    },
    storyHeadline: "Our Store Story",
    storyParagraphs: [
      "We started this kirana store with a single goal: to give our neighborhood a dependable, honest place to buy everyday kitchen groceries without having to compromise on freshness or authenticity.",
      "Over the years, our store has become an integral part of daily life for local families. We personally verify every carton of food grains, inspect expiry dates on packed goods, and ensure our dairy items arrive cold and fresh every morning.",
      "Unlike large anonymous retail chains, we know our customers, remember what they prefer, and take genuine pride in standing behind every product that leaves our counter.",
    ],
    audienceHeadline: "Who We Serve",
    audienceList: [
      {
        title: "Neighborhood Families",
        text: "Busy households who need a dependable supply of clean grains, spices, milk, and household goods every single week.",
      },
      {
        title: "Elderly Residents",
        text: "Senior citizens who prefer courteous local service and direct telephone or WhatsApp orders delivered straight to their doorstep.",
      },
      {
        title: "Home Cooks & Bakers",
        text: "Passionate home cooks looking for pure cooking oils, authentic whole spices, fresh dairy, and consistent kitchen staples.",
      },
    ],
    commitmentsHeadline: "Our Standards of Service",
    commitments: [
      {
        title: "Strict Expiry & Freshness Control",
        text: "We rotate our stock diligently and never keep near-expiry packaged goods on our shelves.",
      },
      {
        title: "Transparent Billing & Fair Rates",
        text: "Clear, printed or itemized bills with no hidden markups or inaccurate scales.",
      },
      {
        title: "Direct Owner Accountability",
        text: "If an item isn't right, bring it back or inform us. We exchange or refund without hassle.",
      },
    ],
    ctaHeadline: "Visit Us or Get in Touch",
    ctaIntro: "We are open 7 days a week to serve you with fresh stock and a warm welcome.",
    ctaButton: { text: "Contact Details & Hours", href: "/contact" },
  },

  contact: {
    metaTitle: "Contact & Store Location | Neighborhood Kirana Store",
    metaDescription:
      "Get in touch with our neighborhood kirana store. View our address, telephone, WhatsApp details, opening hours, and location map.",
    headline: "Visit Us or Order Today",
    intro:
      "Drop by the store, call to place an order, or send your grocery list on WhatsApp for convenient neighborhood doorstep delivery.",
    callButtonText: "Call Counter",
    whatsappButtonText: "WhatsApp Order",
    mapButtonText: "Open in Maps",
    formHeadline: "Send an Enquiry or Feedback",
    formIntro:
      "Have a question about product availability, bulk requirements, or special item requests? Fill out the form below.",
    privacyNote:
      "Privacy Note: We respect your privacy. This static website validates your form fields locally in your browser and does not send or store personal data to any external server.",
  },
};

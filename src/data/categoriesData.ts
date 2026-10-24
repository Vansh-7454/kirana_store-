export interface GroceryCategory {
  id: string;
  name: string;
  slug: string;
  imageSrc: string;
  imageAlt: string;
  bgColor: string;
  borderColor: string;
  itemHint: string;
}

export const EXACT_CATEGORIES: GroceryCategory[] = [
  {
    id: "atta-rice",
    name: "Atta & Rice",
    slug: "atta-rice",
    imageSrc: "/images/category-atta-rice.jpg",
    imageAlt: "Burlap bag of whole wheat chakki atta and bowl of aged basmati rice",
    bgColor: "#F4E1CF", // Soft Peach
    borderColor: "#e8cfb8",
    itemHint: "Chakki Atta, Basmati & Daily Rice",
  },
  {
    id: "dal-pulses",
    name: "Dal & Pulses",
    slug: "dal-pulses",
    imageSrc: "/images/category-dal-pulses.jpg",
    imageAlt: "Ceramic bowls of unpolished toor dal, moong dal, masoor dal, and chana dal",
    bgColor: "#FAF0E4", // Warm Cream
    borderColor: "#ebdccb",
    itemHint: "Unpolished Toor, Moong, Chana & Urad",
  },
  {
    id: "dairy-milk",
    name: "Dairy & Milk Products",
    slug: "dairy-milk",
    imageSrc: "/images/category-dairy-milk.jpg",
    imageAlt: "Fresh milk pouches, farm milk bottle, fresh malai paneer, and butter block",
    bgColor: "#EAF1DE", // Soft Sage
    borderColor: "#d5dfc5",
    itemHint: "Daily Pouch Milk, Paneer & Butter",
  },
  {
    id: "oil-ghee",
    name: "Cooking Oil & Ghee",
    slug: "oil-ghee",
    imageSrc: "/images/category-oil-ghee.jpg",
    imageAlt: "Glass jar of pure cow desi ghee and bottle of kachi ghani mustard cooking oil",
    bgColor: "#FDF2D9", // Pale Turmeric
    borderColor: "#eeddb8",
    itemHint: "Mustard Oil, Sunflower Oil & Cow Ghee",
  },
  {
    id: "snacks-biscuits",
    name: "Snacks & Biscuits",
    slug: "snacks-biscuits",
    imageSrc: "/images/category-snacks-biscuits.jpg",
    imageAlt: "Assorted Indian biscuit packets, tea rusks, and bowl of crispy namkeen",
    bgColor: "#F8E6D8", // Soft Peach
    borderColor: "#eacfb9",
    itemHint: "Tea Biscuits, Rusks & Savory Namkeen",
  },
  {
    id: "spices-masalas",
    name: "Spices & Masalas",
    slug: "spices-masalas",
    imageSrc: "/images/category-spices-masalas.jpg",
    imageAlt: "Bowls of turmeric powder, red chilli powder, cumin seeds, and fragrant whole spices",
    bgColor: "#FAF0E4", // Warm Cream
    borderColor: "#ebdccb",
    itemHint: "Whole Spices, Turmeric, Mirch & Jeera",
  },
  {
    id: "sugar-jaggery",
    name: "Sugar & Jaggery",
    slug: "sugar-jaggery",
    imageSrc: "/images/category-sugar-jaggery.jpg",
    imageAlt: "Traditional desi jaggery gur blocks and bowl of pure sulfurless sugar",
    bgColor: "#F4E1CF", // Soft Peach
    borderColor: "#e8cfb8",
    itemHint: "Sulfurless Sugar & Pure Desi Gur",
  },
  {
    id: "household-essentials",
    name: "Household Essentials",
    slug: "household-essentials",
    imageSrc: "/images/category-household-essentials.jpg",
    imageAlt: "Detergent powders, dishwash bars, floor disinfectants, and cleaning supplies",
    bgColor: "#EAF1DE", // Soft Sage
    borderColor: "#d5dfc5",
    itemHint: "Detergents, Dishwash & Cleaners",
  },
];

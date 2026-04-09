export type SpiceLevel = "mild" | "medium" | "spicy";

export interface MenuItem {
  id: string;
  name: string;
  category: string;
  description?: string;
  price: number;
  priceLabel?: string;
  halfPrice?: number;
  fullPrice?: number;
  sizeLabel?: string;
  spice: SpiceLevel;
  image: string;
  note?: string;
}

let _id = 0;
const id = () => `item-${++_id}`;

const CATEGORIES = [
  "Thali","Snacks","Main Course","Chinese","Soups","Rice Bowl","Salad","Bread",
  "Pizza","Burger","Pasta","Sandwich","Garlic Bread","Raita","Dessert","Ice Cream","Beverages","Shakes","Chatpata Snacks"
] as const;

export type Category = typeof CATEGORIES[number];
export const categories = CATEGORIES as unknown as string[];

import { categoryImages, getItemImage } from "@/data/itemImages";

export const getCategoryImage = (cat: string) => categoryImages[cat] || categoryImages["Thali"];

function m(name: string, category: string, price: number, opts?: Partial<Pick<MenuItem, "description"|"halfPrice"|"fullPrice"|"spice"|"note"|"sizeLabel">>): MenuItem {
  const spice = opts?.spice || "mild";
  return {
    id: id(), name, category, price,
    description: opts?.description,
    halfPrice: opts?.halfPrice,
    fullPrice: opts?.fullPrice,
    sizeLabel: opts?.sizeLabel,
    spice,
    note: opts?.note,
    image: getItemImage(name, category),
  };
}

export const menuItems: MenuItem[] = [
  // THALI
  m("Normal Thali", "Thali", 220, { description: "2 butter roti, dal fry, matar paneer, steamed rice, papad, salad and boondi raita", note: "Before 8 PM only" }),
  m("Del Spl Thali", "Thali", 270, { description: "2 lachha paratha / 2 butter naan, dal makhani, mix veg/shahi paneer, steamed rice, papad, salad, boondi raita and sweet dish (Gulab Jamun)", note: "Before 8 PM only" }),
  m("Winter Spl Thali", "Thali", 180, { description: "2 Makka di Roti Naal Sarso da Saag, Boondi Raita, Gud", note: "Before 8 PM only" }),

  // SNACKS
  m("Paneer Tikka", "Snacks", 220, { description: "Skewed cubes of Indian cottage cheese marinated with veggies and served with mint sauce", spice: "medium" }),
  m("Achari Paneer Tikka", "Snacks", 240, { description: "Cubes of cottage cheese marinated in Indian spices with capsicum, onion and tomato; roast in clay oven and served as tangy achari flavour", spice: "spicy" }),
  m("Pudina Paneer Tikka", "Snacks", 240, { description: "Skewed Indian cottage cheese marinated in Indian spices and mint sauce", spice: "medium" }),
  m("Mushroom Tikka", "Snacks", 200, { description: "Skewed button mushroom marinated in Indian spices with capsicum, onion and tomatoes, served with mint sauce", spice: "medium" }),
  m("Pudina Mushroom Tikka", "Snacks", 220, { spice: "medium" }),
  m("Malai Chaap", "Snacks", 200, { halfPrice: 120, fullPrice: 200, description: "Clay oven grilled soya chaap served with mixture of cream and chopped cabbage" }),
  m("Stuff Chaap", "Snacks", 220, { description: "Malai chaap stuffed with long fine chopped mixed vegetables and cottage cheese" }),
  m("Tandori Chaap", "Snacks", 180, { description: "Skewed soya chaap roasted in clay oven, marinated with spicy Indian masala", spice: "spicy" }),
  m("Veg Pakora (8pcs)", "Snacks", 100, { description: "Popular crispy fritters made with vegetables, coated with gram flour batter, spices and herbs", spice: "medium" }),
  m("Panjabi Tandoori Chaap", "Snacks", 220, { spice: "spicy" }),
  m("Paneer Pakora (8pcs)", "Snacks", 150, { spice: "medium" }),
  m("Veg. Platter", "Snacks", 250, { description: "Platter of Tandoori Chaap, Paneer Tikka, Mushroom Tikka", spice: "medium" }),
  m("Hara Bhara Kabab (8pcs)", "Snacks", 160, { description: "A healthy appetizer of finely chopped mixed vegetables made into round patties" }),
  m("Veg. Seekh Kabab", "Snacks", 180, { description: "Finely chopped vegetables skewed, coated with bread crumbs, cooked in clay oven and served with mint sauce" }),
  m("Dahi ke Sholay", "Snacks", 160, { description: "Nicely chopped vegetables and spices added to hung curd, stuffed in bread and fried till crispy", spice: "medium" }),

  // MAIN COURSE
  m("Chaap Korma", "Main Course", 220, { description: "Soya bean chap cooked in cashew nut based korma sauce" }),
  m("Kadhai Chaap", "Main Course", 240, { description: "Chopped soya chap cooked in creamy and spicy flavourful thick masala gravy", spice: "spicy" }),
  m("Soya Chaap Gravy", "Main Course", 220, { halfPrice: 130, fullPrice: 220, spice: "medium" }),
  m("Tawa Chaap Gravy", "Main Course", 240, { halfPrice: 140, fullPrice: 240, spice: "medium" }),
  m("Shahi Chaap Gravy", "Main Course", 220),
  m("Chana Pindi", "Main Course", 220, { description: "White chickpeas simmered till tender in thick gravy of tomato, onion, paneer and Indian spices", spice: "spicy" }),
  m("Chana Masala", "Main Course", 200, { halfPrice: 120, fullPrice: 200, spice: "medium" }),
  m("Kadhai Chhole", "Main Course", 200, { spice: "spicy" }),
  m("Dal Fry", "Main Course", 180, { halfPrice: 100, fullPrice: 180 }),
  m("Dal Tadka", "Main Course", 200, { halfPrice: 120, fullPrice: 200, spice: "medium" }),
  m("Dal Maharani", "Main Course", 240, { description: "Creamy combination of lentil and kidney beans with paneer and makhane prepared with spices and butter" }),
  m("Del 41 Spl Punjabi Chaap", "Main Course", 250, { description: "A unique Punjabi styled spicy, rich and flavourful dish made with soya chaap", spice: "spicy" }),
  m("Del 41 Spl Sabji", "Main Course", 260, { description: "A combo of seasonal veggies, soya chaap, paneer and mushroom in thick and spicy gravy", spice: "spicy" }),
  m("Gobhi Masala", "Main Course", 180, { spice: "medium" }),
  m("Aloo Gobhi", "Main Course", 180),
  m("Dal Gharwali", "Main Course", 200),
  m("Dal Makhni", "Main Course", 220, { halfPrice: 140, fullPrice: 220 }),
  m("Dum Aloo Kashmiri", "Main Course", 220, { spice: "medium" }),
  m("Mix Veg.", "Main Course", 200, { halfPrice: 130, fullPrice: 200 }),
  m("Veg. Amritsari", "Main Course", 220, { spice: "spicy" }),
  m("Veg. Kolhapuri", "Main Course", 220, { spice: "spicy" }),
  m("Navratan Korma", "Main Course", 230),
  m("Mushroom do Pyaza", "Main Course", 200, { spice: "medium" }),
  m("Mushroom Kadhai", "Main Course", 220, { halfPrice: 140, fullPrice: 220, spice: "medium" }),
  m("Mushroom Paneer", "Main Course", 220),
  m("Mushroom Masala", "Main Course", 220, { spice: "medium" }),
  m("Mutter Mushroom", "Main Course", 240),
  m("Malai Kofta", "Main Course", 220, { halfPrice: 140, fullPrice: 220 }),
  m("Sarso ka Saag", "Main Course", 200, { halfPrice: 110, fullPrice: 200, note: "Winter special" }),
  m("Jeera Aloo", "Main Course", 160),
  m("Kadhai Paneer", "Main Course", 240, { halfPrice: 140, fullPrice: 240, spice: "medium" }),
  m("Mutter Paneer", "Main Course", 220, { halfPrice: 140, fullPrice: 220 }),
  m("Paneer Pasanda", "Main Course", 220),
  m("Paneer Patiala", "Main Course", 220),
  m("Paneer Chatpata", "Main Course", 220, { spice: "spicy" }),
  m("Paneer Do Pyaza", "Main Course", 220, { halfPrice: 140, fullPrice: 220, spice: "medium" }),
  m("Paneer Korma", "Main Course", 220),
  m("Paneer Lababdar", "Main Course", 240, { halfPrice: 150, fullPrice: 240, spice: "medium" }),
  m("Paneer Bhurji", "Main Course", 240, { spice: "medium" }),
  m("Paneer Butter Masala", "Main Course", 240, { halfPrice: 140, fullPrice: 240 }),
  m("Palak Paneer", "Main Course", 220, { halfPrice: 140, fullPrice: 220 }),
  m("Handi Paneer", "Main Course", 240, { halfPrice: 140, fullPrice: 240, spice: "medium" }),
  m("Paneer Tawa Masala", "Main Course", 240, { spice: "medium" }),
  m("Paneer Tikka Gravy", "Main Course", 240, { spice: "medium" }),
  m("Shahi Paneer", "Main Course", 220, { halfPrice: 140, fullPrice: 220 }),

  // CHINESE
  m("Chilli Potato", "Chinese", 160, { spice: "spicy" }),
  m("Chilli Honey Potato", "Chinese", 180, { spice: "medium" }),
  m("Chilli Mushroom", "Chinese", 220, { spice: "spicy" }),
  m("Chilli Garlic Chowmein", "Chinese", 160, { halfPrice: 100, fullPrice: 160, spice: "spicy" }),
  m("Chilli Paneer Dry", "Chinese", 220, { spice: "spicy" }),
  m("Chilli Paneer Gravy", "Chinese", 240, { spice: "spicy" }),
  m("French Fries", "Chinese", 140),
  m("Hakka Noodles", "Chinese", 180, { halfPrice: 110, fullPrice: 180 }),
  m("Spl Chowmein", "Chinese", 180, { halfPrice: 120, fullPrice: 180 }),
  m("Butter Chowmein", "Chinese", 160, { halfPrice: 100, fullPrice: 160 }),
  m("Singapore Chowmein", "Chinese", 180, { halfPrice: 120, fullPrice: 180, spice: "spicy" }),
  m("Veg. Chowmein", "Chinese", 140, { halfPrice: 80, fullPrice: 140 }),
  m("Veg. Manchurian Dry", "Chinese", 160, { spice: "medium" }),
  m("Veg. Manchurian Gravy", "Chinese", 180, { spice: "medium" }),
  m("Veg. Crespy", "Chinese", 200, { spice: "medium" }),

  // SOUPS
  m("Hot & Sour Soup", "Soups", 100, { spice: "spicy" }),
  m("Manchau Soup", "Soups", 100, { spice: "medium" }),
  m("Mix Veg. Soup", "Soups", 100),
  m("Tomato Soup", "Soups", 100),

  // RICE BOWL
  m("Jeera Rice", "Rice Bowl", 120),
  m("Kashmiri Pulao", "Rice Bowl", 160),
  m("Mutter Pulao", "Rice Bowl", 150),
  m("Navratan Pulao", "Rice Bowl", 180),
  m("Plain Rice", "Rice Bowl", 100),
  m("Singapore Fried Rice", "Rice Bowl", 220, { spice: "spicy" }),
  m("Triple Fried Rice", "Rice Bowl", 240, { spice: "medium" }),
  m("Veg. Pulao", "Rice Bowl", 170),
  m("Veg. Fried Rice", "Rice Bowl", 200),
  m("Veg. Biryani", "Rice Bowl", 220, { spice: "medium" }),
  m("Veg. Hyderabadi Biryani", "Rice Bowl", 230, { spice: "spicy" }),

  // SALAD
  m("Cucumber Salad", "Salad", 70),
  m("Fried Papad", "Salad", 40),
  m("Green Salad", "Salad", 80),
  m("Masala Papad", "Salad", 50, { spice: "medium" }),
  m("Papad", "Salad", 20),
  m("Onion Salad", "Salad", 60),

  // BREAD
  m("Aloo Kulcha", "Bread", 70),
  m("Aloo Naan", "Bread", 80),
  m("Aloo Paratha", "Bread", 60),
  m("Aloo Pyaaz Mix Paratha", "Bread", 70),
  m("Amritsari Kulcha", "Bread", 80),
  m("Butter Naan", "Bread", 60),
  m("Butter Roti", "Bread", 18),
  m("Plain Roti", "Bread", 15),
  m("Chur Chur Naan", "Bread", 90),
  m("Garlic Naan", "Bread", 80),
  m("Gobhi Paratha", "Bread", 70),
  m("Gobhi Naan", "Bread", 90),
  m("Green Chilly Paratha", "Bread", 70, { spice: "spicy" }),
  m("Lachha Paratha", "Bread", 60),
  m("Makka Roti", "Bread", 60, { note: "Winter special" }),
  m("Del 41 Spl Naan", "Bread", 110),
  m("Cheese Garlic Naan", "Bread", 110),
  m("Cheese Onion Naan", "Bread", 110),
  m("Missi Roti", "Bread", 50),
  m("Missi Roti Masala", "Bread", 60, { spice: "medium" }),
  m("Plain Naan", "Bread", 50),
  m("Onion Kulcha", "Bread", 70),
  m("Onion Paratha", "Bread", 70),
  m("Onion Naan", "Bread", 80),
  m("Paneer Kulcha", "Bread", 80),
  m("Paneer Naan", "Bread", 100),
  m("Paneer Paratha", "Bread", 80),
  m("Pudina Paratha", "Bread", 70),
  m("Stuffed Naan", "Bread", 80),
  m("Stuffed Paratha", "Bread", 70),

  // PIZZA
  m("Margherita Pizza", "Pizza", 200, { halfPrice: 110, fullPrice: 200, sizeLabel: "Small / Medium" }),
  m("Farmer House Pizza", "Pizza", 270, { halfPrice: 130, fullPrice: 270, sizeLabel: "Small / Medium" }),
  m("Exotic Veg Pizza", "Pizza", 220, { halfPrice: 130, fullPrice: 220, sizeLabel: "Small / Medium" }),
  m("Paneer Tikka Pizza", "Pizza", 280, { halfPrice: 150, fullPrice: 280, sizeLabel: "Small / Medium" }),
  m("Sweet Corn Pizza", "Pizza", 200, { halfPrice: 110, fullPrice: 200, sizeLabel: "Small / Medium" }),
  m("Paneer Makhani Pizza", "Pizza", 270, { halfPrice: 150, fullPrice: 270, sizeLabel: "Small / Medium" }),
  m("Cheese Onion Pizza", "Pizza", 200, { halfPrice: 100, fullPrice: 200, sizeLabel: "Small / Medium" }),
  m("Paneer Onion Pizza", "Pizza", 260, { halfPrice: 140, fullPrice: 260, sizeLabel: "Small / Medium" }),

  // BURGER
  m("Cheese Burger", "Burger", 80),
  m("Veg Burger", "Burger", 80),
  m("Makhani Burger", "Burger", 100),
  m("Double Tikki Cheese Burger", "Burger", 140),
  m("Maha Burger", "Burger", 120),
  m("Pizza Burger", "Burger", 100),
  m("Paneer Butter Grilled Burger", "Burger", 140),

  // PASTA
  m("Red Sauce Pasta", "Pasta", 120),
  m("White Sauce Pasta", "Pasta", 120),
  m("Mix Sauce Pasta", "Pasta", 150),

  // SANDWICH
  m("Veg Sandwich", "Sandwich", 80),
  m("Paneer Stuffed Sandwich", "Sandwich", 100),
  m("Mushroom Sandwich", "Sandwich", 100),
  m("Corn Sandwich", "Sandwich", 90),

  // GARLIC BREAD
  m("Garlic Bread (Plain)", "Garlic Bread", 100),
  m("Stuffed Garlic Bread", "Garlic Bread", 120),
  m("Chilli Garlic Bread", "Garlic Bread", 120, { spice: "spicy" }),
  m("Cheese Garlic Bread", "Garlic Bread", 120),

  // RAITA
  m("Boondi Raita", "Raita", 100),
  m("Fruit Raita", "Raita", 120),
  m("Masala Dahi", "Raita", 80, { spice: "medium" }),
  m("Mix Raita", "Raita", 100),
  m("Pineapple Raita", "Raita", 140),
  m("Plain Dahi", "Raita", 70),
  m("Gajar Raita", "Raita", 120, { note: "Winter special" }),

  // DESSERT
  m("Gulab Jamun", "Dessert", 35),
  m("Ras Malai", "Dessert", 50),
  m("Del Spl Burfi (100gm)", "Dessert", 60),
  m("Raj Bhog", "Dessert", 50),
  m("Sponge Rasgulla", "Dessert", 45),
  m("Jalebi (100gm)", "Dessert", 50),
  m("Rabdi (100gm)", "Dessert", 60),
  m("Gajar Halwa", "Dessert", 80, { note: "Winter special" }),

  // ICE CREAM
  m("Matka Kulfi", "Ice Cream", 100),
  m("Butter Scotch / Chocolate Ice Cream", "Ice Cream", 80),
  m("Strawberry Ice Cream", "Ice Cream", 60),
  m("Vanilla Ice Cream", "Ice Cream", 60),

  // BEVERAGES
  m("Coffee", "Beverages", 70),
  m("Cold Coffee", "Beverages", 100),
  m("Tea", "Beverages", 30),
  m("Fresh Lime Soda", "Beverages", 60),
  m("Mineral Water", "Beverages", 25),
  m("Cold Drink", "Beverages", 30),
  m("Lassi Salt", "Beverages", 60),
  m("Lassi Sweet", "Beverages", 70),

  // SHAKES
  m("Strawberry Shake", "Shakes", 100),
  m("Vanilla Shake", "Shakes", 100),
  m("Butter Scotch Shake", "Shakes", 120),
  m("Chocolate Shake", "Shakes", 120),
  m("Oreo Shake", "Shakes", 120),
  m("Ultimate Nutella Shake", "Shakes", 120),

  // CHATPATA SNACKS
  m("Samosa", "Chatpata Snacks", 25, { spice: "medium" }),
  m("Kachori", "Chatpata Snacks", 30, { spice: "medium" }),
  m("Bread Pakora", "Chatpata Snacks", 25, { spice: "medium" }),
  m("Paneer Bread Pakora", "Chatpata Snacks", 40, { spice: "medium" }),
];

export const todaysSpecials = menuItems.filter(i =>
  ["Del 41 Spl Punjabi Chaap", "Paneer Butter Masala", "Veg. Hyderabadi Biryani"].includes(i.name)
);

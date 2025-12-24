export const products = [
  {
    id: 1,
    name: "Thai Basil Chicken",
    price: 8.00,
    originalPrice: null,
    image: "/food/roozchickn.jpg",
    category: "asian",
    inStock: true,
    featured: true,
    description: "Aromatic Thai basil chicken with jasmine rice"
  },
  {
    id: 2,
    name: "Mediterranean Bowl",
    price: 8.00,
    originalPrice: null,
    image: "/food/sallad.jpg",
    category: "mediterranean",
    inStock: true,
    featured: true,
    description: "Fresh Mediterranean vegetables with quinoa and feta"
  },
  {
    id: 3,
    name: "Butter Chicken",
    price: 8.00,
    originalPrice: null,
    image: "/food/roozchickn.jpg",
    category: "indian",
    inStock: true,
    featured: true,
    description: "Creamy tomato-based curry with tender chicken"
  },
  {
    id: 4,
    name: "Beef Bulgogi",
    price: 8.00,
    originalPrice: null,
    image: "/food/mix.jpg",
    category: "asian",
    inStock: true,
    featured: false,
    description: "Korean marinated beef with steamed rice"
  },
  {
    id: 5,
    name: "Chicken Tikka Masala",
    price: 8.00,
    originalPrice: null,
    image: "/food/roozchickn.jpg",
    category: "indian",
    inStock: true,
    featured: true,
    description: "Classic tikka masala with basmati rice"
  },
  {
    id: 6,
    name: "Teriyaki Salmon",
    price: 8.00,
    originalPrice: null,
    image: "/food/mix.jpg",
    category: "asian",
    inStock: true,
    featured: false,
    description: "Glazed salmon with teriyaki sauce and vegetables"
  },
  {
    id: 7,
    name: "Pasta Primavera",
    price: 8.00,
    originalPrice: null,
    image: "/food/sallad.jpg",
    category: "italian",
    inStock: true,
    featured: false,
    description: "Fresh vegetables with penne in garlic sauce"
  },
  {
    id: 8,
    name: "Mexican Rice Bowl",
    price: 8.00,
    originalPrice: null,
    image: "/food/mix.jpg",
    category: "mexican",
    inStock: true,
    featured: true,
    description: "Spiced rice with black beans and salsa"
  },
  {
    id: 9,
    name: "Green Curry Shrimp",
    price: 8.00,
    originalPrice: null,
    image: "/food/mix.jpg",
    category: "asian",
    inStock: true,
    featured: false,
    description: "Thai green curry with shrimp and vegetables"
  },
  {
    id: 10,
    name: "Chicken Alfredo",
    price: 8.00,
    originalPrice: null,
    image: "/food/roozchickn.jpg",
    category: "italian",
    inStock: true,
    featured: false,
    description: "Creamy alfredo pasta with grilled chicken"
  },
  {
    id: 11,
    name: "Lamb Biryani",
    price: 8.00,
    originalPrice: null,
    image: "/food/mix.jpg",
    category: "indian",
    inStock: true,
    featured: true,
    description: "Aromatic spiced rice with tender lamb"
  },
  {
    id: 12,
    name: "Vegetable Stir Fry",
    price: 8.00,
    originalPrice: null,
    image: "/food/sallad.jpg",
    category: "asian",
    inStock: true,
    featured: false,
    description: "Mixed vegetables in savory sauce with rice"
  },
  {
    id: 13,
    name: "Sandwich Combo",
    price: 8.00,
    originalPrice: null,
    image: "/food/pack sandich friese and salad.jpg",
    category: "american",
    inStock: true,
    featured: false,
    description: "Sandwich with fries and fresh salad"
  },
  {
    id: 14,
    name: "Classic Sandwich",
    price: 8.00,
    originalPrice: null,
    image: "/food/sandichs.jpg",
    category: "american",
    inStock: true,
    featured: true,
    description: "Fresh made sandwich with your choice of fillings"
  },
  {
    id: 15,
    name: "Kung Pao Chicken",
    price: 8.00,
    originalPrice: null,
    image: "/food/roozchickn.jpg",
    category: "asian",
    inStock: true,
    featured: true,
    description: "Spicy chicken with peanuts and vegetables"
  },
  {
    id: 16,
    name: "Dessert Special",
    price: 8.00,
    originalPrice: null,
    image: "/food/desert.jpg",
    category: "dessert",
    inStock: true,
    featured: false,
    description: "Sweet treat to finish your meal"
  }
];

export const categories = [
  { id: "all", name: "All Meals" },
  { id: "asian", name: "Asian Cuisine" },
  { id: "indian", name: "Indian Flavors" },
  { id: "mediterranean", name: "Mediterranean" },
  { id: "italian", name: "Italian Classics" },
  { id: "mexican", name: "Mexican Favorites" },
  { id: "american", name: "American Comfort" },
  { id: "dessert", name: "Desserts" }
];

export const getFeaturedProducts = () => products.filter(p => p.featured);
export const getProductsByCategory = (category) =>
  category === "all" ? products : products.filter(p => p.category === category);
export const getProductById = (id) => products.find(p => p.id === id);

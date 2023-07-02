// Define the transactions template
interface Transactions {
  id: number
  name: string
  type: string
  status?: boolean
  amount?: number
  timeStamp?: string
  image?: string
  balance?: number
  sessionId?: number
}

// Define the shop template
interface Shop {
  id: number
  name: string
  location: string
  category: string
  image: string
  away: any
  products: Product[]
}

// Define the product template
interface Product {
  id: number
  name: string
  category: string
  price: number
  image: string
  inStock?: number
  description?: string
}

// Create the array of transactions
export const transactions: Transactions[] = [
  {
    id: 1,
    name: "Bello Usman A",
    type: "sent",
    status: true,
    amount: 1000,
    timeStamp: "2014-05-01T00:00:00",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    balance: 1000,
    sessionId: 12345678,
  },
  {
    id: 2,
    name: "Haruna Duda",
    type: "received",
    status: false,
    amount: 500,
    timeStamp: "2014-05-02T00:00:00",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    balance: 1500,
    sessionId: 12345678,
  },
  {
    id: 3,
    name: "Gumsu Abacha",
    type: "sent",
    status: true,
    amount: 200,
    timeStamp: "2014-05-03T00:00:00",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    balance: 1300,
    sessionId: 12345678,
  },
  {
    id: 4,
    name: "Maryam Moh'd",
    type: "received",
    status: true,
    amount: 800,
    timeStamp: "2014-05-04T00:00:00",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    balance: 2100,
    sessionId: 12345678,
  },
  {
    id: 5,
    name: "Bello Kawu",
    type: "sent",
    status: false,
    amount: 300,
    timeStamp: "2014-05-05T00:00:00",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    balance: 1800,
    sessionId: 12345678,
  },
  {
    id: 6,
    name: "Aisha Jummai",
    type: "received",
    status: true,
    amount: 1000,
    timeStamp: "2014-05-06T00:00:00",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    balance: 2800,
    sessionId: 12345678,
  },
  {
    id: 7,
    name: "Kanu Nwanko",
    type: "sent",
    status: false,
    amount: 150,
    timeStamp: "2014-05-07T00:00:00",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    balance: 2650,
    sessionId: 12345678,
  },
  {
    id: 8,
    name: "Alhasan Dantata",
    type: "sent",
    status: true,
    amount: 400,
    timeStamp: "2014-05-08T00:00:00",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    balance: 2250,
    sessionId: 12345678,
  },
  {
    id: 9,
    name: "Hadi Shehu",
    type: "received",
    status: true,
    amount: 600,
    timeStamp: "2014-05-09T00:00:00",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    balance: 2850,
    sessionId: 12345678,
  },
]

// Create the array of shops
export const shops: Shop[] = [
  {
    id: 1,
    away: "12min",
    name: "Food Paradise",
    location: "pantami street gombe",
    category: "Restaurants",
    image: "../assets/images/ipsumLogo.png",
    products: [
      {
        id: 1,
        name: "Rice and Stew",
        category: "Meals",
        price: 10,
        image: "burger.jpg",
        inStock: 5,
        description: "Rice and cust manager serving",
      },
      {
        id: 2,
        name: "Pizza",
        category: "Snacks",
        price: 15,
        image: "pizza.jpg",
        inStock: 6,
        description: "Pizza and cust manager serving",
      },
      {
        id: 3,
        name: "Chips",
        category: "Snacks",
        price: 15,
        image: "pizza.jpg",
        inStock: 3,
        description: "Chips and cust manager serving",
      },
      {
        id: 4,
        name: " Fried Rice",
        category: "Meals",
        price: 15,
        image: "pizza.jpg",
        inStock: 7,
        description: "Fries well",
      },
      {
        id: 5,
        name: "Maltina",
        category: "Beverages",
        price: 15,
        image: "pizza.jpg",
        inStock: 5,
        description: "Cool drinks and pure ice cream",
      },
      {
        id: 6,
        name: "Coke",
        category: "Beverages",
        price: 15,
        image: "pizza.jpg",
        inStock: 8,
        description: "Cool drinks and pure ice cream",
      },
      {
        id: 7,
        name: "Fried Chicken",
        category: "Meals",
        price: 15,
        image: "pizza.jpg",
        inStock: 4,
        description: "Delicious chicken and cheese",
      },
      {
        id: 8,
        name: "Jollof Rice",
        category: "Meals",
        price: 15,
        image: "pizza.jpg",
        inStock: 9,
        description: "Delicious chicken and cheese",
      },
      {
        id: 9,
        name: "Nuts",
        category: "Snacks",
        price: 15,
        image: "pizza.jpg",
        inStock: 3,
        description: "Delicious chicken and cheese",
      },
      // Add more products...
    ],
  },
  {
    id: 2,
    name: "Caffeine Corner",
    location: "pantami street bauchi",
    away: "15min",
    category: "Coffee",
    image: "../assets/images/ipsumLogo.png",
    products: [
      {
        id: 1,
        name: "Cappuccino",
        category: "Beverage",
        price: 5,
        image: "cappuccino.jpg",
      },
      {
        id: 2,
        name: "Latte",
        category: "Beverage",
        price: 4,
        image: "latte.jpg",
      },
      // Add more products...
    ],
  },
  {
    id: 3,
    name: "Chic Boutique",
    location: "pantami street Jos",
    away: "12min",
    category: "Clothing and Fashion",
    image: "../assets/images/ipsumLogo.png",
    products: [
      {
        id: 1,
        name: "Plain T-shirts",
        category: "T-shirts",
        price: 10,
        image: "burger.jpg",
        inStock: 5,
        description: "Plain T-shirts with price 10  and description with",
      },
      {
        id: 2,
        name: "Polo Shirts",
        category: "T-shirts",
        price: 15,
        image: "pizza.jpg",
        inStock: 7,
        description: "Plain T-shirts with price 10  and description with",
      },
      {
        id: 3,
        name: "Bootcut Jeans",
        category: "Jeans",
        price: 15,
        image: "pizza.jpg",
        inStock: 7,
        description: "Plain T-shirts with price 10  and description with",
      },
      {
        id: 4,
        name: "Skinny Jeans",
        category: "Jeans",
        price: 15,
        image: "pizza.jpg",
        inStock: 7,
        description: "Plain T-shirts with price 10  and description with",
      },
      {
        id: 5,
        name: "Sneakers",
        category: "Shoes",
        price: 15,
        image: "pizza.jpg",
        inStock: 8,
        description: "Plain T-shirts with price 10  and description with",
      },
      {
        id: 6,
        name: "Sandals",
        category: "Shoes",
        price: 15,
        image: "pizza.jpg",
        inStock: 4,
        description: "Plain T-shirts with price 10  and description with",
      },
      {
        id: 7,
        name: "Panama hat",
        category: "Hats",
        price: 15,
        image: "pizza.jpg",
        inStock: 5,
        description: "Plain T-shirts with price 10  and description with",
      },
      {
        id: 8,
        name: "Eyeshadow Palettes",
        category: "Cosmetics",
        price: 15,
        image: "pizza.jpg",
        inStock: 9,
        description: "Plain T-shirts with price 10  and description with",
      },
      {
        id: 9,
        name: "Lengthening Mascara",
        category: "Cosmetics",
        price: 15,
        image: "pizza.jpg",
        inStock: 5,
        description: "Plain T-shirts with price 10  and description with",
      },
      {
        id: 10,
        name: "Face caps",
        category: "Cosmetics",
        price: 15,
        image: "pizza.jpg",
        inStock: 9,
        description: "Plain T-shirts with price 10  and description with",
      },
      // Add more products...
    ],
  },
  {
    id: 4,
    name: "Bookstore",
    location: "pantami street Yobe",
    away: "10min",
    category: "Books and Study Materials",
    image: "../assets/images/ipsumLogo.png",
    products: [
      {
        id: 1,
        name: "Spiral Notebooks",
        category: "Notebooks",
        price: 10,
        image: "burger.jpg",
        inStock: 5,
        description:
          "Spiral Notebooks are available in the following categories",
      },
      {
        id: 2,
        name: "80 leaves",
        category: "Notebooks",
        price: 15,
        image: "pizza.jpg",
        inStock: 7,
        description:
          "Spiral Notebooks are available in the following categories",
      },
      {
        id: 3,
        name: "Gel Pens",
        category: "Pens",
        price: 10,
        image: "burger.jpg",
        inStock: 3,
        description:
          "Spiral Notebooks are available in the following categories",
      },
      {
        id: 4,
        name: "Bic",
        category: "Pens",
        price: 15,
        image: "pizza.jpg",
        inStock: 3,
        description:
          "Spiral Notebooks are available in the following categories",
      },
      {
        id: 5,
        name: "Logo Design",
        category: "Creative Services",
        price: 10,
        image: "burger.jpg",
        description:
          "Spiral Notebooks are available in the following categories",
      },
      {
        id: 6,
        name: "Business Card",
        category: "Creative Services",
        price: 15,
        image: "pizza.jpg",
        description:
          "Spiral Notebooks are available in the following categories",
      },
      {
        id: 7,
        name: "Professional Photoshoots",
        category: "Creative Services",
        price: 10,
        image: "burger.jpg",
        description:
          "Spiral Notebooks are available in the following categories",
      },
      {
        id: 8,
        name: "Graduation Portraits",
        category: "Creative Services",
        price: 15,
        image: "pizza.jpg",
        description:
          "Spiral Notebooks are available in the following categories",
      },
      {
        id: 9,
        name: "Photocopying",
        category: "Creative Services",
        price: 10,
        image: "burger.jpg",
        description:
          "Spiral Notebooks are available in the following categories",
      },
      {
        id: 10,
        name: "Printing",
        category: "Creative Services",
        price: 15,
        image: "pizza.jpg",
        description:
          "Spiral Notebooks are available in the following categories",
      },
      // Add more products...
    ],
  },
  {
    id: 5,
    name: "Mobile Phone Store",
    location: "pantami street Borno",
    away: "32min",
    category: "Electronics and gadgets",
    image: "../assets/images/ipsumLogo.png",
    products: [
      {
        id: 1,
        name: "Dell XPS",
        category: "Laptops",
        price: 10,
        image: "burger.jpg",
        inStock: 8,
        description:
          "Dell XPS is the latest version of the dellm it has 4GB ram, 1TB storage, 15Inch",
      },
      {
        id: 2,
        name: "Samsung Galaxy",
        category: "Smartphones",
        price: 15,
        image: "pizza.jpg",
        inStock: 4,
        description:
          "Dell XPS is the latest version of the dellm it has 4GB ram, 1TB storage, 15Inch",
      },
      {
        id: 3,
        name: "Lenovo ThinkPad",
        category: "Laptops",
        price: 10,
        image: "burger.jpg",
        inStock: 3,
        description:
          "Dell XPS is the latest version of the dellm it has 4GB ram, 1TB storage, 15Inch",
      },
      {
        id: 4,
        name: "iPhone",
        category: "Smartphones",
        price: 15,
        image: "pizza.jpg",
        inStock: 5,
        description:
          "Dell XPS is the latest version of the dellm it has 4GB ram, 1TB storage, 15Inch",
      },
      {
        id: 5,
        name: "Gaming Headsets",
        category: "Headphones",
        price: 10,
        image: "burger.jpg",
        inStock: 7,
        description:
          "Dell XPS is the latest version of the dellm it has 4GB ram, 1TB storage, 15Inch",
      },
      {
        id: 6,
        name: "Wireless Earbuds",
        category: "Headphones",
        price: 15,
        image: "pizza.jpg",
        inStock: 3,
        description:
          "Dell XPS is the latest version of the dellm it has 4GB ram, 1TB storage, 15Inch",
      },
      // Add more products...
    ],
  },
  {
    id: 6,
    name: "Gym and Fitness Centre",
    location: "pantami street Yola",
    away: "22min",
    category: "Sports and Recreation",
    image: "../assets/images/ipsumLogo.png",
    products: [
      {
        id: 1,
        name: "Treadmills",
        category: "Fitness Equipment",
        price: 10,
        image: "burger.jpg",
        inStock: 7,
        description:
          "Fitness Equipment with a variety of products and services available",
      },
      {
        id: 2,
        name: "Exercise Bikes",
        category: "Fitness Equipment",
        price: 15,
        image: "pizza.jpg",
        inStock: 5,
        description:
          "Fitness Equipment with a variety of products and services available",
      },
      {
        id: 3,
        name: "Sports Nutrition",
        category: "Protein Powders",
        price: 10,
        image: "burger.jpg",
        inStock: 7,
        description:
          "Fitness Equipment with a variety of products and services available",
      },
      {
        id: 4,
        name: "Soccer Balls",
        category: "Sports Equipment",
        price: 15,
        image: "pizza.jpg",
        inStock: 5,
        description:
          "Fitness Equipment with a variety of products and services available",
      },
      {
        id: 5,
        name: "Basketball Hoops",
        category: "Sports Equipment",
        price: 10,
        image: "burger.jpg",
        inStock: 7,
        description:
          "Fitness Equipment with a variety of products and services available",
      },
      {
        id: 6,
        name: "Heart Rate Monitors",
        category: "Fitness Trackers",
        price: 15,
        image: "pizza.jpg",
        description:
          "Fitness Equipment with a variety of products and services available",
      },
      // Add more products...
    ],
  },
  {
    id: 7,
    name: "Pharmacy",
    location: "pantami street Taraba",
    away: "12min",
    category: "Health",
    image: "../assets/images/ipsumLogo.png",
    products: [
      {
        id: 1,
        name: "Lubricating Eye Drops",
        category: "Eye Care",
        price: 10,
        image: "burger.jpg",
        inStock: 10,
        description: "This is the tablets for pain relief",
      },
      {
        id: 2,
        name: "Ibuprofen Caplets",
        category: "Pain Relief",
        price: 15,
        image: "pizza.jpg",
        inStock: 5,
        description: "This is the tablets for pain relief",
      },
      {
        id: 3,
        name: "Cold & Cough Syrup",
        category: "Cold and Flu",
        price: 10,
        image: "burger.jpg",
        inStock: 7,
        description: "This is the tablets for pain relief",
      },
      {
        id: 4,
        name: "Laxative Tablets",
        category: "Digestive Health",
        price: 15,
        image: "pizza.jpg",
        inStock: 4,
        description: "This is the tablets for pain relief",
      },
      {
        id: 5,
        name: "Laxative Tablets",
        category: "Allergy Relief ",
        price: 10,
        image: "burger.jpg",
        inStock: 10,
        description: "This is the tablets for pain relief",
      },
      {
        id: 6,
        name: "Moisturizing Lotion",
        category: "Skincare",
        price: 15,
        image: "pizza.jpg",
        inStock: 9,
        description: "This is the tablets for pain relief",
      },
      {
        id: 7,
        name: "Dental Floss",
        category: "Oral Care",
        price: 10,
        image: "burger.jpg",
        inStock: 10,
        description: "This is the tablets for pain relief",
      },
      {
        id: 8,
        name: "Hydrogen Peroxide Solution",
        category: "First Aid",
        price: 15,
        image: "pizza.jpg",
      },
      {
        id: 9,
        name: "Prenatal Vitamins",
        category: "Women's Health",
        price: 10,
        image: "burger.jpg",
        inStock: 10,
        description: "This is the tablets for pain relief",
      },
      {
        id: 10,
        name: "Pregnancy Tests",
        category: "Family Planning",
        price: 15,
        image: "pizza.jpg",
      },
      // Add more products...
    ],
  },
  {
    id: 8,
    name: "Laundry Services and car wash",
    location: "pantami street Kano",
    away: "5min",
    category: "Cleaning Services",
    image: "../assets/images/ipsumLogo.png",
    products: [
      {
        id: 1,
        name: "Suit and Clothing",
        category: "Dry Cleaning ",
        price: 10,
        image: "burger.jpg",
        description: "clean and good",
      },
      {
        id: 2,
        name: "Towel Laundry",
        category: "Laundry ",
        price: 15,
        image: "pizza.jpg",
        description: "clean and good",
      },
      {
        id: 3,
        name: "Exterior Car Wash",
        category: "Car Wash",
        price: 10,
        image: "burger.jpg",
        description: "clean and good",
      },
      {
        id: 4,
        name: "Regular House Cleaning",
        category: "House Cleaning ",
        price: 15,
        image: "pizza.jpg",
        description: "clean and good",
      },
      {
        id: 5,
        name: "Office Cleaning",
        category: "Commercial Cleaning",
        price: 10,
        image: "burger.jpg",
        description: "clean and good",
      },
      {
        id: 6,
        name: "Rug and Carpet Cleaning",
        category: "Specialized Cleaning",
        price: 15,
        image: "pizza.jpg",
        description: "clean and good",
      },
      // Add more products...
    ],
  },
  {
    id: 9,
    name: "Hair Salon",
    location: "pantami street Abuja",
    away: "17min",
    category: "Beauty and Personal Care",
    image: "../assets/images/ipsumLogo.png",
    products: [
      {
        id: 1,
        name: "Men's Haircut",
        category: "Haircut",
        price: 10,
        image: "burger.jpg",
        description: "Men's haircut at the very affordable price",
      },
      {
        id: 2,
        name: "Deep Conditioning",
        category: "Hair Treatments",
        price: 15,
        image: "pizza.jpg",
        description: "Men's haircut at the very affordable price",
      },
      {
        id: 3,
        name: "Anti-Aging",
        category: "Skin Care",
        price: 10,
        image: "burger.jpg",
        description: "Men's haircut at the very affordable price",
      },
      {
        id: 4,
        name: "Nail Art and Designs",
        category: "Nail Services",
        price: 15,
        image: "pizza.jpg",
        description: "Men's haircut at the very affordable price",
      },
      {
        id: 5,
        name: "Facial Waxing",
        category: "Waxing and Hair Removal",
        price: 10,
        image: "burger.jpg",
        description: "Men's haircut at the very affordable price",
      },
      {
        id: 6,
        name: "Bridal Makeup",
        category: "Makeup Services",
        price: 15,
        image: "pizza.jpg",
        description: "Men's haircut at the very affordable price",
      },
      {
        id: 7,
        name: "Cuticle Oils",
        category: "Personal Care",
        price: 10,
        image: "burger.jpg",
        description: "Men's haircut at the very affordable price",
      },
      {
        id: 8,
        name: "Shampoos",
        category: "Personal Care",
        price: 15,
        image: "pizza.jpg",
        description: "Men's haircut at the very affordable price",
      },
      // Add more products...
    ],
  },
  // Add more shops...
]

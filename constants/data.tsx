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
  category: string
  image: string
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
    name: "Food Paradise",
    category: "Restaurants",
    image: "restaurant_a.jpg",
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
    category: "Coffee",
    image: "coffee_shop_b.jpg",
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
    category: "Clothing and Fashion",
    image: "restaurant_a.jpg",
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
    category: "Books and Study Materials",
    image: "restaurant_a.jpg",
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
        inStock: 3,
        description:
          "Spiral Notebooks are available in the following categories",
      },
      {
        id: 6,
        name: "Business Card",
        category: "Creative Services",
        price: 15,
        image: "pizza.jpg",
        inStock: 3,
        description:
          "Spiral Notebooks are available in the following categories",
      },
      {
        id: 7,
        name: "Professional Photoshoots",
        category: "Creative Services",
        price: 10,
        image: "burger.jpg",
        inStock: 3,
        description:
          "Spiral Notebooks are available in the following categories",
      },
      {
        id: 8,
        name: "Graduation Portraits",
        category: "Creative Services",
        price: 15,
        image: "pizza.jpg",
        inStock: 3,
        description:
          "Spiral Notebooks are available in the following categories",
      },
      {
        id: 9,
        name: "Photocopying",
        category: "Creative Services",
        price: 10,
        image: "burger.jpg",
        inStock: 3,
        description:
          "Spiral Notebooks are available in the following categories",
      },
      {
        id: 10,
        name: "Printing",
        category: "Creative Services",
        price: 15,
        image: "pizza.jpg",
        inStock: 3,
        description:
          "Spiral Notebooks are available in the following categories",
      },
      // Add more products...
    ],
  },
  {
    id: 5,
    name: "Mobile Phone Store",
    category: "Electronics and gadgets",
    image: "restaurant_a.jpg",
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
    category: "Sports and Recreation",
    image: "restaurant_a.jpg",
    products: [
      {
        id: 1,
        name: "Resistance Bands",
        category: "Fitness Equipment",
        price: 10,
        image: "burger.jpg",
        inStock: 7,
        description:
          "Fitness Equipment with a variety of products and services available",
      },
      {
        id: 2,
        name: "Pizza",
        category: "Food",
        price: 15,
        image: "pizza.jpg",
        inStock: 5,
        description:
          "Fitness Equipment with a variety of products and services available",
      },
      // Add more products...
    ],
  },
  {
    id: 7,
    name: "Pharmacy",
    category: "Health",
    image: "restaurant_a.jpg",
    products: [
      {
        id: 1,
        name: "Burger",
        category: "Food",
        price: 10,
        image: "burger.jpg",
      },
      {
        id: 2,
        name: "Pizza",
        category: "Food",
        price: 15,
        image: "pizza.jpg",
      },
      // Add more products...
    ],
  },
  {
    id: 8,
    name: "Laundry Services",
    category: "Cleaning Services",
    image: "restaurant_a.jpg",
    products: [
      {
        id: 1,
        name: "Burger",
        category: "Food",
        price: 10,
        image: "burger.jpg",
      },
      {
        id: 2,
        name: "Pizza",
        category: "Food",
        price: 15,
        image: "pizza.jpg",
      },
      // Add more products...
    ],
  },
  {
    id: 9,
    name: "Design Studio",
    category: "Restaurant",
    image: "restaurant_a.jpg",
    products: [
      {
        id: 1,
        name: "Burger",
        category: "Food",
        price: 10,
        image: "burger.jpg",
      },
      {
        id: 2,
        name: "Pizza",
        category: "Food",
        price: 15,
        image: "pizza.jpg",
      },
      // Add more products...
    ],
  },
  {
    id: 10,
    name: "Hair Salon",
    category: "Beauty and Personal Care",
    image: "restaurant_a.jpg",
    products: [
      {
        id: 1,
        name: "Burger",
        category: "Food",
        price: 10,
        image: "burger.jpg",
      },
      {
        id: 2,
        name: "Pizza",
        category: "Food",
        price: 15,
        image: "pizza.jpg",
      },
      // Add more products...
    ],
  },
  // Add more shops...
]

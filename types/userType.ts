// Define the loans template
interface Loan {
  loanId: number
  accountNumber: string
  amount: number
  interestRate: number
  startDate: string
  endDate: string
  status: "approved" | "pending" | "rejected"
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

// Define the shop template
export interface Shop {
  id: number
  name: string
  location: string
  category: string
  image: string
  description: string
  slogan: string
  alt?: string
  away: any
  products: Product[]
  transactions?: Transaction[]
}

// Define the transactions template
export interface Transaction {
  id: number
  type:
    | "topUp"
    | "data"
    | "transfer"
    | "deposit"
    | "pay"
    | "flexible esusu"
    | "fixed esusu"
    | "subscription"
    | "flight"
  senderName: string
  senderAccount: number
  recieverName: string
  recieverAccount: number
  status: "pending" | "completed" | "rejected"
  amount: number
  timeStamp: string
  image: string
  sessionId: number
}

// Define the user template
export interface User {
  id: number
  walletAddress: string
  accountType: "marchant" | "normal"
  accessLevel: "user" | "admin" | "cs" | "master"
  image: string
  bvn: string
  balance: number
  firstName: string
  surName: string
  otherName?: string
  email: string
  phone: string
  gender: string
  dateOfBirth: string
  nationality: string
  state: string
  city: string
  zipCode: number
  homeAddress: string
  residentialAddress: string
  createdAt: string
  isActive: boolean
  transactions?: Transaction[]
  shop?: Shop
}

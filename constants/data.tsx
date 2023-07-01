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
    name: "Aisha Jummai Alhasan",
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

import { Services } from "../types/servicesType"
const servicesData: Services[] = [
  {
    id: 1,
    title: "Airtime Recharge",
    icon: "airtime-icon",
    optionGroups: [
      {
        label: "Select Provider",
        options: [
          { value: "mtn", label: "MTN" },
          { value: "airtel", label: "Airtel" },
          { value: "glo", label: "Glo" },
          { value: "9mobile", label: "9mobile" },
        ],
      },
      {
        label: "Select Amount",
        options: [
          { value: "100", label: "₦100" },
          { value: "200", label: "₦200" },
          { value: "500", label: "₦500" },
          { value: "700", label: "₦700" },
          { value: "1000", label: "₦1000" },
          { value: "1500", label: "₦1500" },
          { value: "2000", label: "₦2000" },
          { value: "3500", label: "₦3500" },
          { value: "5000", label: "₦5000" },
        ],
        hasCustomValue: true,
      },
      {
        label: "Phone Number",
        options: [
          {
            label: "Phone Number",
            value: "Phone Number",
            RecentPhones: [
              { PhoneNumber: "09098165428", Provider: "MTN" },
              { PhoneNumber: "08098265427", Provider: "Zain" },
              { PhoneNumber: "07098365429", Provider: "MTN" },
              { PhoneNumber: "09098565424", Provider: "Glo" },
              { PhoneNumber: "09098765428", Provider: "9Mobile" },
            ],
          },
        ],
        hasCustomValue: true,
      },
      {
        label: "Recent",
        options: [],
        hasCustomValue: true,
      },
    ],
  },
  {
    id: 2,
    title: "Data Purchase",
    icon: "data-icon",
    optionGroups: [
      {
        label: "Select Provider",
        options: [
          { value: "mtn", label: "MTN" },
          { value: "airtel", label: "Airtel" },
          { value: "glo", label: "Glo" },
          { value: "9mobile", label: "9mobile" },
        ],
      },
      {
        label: "Select Data Plan",
        options: [
          { value: "500mb", label: "500MB" },
          { value: "1gb", label: "1GB" },
          { value: "2gb", label: "2GB" },
        ],
        hasCustomValue: false,
      },
    ],
  },
  {
    id: 3,
    title: "Utility",
    icon: "data-icon",
    optionGroups: [
      {
        label: "Biller",
        options: [
          { value: "jedc", label: "JEDC" },
          { value: "abuja", label: "Abuja DISCO" },
          { value: "ekedc", label: "EKEDC" },
          { value: "ikedc", label: "IKEDC" },
        ],
      },
      {
        label: "Product",
        options: [
          { value: "prepaid", label: "PREPAID" },
          { value: "postpaid", label: "POSPAID" },
        ],
        hasCustomValue: true,
      },
      {
        label: "Meter Number",
        options: [],
        hasCustomValue: true,
      },
      {
        label: "Narration",
        options: [],
        hasCustomValue: true,
      },
    ],
  },
  {
    id: 4,
    title: "Pay Remita",
    icon: "data-icon",
    optionGroups: [
      {
        label: "With RRR",
        options: [
          { value: "rrr", label: "RRR Number" },
          { value: "narration", label: "Narration" },
        ],
        hasCustomValue: true,
      },
      {
        label: "Without RRR",
        options: [
          {
            value: "billers",
            label: "Select Biller",
            billers: [
              {
                value: "nimc",
                label: "NIMC",
                products: [
                  {
                    value: "ninSlip reIssue",
                    label: "NIN Slip Reissue",
                    amount: 500,
                  },
                  {
                    value: "card reIssue",
                    label: "Card Reissue and activation",
                    amount: 5000,
                  },
                  {
                    value: "dob modification",
                    label: "DOB modification",
                    amount: 5000,
                  },
                ],
              },
              // Add more billers and products here
            ],
          },
          { value: "narration", label: "Narration" },
        ],
        hasCustomValue: true,
      },
    ],
  },
  {
    id: 5,
    title: "TV Subscriptions",
    icon: "data-icon",
    optionGroups: [
      {
        label: "Biller",
        options: [
          {
            value: "billers",
            label: "Select Biller",
            billers: [
              {
                value: "dstv",
                label: "DSTV",
                products: [
                  {
                    value: "compact",
                    label: "COMPACT",
                    amount: 10500,
                  },
                  {
                    value: "compactplus",
                    label: "COMPACT PLUS",
                    amount: 20000,
                  },
                ],
              },
              {
                value: "gotv",
                label: "GOTv",
                products: [
                  {
                    value: "compact",
                    label: "COMPACT",
                    amount: 10500,
                  },
                  {
                    value: "compactplus",
                    label: "COMPACT PLUS",
                    amount: 20000,
                  },
                ],
              },
            ],
          },
        ],
        hasCustomValue: false,
      },
      {
        label: "Card Number",
        options: [{ value: "cardNumber", label: "Card Number" }],
        hasCustomValue: true,
      },
      {
        label: "Narration",
        options: [{ value: "narration", label: "Narration" }],
        hasCustomValue: true,
      },
    ],
  },
  {
    id: 6,
    title: "Book Flights",
    icon: "flight-icon",
    optionGroups: [
      {
        label: "Trip Type",
        options: [
          { value: "roundTrip", label: "Round Trip" },
          { value: "oneWay", label: "One Way" },
        ],
      },
      {
        label: "Passengers",
        options: [
          { value: "adult", label: "Adult" },
          { value: "children", label: "Children" },
        ],
        hasCustomValue: true,
      },
      {
        label: "Departure Date",
        options: [{ value: "departureDate", label: "Select Date" }],
        hasCustomValue: true,
      },
      {
        label: "Return Date",
        options: [{ value: "returnDate", label: "Select Date" }],
        hasCustomValue: true,
      },
    ],
  },
  {
    id: 7,
    title: "Transactions",
    icon: "history-icon",
    optionGroups: [
      {
        label: "Transactions",
        options: [
          { value: "transaction1", label: "Transaction 1" },
          { value: "transaction2", label: "Transaction 2" },
        ],
      },
    ],
  },
  {
    id: 8,
    title: "My Flights",
    icon: "history-icon",
    optionGroups: [
      {
        label: "Bookings",
        options: [
          { value: "booking1", label: "Booking 1" },
          { value: "booking2", label: "Booking 2" },
        ],
      },
    ],
  },
  {
    id: 9,
    title: "My Recharges",
    icon: "history-icon",
    optionGroups: [
      {
        label: "Recharges",
        options: [
          { value: "recharge1", label: "Recharge 1" },
          { value: "recharge2", label: "Recharges 2" },
        ],
      },
    ],
  },
]

export default servicesData

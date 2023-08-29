interface Services {
  id: number
  title: string
  icon: string
  optionGroups: ServiceOptionGroup[]
}

interface ServiceOptionGroup {
  label: string
  options: ServiceOption[]
  hasCustomValue?: boolean
}

interface ServiceOption {
  value: string | number
  label: string
}

const services: Services[] = [
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
          { value: 100, label: "₦100" },
          { value: 200, label: "₦200" },
          { value: 500, label: "₦500" },
          { value: 1000, label: "₦1000" },
        ],
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
        hasCustomValue: true,
      },
    ],
  },
  // Add more services as needed
]

export default services

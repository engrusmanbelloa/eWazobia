export interface Services {
  id: number
  title: string
  icon: string
  optionGroups: ServiceOptionGroup[]
}

interface ServiceOptionGroup {
  label: string
  options: ServiceOption[]
  hasCustomValue?: boolean
  meterNumber?: number
  naration?: string
}

interface ServiceOption {
  value: string
  label?: string
  amount?: number
  recentPhones?: RecentPhones[]
  billers?: Biller[]
}

interface Biller {
  value: string
  label: string
  products: Product[]
}

interface RecentPhones {
  PhoneNumber: string
  Provider: string
}

interface Product {
  value: string
  label: string
  amount: number
}

export interface UtilitiesProps {
  selectedId?: Number | undefined
  servicesData: Services[]
}

export type IconName =
  | "key"
  | "ios-call-outline"
  | "ios-wifi-outline"
  | "cog-outline"
  | "ios-send-outline"
  | "ios-tv-outline"
  | "ios-airplane-outline"
  | "ios-book-outline"
  | "push"
  | "map"
  | "filter"

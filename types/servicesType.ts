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
  value: string | number
  label: string
  billers?: Biller[]
}

interface Biller {
  value: string
  label: string
  products: Product[]
}

interface Product {
  value: string
  label: string
  amount: number
}

export type ServiceData = {
  id: Number
  title: string
  icon: string
}

export interface UtilitiesProps {
  selectedId?: Number | undefined
  servicesData: ServiceData[]
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

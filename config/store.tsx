import { Store, registerInDevtools } from "pullstate"

interface AuthStore {
  isLoggedIn: boolean
  hasEverLoggedIn: boolean
  hasDoneKYC: boolean
  hasAccount: boolean
}

export const AuthStore = new Store<AuthStore>({
  isLoggedIn: false,
  hasEverLoggedIn: false,
  hasDoneKYC: false,
  hasAccount: false,
})

registerInDevtools({ AuthStore })

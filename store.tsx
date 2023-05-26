import { Store, registerInDevtools } from "pullstate"

interface AuthStore {
  isLoggedIn: boolean
  hasEverLoggedIn: boolean
}

export const AuthStore = new Store<AuthStore>({
  isLoggedIn: false,
  hasEverLoggedIn: false,
})

registerInDevtools({ AuthStore })

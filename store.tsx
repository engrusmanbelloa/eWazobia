import { Store, registerInDevtools } from "pullstate"

interface AuthStore {
  isLoggedIn: boolean
}

export const AuthStore = new Store<AuthStore>({
  isLoggedIn: false,
})

registerInDevtools({ AuthStore })

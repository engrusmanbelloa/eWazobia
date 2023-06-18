import React, { createContext, useState } from "react"
import { modeTheme, themes } from "./Themes"

interface ThemeContextProps {
  mode: string
  theme: string
  setMode: (mode: string) => void
  setTheme: (theme: string) => void
}

export const ThemeContext = createContext<ThemeContextProps>({
  mode: "light",
  theme: "green",
  setMode: () => {},
  setTheme: () => {},
})

interface ThemeProviderProps {
  children: React.ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [mode, setMode] = useState("light")
  const [theme, setTheme] = useState("green")

  const value = {
    mode,
    theme,
    setMode,
    setTheme,
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

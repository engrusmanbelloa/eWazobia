// themes.ts

interface ModeTheme {
  [key: string]: {
    backgroundColor: string
    boxColor?: string
    textColor: string
  }
}

interface Themes {
  [key: string]: {
    primaryColor: string
    secondaryColor: string
    linkColor?: string
  }
}

export const modeTheme: ModeTheme = {
  dark: {
    backgroundColor: "#000000",
    boxColor: "#666666",
    textColor: "#FFFFFF",
  },
  light: {
    backgroundColor: "#FFFFFF",
    textColor: "#000000",
  },
}

export const themes: Themes = {
  green: {
    primaryColor: "#228b22",
    secondaryColor: "#00AA00",
    linkColor: "#0e32b4",
  },
  blue: {
    primaryColor: "#0000FF",
    secondaryColor: "#0000AA",
  },
  red: {
    primaryColor: "#FF0000",
    secondaryColor: "#AA0000",
  },
  orange: {
    primaryColor: "#FFA500",
    secondaryColor: "#FF8000",
  },
}
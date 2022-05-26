import {useState} from "react"
import {ThemeProvider} from "styled-components"
import Splash from "./SplashScreen.js"
  
export default function Light() {
    const LightTheme = {
        pageBackground: "white",
        titleColor: "#dc658b",
        tagLineColor:"black"
      }
      const DarkTheme = {
        pageBackground: "#282c36",
        titleColor: "lightpink",
        tagLineColor: "lavender"
      }
      const themes = {
        light: LightTheme,
        dark: DarkTheme,
      }
    const [theme,setTheme] = useState("light")
    return (
        <ThemeProvider theme={themes[theme]}>
            <Splash theme = {theme} setTheme={setTheme}/>
        </ThemeProvider>
    )
}

import React from "react"
import { ToggleContext } from "./Toggles/Toggle"

export default function Footer() {
    const  {theme} = React.useContext(ToggleContext)
    return (
        <footer className={`footer-${theme}`}>
            <p>Component Library++</p>
            <p>Copyright &copy; 2023 LM Projects </p>
        </footer>
    )
}
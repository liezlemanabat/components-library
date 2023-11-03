import React from "react"
import { ToggleContext } from "./Toggles/Toggle"

export default function NavBar() {
    const { on, toggle, theme } = React.useContext(ToggleContext)
    
    return (
        <div className={`nav-con theme-${theme}`}>
        <h1>Component Library++</h1>
            { on ? (
                <div className="toggle">
                <p>Dark</p>
                <i className="fa-solid fa-toggle-on" onClick={toggle}></i>
                </div> 
            ) : 
            ( 
                <div className="toggle">
                <p>Light</p>
                <i className="fa-solid fa-toggle-off" onClick={toggle}></i> 
                </div>
            )
            }
        </div>
    )
}
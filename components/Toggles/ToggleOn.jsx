import React from "react"
import { ToggleContext } from "./Toggle"

export default function ToggleOn({children}) {
    const {on, theme} = React.useContext(ToggleContext)
    
    return (
        <div className={`main theme-${theme}`}>{on ? children : null}</div>
    )
}
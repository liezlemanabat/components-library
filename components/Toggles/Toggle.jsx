import React from "react"
import useToggle from "../../hooks/useToggle"

const ToggleContext = React.createContext()

export default function Toggle({children}) {
    const [ on, toggle ] = useToggle()
    const theme = on ? "dark" : "light"
    
    return (
        <ToggleContext.Provider value={{on, toggle, theme}}>
        {children}
        </ToggleContext.Provider>
        
    )
}

export { ToggleContext }
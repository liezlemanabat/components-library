import React from "react"
import classnames from "classnames"

export default function Badge({ children, color, className}) {
    let badgeColor = color && `pill-${color}`
    const allClasses = classnames(badgeColor, className)

    return (
        <div className={allClasses}>
            {children}
        </div>
    )
}
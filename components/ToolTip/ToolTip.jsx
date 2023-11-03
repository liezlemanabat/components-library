import React from "react"

export default function ToolTip({children, tooltip, bgColor, after, tip}) {
    const [isClicked, setIsClicked] = React.useState(false)
    
    function showTooltip() {
        setIsClicked(true)
    }
    
    function toggleClose() {
        setIsClicked(false)
    }
    
    return (
        <div>
                        <div className={tooltip}>
            { isClicked &&   <div className={`tooltip-outer-${tip} ${bgColor} tooltip-outer-${after}`} >
                                <div className="tooltip-inner">
                                    <i className="fa-solid fa-inbox"></i>
                                    <span>Archives notes</span>
                                    <i className="fa-solid fa-xmark" onClick={toggleClose}></i>
                                </div>
                                <p className="text">{children}</p>
                            </div> }
                        </div>
                        <div className={`tooltip-box ${bgColor}`} onClick={showTooltip}>Click Me!</div>
        </div>
        
    )
}
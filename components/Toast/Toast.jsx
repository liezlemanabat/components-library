import React from "react"

export default function Toast({children, toast, show}) {
    const [showToast, setShowToast] = React.useState(false)
    
    function toggleToast() {
        setShowToast(true)
        setTimeout(() => {
           setShowToast(false) 
        }, 2500)
    }

    
    return (
        <>
            {showToast && ( <div className={toast}>
                <div className="toast-top">
                    <i className="fa-regular fa-circle-check"></i> 
                    <span>Success</span>
                </div>
            <span>{children}</span>
            </div> )}
            <div className="toast-btn" onClick={toggleToast}>Completed</div>
        </>
    )
}
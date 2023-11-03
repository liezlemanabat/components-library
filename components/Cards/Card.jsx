import React from "react"
import cloud from "../../assets/Cloud-upload.png"

export default function Card({children}) {
    return (
        <div className="card-inner">
            <div className="img-container">
            <img src={cloud} className="card-img"/>
            </div>
            {children}
        </div>
    )
}
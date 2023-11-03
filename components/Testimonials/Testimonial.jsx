import React from "react"

export default function Testimonial({children, image, name, location}) {
    return (
        <div className="testimonial-container">   
            <div className="img-holder">
                <img src={image}/>
            </div>
            <div className="message-con">
                <p className="qoute">{children}</p>
                <p className="author">{name}</p>
                <p className="loc">{location}</p>
            </div>
        </div>
    )
}

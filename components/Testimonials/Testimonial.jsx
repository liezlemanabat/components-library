import React from "react"
import avatar from "../../assets/test-img.png"

export default function Testimonial({children, name, location}) {
    return (
        <>
        <div className="testimonial-container">   
            <div className="img-holder">
                <img src={avatar} alt="May Andersons Photo"/>
            </div>
            <div className="message-con">
                <p className="qoute">{children}</p>
                <p className="author">{name}</p>
                <p className="loc">{location}</p>
            </div>
        </div>
        
        <div className="container-left">  
            <div className="image-left">
                <img className="img-left" src={avatar} alt="May Andersons Photo"/>
            </div> 
            <div className="message-left">
                <p className="qoute">{children}</p>
                <p className="author">{name}</p>
                <p className="loc">{location}</p>
            </div>

        </div>
        </>
    )
}

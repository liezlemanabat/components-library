import React from "react"
import checkImg from "../../assets/Check-circle.png"
import exclamation from "../../assets/Exclamation.png"
import icon from "../../assets/Icon.png"
import xCircle from  "../../assets/X-circle.png"

export default function Banner({status, title}) {
    const [isFlipped, setFlipped] = React.useState(false)
    const handleFlip = () => {
        setFlipped(!isFlipped)
    }
    
    let data
    
    if (isFlipped) {
        switch (status) {
            case 'success' :
            data = (
                    <div className="banner banner-single single-success" onClick={handleFlip}>
                        <div className="icons">
                            <img src={checkImg} className="img-check" />
                            <h4 className="banner-sub">{title}</h4>
                        </div>
                    </div>
            )
            break
            case 'attention' :
            data = (
                    <div className="banner banner-single single-attention" onClick={handleFlip}>
                        <div className="icons">
                            <img src={exclamation} className="img-attention" />
                            <h4 className="banner-sub">{title}</h4>
                        </div>
                    </div>    
            )
            break
            case 'error' :
            data = (
                    <div className="banner banner-single single-error" onClick={handleFlip}>
                        <div className="icons">
                            <img src={xCircle} className="img-error" />
                            <h4 className="banner-sub">{title}</h4>
                        </div>
                    </div>  
            )
            break
            default:
            data = (
                    <div className="banner banner-single single-nuetral" onClick={handleFlip}>
                        <div className="icons">
                            <img src={icon} className="img-info" />
                            <h4 className="banner-sub">{title}</h4>
                        </div>
                    </div>
            )
        }
    } else {
        switch (status) {
            case 'success':
            data = (
                    <div className="banner banner-success" onClick={handleFlip}>
                        <div className="icons">
                            <img src={checkImg} className="img-check" />
                            <h4 className="banner-sub">{title}</h4>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                        pariatur, ipsum similique veniam.</p>
                    </div>
            )
            break
            case 'attention' :
            data = (
                    <div className="banner banner-attention" onClick={handleFlip}>
                        <div className="icons">
                            <img src={exclamation} className="img-attention" />
                            <h4 className="banner-sub">{title}</h4>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</p>
                    </div>    
            )
            break
            case 'error' :
            data = (
                    <div className="banner banner-error" onClick={handleFlip}>
                        <div className="icons">
                            <img src={xCircle} className="img-error" />
                            <h4 className="banner-sub">{title}</h4>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</p>
                    </div>  
            )
            break
            default :
            data = (
                    <div className="banner banner-nuetral" onClick={handleFlip}>
                        <div className="icons">
                            <img src={icon} className="img-info" />
                            <h4 className="banner-sub">{title}</h4>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
                    </div>
            )
        }
    }
    return data
}
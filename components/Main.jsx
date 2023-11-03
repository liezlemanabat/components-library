import React from "react"
import Badge from "./Badges/Badge"
import Banner from "./Banners/Banner"
import Card from "./Cards/Card"
import Testimonial from "./Testimonials/Testimonial"
import ToolTip from "./ToolTip/ToolTip"
import Toast from "./Toast/Toast"
import { ToggleContext } from "./Toggles/Toggle"


export default function Main() {
    const { theme } = React.useContext(ToggleContext)
    
    return (
        <main className={`main-${theme}`}>
            <h2 className={`title title-${theme}`}>Badges</h2>
            <section className="badge-container">
                <Badge color="gray" className="badge">Badge</Badge>
                <Badge color="red" className="badge">Badge</Badge>
                <Badge color="yellow" className="badge">Badge</Badge>
                <Badge color="green" className="badge">Badge</Badge>
                <Badge color="blue" className="badge">Badge</Badge>
                <Badge color="indigo" className="badge">Badge</Badge>
                <Badge color="purple" className="badge">Badge</Badge>
                <Badge color="pink" className="badge">Badge</Badge>
            </section>
            
            <h2 className={`title title-${theme}`}>Banners</h2>
            <section className="banner-container">
                <Banner title="Congratulations!" status="success" />
                <Banner title="Attention!" status="attention" />
                <Banner title="There is a problem with your application!" status="error" />
                <Banner title="Update available!" status="nuetral" />
            </section>
            
            <h2 className={`title title-${theme}`}>Cards</h2>
            <section className="card-container">
                <Card>
                    <h3 className="card-title">Easy Deployment</h3>
                    <p>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
                </Card>
            </section>   
            
            <h2 className={`title title-${theme}`}>Testimonials</h2>
            <section className="test-container">
                <Testimonial name="May Andersons" location="Workcation, CTO">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.
                </Testimonial>
            </section>
            
            <h2 className={`title title-${theme}`}>ToolTips</h2>
            <section className="tooltip-container">
                <ToolTip tooltip="tooltip" bgColor="black" after="black::after" tip="black">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
                </ToolTip>
                <ToolTip tooltip="tooltip" bgColor="blue" after="blue::after" tip="blue">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
                </ToolTip>
                <ToolTip tooltip="tooltip" bgColor="pink" after="pink::after" tip="pink">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
                </ToolTip>
                <ToolTip tooltip="tooltip" bgColor="green" after="green::after" tip="green">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
                </ToolTip>
                <ToolTip tooltip="tooltip" bgColor="white" after="white::after" tip="white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
                </ToolTip>
                <ToolTip tooltip="tooltip" bgColor="lightblue" after="lightblue::after" tip="lightblue">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
                </ToolTip>
                <ToolTip tooltip="tooltip" bgColor="lightpink" after="lightpink::after" tip="lightpink">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
                </ToolTip>
                <ToolTip tooltip="tooltip" bgColor="lightgreen" after="lightgreen::after" tip="lightgreen">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
                </ToolTip>
            </section>
            
            <h2 className={`title title-${theme}`}>Toast</h2>
            <section className="toast-container">
                <Toast toast="toast" show=".show">
                Your work has been saved
                </Toast>
            </section>
        </main>
    )
}
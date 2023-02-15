import icon from "../imgs/cube_spray.webp";

export function Home() {
    return (
        <div className="container">
            <h1>Welcome to our website!</h1>
            <p>Please excuse the mess, our website is currently under construction. We are working hard to make improvements and bring you an even better experience.</p>
            <p>Our website is dedicated to showcasing our work in React development and multimedia creation. We specialize in creating engaging user interfaces and interactive experiences that capture the imagination and bring ideas to life.</p>
            <p>While we are still working on completing our website, you can explore the content that is currently available. Check out our <a href="/portfolio">portfolio</a> to see examples of our work and get a sense of our capabilities.</p>
            <p>We apologize for any inconvenience this may cause and thank you for your patience. We are excited to share our work with you and look forward to connecting with you soon.</p>
            <p>Stay tuned for more updates on our progress and new projects. Thank you for visiting our website!</p>

            <img src={icon} alt="main"></img>
        </div>
    )
}
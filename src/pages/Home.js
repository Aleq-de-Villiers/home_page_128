import icon from "../imgs/cube_spray.webp";

export function Home() {
    return (
        <div className="container">
            <h1 data-text="cut-out">Welcome to our website!</h1>
            <p>Greetings traveler! Unfortunately, this website is still under construction and is not yet ready for visitors. However, we are working hard to bring you a variety of exciting games and captivating art that will be sure to entertain and delight you. We appreciate your patience and look forward to sharing our creations with you soon!</p>

            <img src={icon} alt="main"></img>
        </div>
    )
}
import { Outlet, Link } from "react-router-dom";

const images = importAll(require.context("../imgs/buttons", false, /\.(webp)$/));

function importAll(r) {
    return r.keys().map(r);
}

function MakeButton(props) {
    const randomImage = images[Math.floor(Math.random() * images.length)];

    return (
        <li style={{
            backgroundColor: "fff",
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundImage: `url(${randomImage})`,
            backgroundRepeat: "no-repeat",
            padding: "4%"
        }}>
            <Link to={props.url}>{props.name}</Link>
        </li>
    )
}

export function Frame() {
    return (
    <>
    <nav>
        <ul className="top_bar">
        <MakeButton url="/" name="HOME"></MakeButton>
        <MakeButton url="/art" name="ART"></MakeButton>
        <MakeButton url="/texts" name="TEXTS"></MakeButton>
        <MakeButton url="/game" name="GAMES"></MakeButton>
        {/* <li>
            <Link style={{
                backgroundColor: "fff",
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundImage: `url(${button_img})`,
                backgroundRepeat: "no-repeat"
                // padding: "10%"
            }}
            to="/">Home</Link>
        </li>
        <li>
            <Link to="/art">Art</Link>
        </li>
        <li>
            <Link to="/blogs">Blogs</Link>
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li> */}
        </ul>
    </nav>

    <Outlet />
    </>
    )
}
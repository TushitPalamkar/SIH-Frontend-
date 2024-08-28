import { Link } from "react-router-dom";
import Section from "./Section";
import Nav from "./Nav";
export default function Navbar() {
    return (
        <div>
            <Nav/>
            <header>
                <div className="container">
                    <div className="home_header_info">
                        <h1 className="typewrite" data-period="2000" data-type='[ "Incredible!ndia", "Dekho Apna Desh!", "Explore the Indian Culture and Heritage." ]'></h1>
                        <p>Maharashtra, located in western India, is a vibrant state known for its diverse culture, rich history, and economic significance, home to bustling cities like Mumbai and Pune.</p>
                        <a href="https://indianculture.gov.in/">Read More</a>
                    </div>
                </div>
                <div className="video">
                <video id="video" autoPlay loop muted>
    <source type="video/mp4" src="/images/film.mp4" />
    Your browser does not support the video tag.
</video>

                </div>
            </header>
            {/* <Section />  Render the Section component here */}
        </div>
    );
}
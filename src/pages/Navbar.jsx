import { Link } from "react-router-dom";
import Section from "./Section";
import Nav from "./Nav";
// import myVideo from '../vids/film.mp4';
import myVideo from "../imgs2/film.mp4"
export default function Navbar() {
    return (
        <div>
            <Nav/>
            <header>
                <div className="container">
                    <div className="home_header_info">
                        <h1 className="typewrite" data-period="2000" data-type='[ "Incredible!ndia", "Dekho Apna Desh!", "Explore the Indian Culture and Heritage." ]'></h1>
                        <p>India, a vast and vibrant tapestry of cultures, traditions, and landscapes, is a land where ancient history and modern innovation coexist in harmony. From the snow-capped peaks of the Himalayas to the sun-kissed beaches of the Indian Ocean, India's rich heritage, diverse languages, and spiritual depth offer a captivating journey through time. It is a place where every corner tells a story, and every moment is a celebration of life, resilience, and unity in diversity</p>
                        <a href="https://indianculture.gov.in/">Read More</a>
                    </div>
                </div>
                <div className="video">
                <video id="video" autoPlay loop muted>
                    <source type="video/mp4" src={myVideo} />
                    Your browser does not support the video tag.
                </video>

                </div>
            </header>
            {/* <Section />  Render the Section component here */}
        </div>
    );
}
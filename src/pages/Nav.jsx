import { Link } from "react-router-dom";
export default function Nav(){
    return(
        <nav>
        <div className="container">
            <div className="menu-par">
                <div className="logo-par">
                    <Link to="/">
                        <h2>!NDIA</h2>
                    </Link>
                </div>
                <div className="nav">
                    <ul>
                        <li><Link className="menu_hover" to="/">Home</Link></li>
                        <li><Link className="menu_hover" to="#explore-fiji">Heritage Sites</Link></li>
                        <li><Link className="menu_hover" to="#explore-fiji">Travel With Us</Link></li>
                        <li><Link className="menu_hover" to="#gallery">Gallery</Link></li>
                        <li><Link className="menu_hover" to="/explore">Explore</Link></li>
                        <li><Link className="menu_hover" to="/blog">Blog</Link></li>
                    </ul>
                </div>
                <div className="toggle-btn">
                    <i className="fa fa-bars"></i>
                </div>
            </div>
        </div>
    </nav>
    );
}
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import '../App' // Ensure your styles are imported

export default function AboutState() {
    const { id } = useParams();
    console.log("AboutState rendered with ID:", id); // Check if this logs to console
    return (
        <div className="about-state">
            
            <Link to={`/foods/${id}`}>Explore the LipSmacking Foods from this State!!</Link>
            <Link to={`/destinations/${id}`}>Explore the Amazing Destinations!!</Link>
        </div>
    );
}

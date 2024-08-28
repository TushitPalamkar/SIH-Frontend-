import { Link } from "react-router-dom";

export default function States({_id, name, description}) {
    return (
        <div className="state-card"> {/* This class can be moved to the parent div in Explore if preferred */}
            <Link to={`/aboutstate/${_id}`}>Explore {name}</Link>
            <div className="description">{description}</div>
        </div>
    );
}

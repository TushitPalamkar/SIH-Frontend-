import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Destinations() {
    const { id } = useParams();
    const [destinations, setDestinations] = useState([]);
    const [expanded, setExpanded] = useState({}); // Track expanded state for each card

    useEffect(() => {
        async function getDestinations() {
            try {
                const response = await axios.get(`https://sih-backend-f30f.onrender.com/destbystate/${id}`);
                console.log(response.data);
                setDestinations(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        getDestinations();
    }, [id]);

    const toggleExpand = (index) => {
        setExpanded((prev) => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <div className="destinations-container">
            {destinations.length > 0 ? (
                destinations.map((destination, index) => (
                    <div key={destination.deststate} className="destination-card">
                        <h2>{destination.name}</h2>
                        <img src={destination.destimg} alt={destination.name} className="destination-image" />
                        <p className={`destination-description ${expanded[index] ? 'expanded' : ''}`}>
                            {destination.description}
                        </p>
                        {destination.description.length > 60 && (
                            <span 
                                className="read-more" 
                                onClick={() => toggleExpand(index)}
                            >
                                {expanded[index] ? 'Show less' : '... Read more'}
                            </span>
                        )}
                        <p className="destination-location">Location: {destination.location}</p>
                    </div>
                ))
            ) : (
                <p>No destinations found for this state.</p>
            )}
        </div>
    );
}

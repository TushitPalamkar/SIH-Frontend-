import { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

export default function Festivals() {
    const { id } = useParams();
    const [festival, setFestival] = useState([]);
    const [expanded, setExpanded] = useState({}); // Track expanded state for each card

    useEffect(() => {
        async function getFestival() {  // Corrected function name to getFestival
            try {
                const response = await axios.get(`https://sih-backend-f30f.onrender.com/festivalbyid/${id}`);
                console.log(response.data);
                setFestival(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        getFestival();  // Corrected function call
    }, [id]);

    const toggleExpand = (index) => {
        setExpanded((prev) => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <div className="clothes-container">
            {festival.length > 0 ? (
                festival.map((fest, index) => (
                    <div className="cloth-card" key={fest.id}>
                        <h2>{fest.name}</h2>
                        <img src={fest.festivalimg} alt={fest.name} className="cloth-image" />
                        <p className={`cloth-description ${expanded[index] ? 'expanded' : ''}`}>
                            {fest.description}
                        </p>
                        {fest.description.length > 60 && (
                            <span 
                                className="read-more" 
                                onClick={() => toggleExpand(index)}
                            >
                                {expanded[index] ? 'Show less' : '... Read more'}
                            </span>
                        )}
                    </div>
                ))
            ) : (
                <p>No festivals found for this state.</p>
            )}
        </div>
    );
}

import { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

export default function Festivals() {
    const { id } = useParams();
    const [festival, setFestival] = useState([]);

    useEffect(() => {
        async function getClothes() {  // Corrected function name to getClothes
            try {
                const response = await axios.get(`https://sih-backend-f30f.onrender.com/festivalbyid/${id}`);
                console.log(response.data);
                setFestival(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        getClothes();  // Corrected function call
    }, [id]);

    return (
        <div className="clothes-container">  {/* Updated class name */}
            {festival.length > 0 ? (
                festival.map((fest) => (
                    <div className="cloth-card" key={fest.id}>  {/* Ensure unique key */}
                        <h2>{fest.name}</h2>  {/* Fixed variable to use cloth instead of clothes */}
                        <img src={fest.festivalimg} alt={fest.name} className="cloth-image" />  {/* Updated class names */}
                        <p className="cloth-description">{fest.description}</p>  {/* Updated class names */}
                    </div>
                ))
            ) : (
                <p>No clothes found for this state.</p>
            )}
        </div>
    );
}

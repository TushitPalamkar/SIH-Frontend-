import { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

export default function Clothes() {
    const { id } = useParams();
    const [clothes, setClothes] = useState([]);

    useEffect(() => {
        async function getClothes() {  // Corrected function name to getClothes
            try {
                const response = await axios.get(`https://sih-backend-f30f.onrender.com/clothesbystate/${id}`);
                console.log(response.data);
                setClothes(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        getClothes();  // Corrected function call
    }, [id]);

    return (
        <div className="clothes-container">  {/* Updated class name */}
            {clothes.length > 0 ? (
                clothes.map((cloth) => (
                    <div className="cloth-card" key={cloth.id}>  {/* Ensure unique key */}
                        <h2>{cloth.name}</h2>  {/* Fixed variable to use cloth instead of clothes */}
                        <img src={cloth.clothimg} alt={cloth.name} className="cloth-image" />  {/* Updated class names */}
                        <p className="cloth-description">{cloth.description}</p>  {/* Updated class names */}
                    </div>
                ))
            ) : (
                <p>No clothes found for this state.</p>
            )}
        </div>
    );
}

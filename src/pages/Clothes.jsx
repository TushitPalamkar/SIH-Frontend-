import { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

export default function Clothes() {
    const { id } = useParams();
    const [clothes, setClothes] = useState([]);
    const [expanded, setExpanded] = useState({});

    useEffect(() => {
        async function getClothes() {
            try {
                const response = await axios.get(`https://sih-backend-f30f.onrender.com/clothesbystate/${id}`);
                console.log(response.data);
                setClothes(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        getClothes();
    }, [id]);

    const handleClick = (index) => {
        setExpanded(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <div className="clothes-container">
            {clothes.length > 0 ? (
                clothes.map((cloth, index) => (
                    <div className="cloth-card" key={cloth.id}>
                        <h2>{cloth.name}</h2>
                        <img src={cloth.clothimg} alt={cloth.name} className="cloth-image" />
                        <p 
                            className={`cloth-description ${expanded[index] ? 'expanded' : ''}`} 
                            onClick={() => handleClick(index)}
                        >
                            {cloth.description}
                        </p>
                    </div>
                ))
            ) : (
                <p>No clothes found for this state.</p>
            )}
        </div>
    );
}

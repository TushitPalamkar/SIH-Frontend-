import { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";


export default function Foods() {
    const { id } = useParams();
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        async function getFoods() {
            try {
                const response = await axios.get(`https://sih-backend-f30f.onrender.com/foodbystate/${id}`);
                console.log(response.data);
                setFoods(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        getFoods();
    }, [id]);

    return (
        <div className="foods-container">
            {foods.length > 0 ? (
                foods.map((food) => (
                    <div key={food.foodstate} className="food-card">
                        <h2>{food.name}</h2>
                        <img src={food.foodimg} alt={food.name} className="food-image" />
                        <p className="food-description">{food.description}</p>
                        <p className="food-recipes">Recipes: {food.recipes}</p>
                    </div>
                ))
            ) : (
                <p>No foods found for this state.</p>
            )}
        </div>
    );
}

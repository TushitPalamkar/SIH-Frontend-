import axios from 'axios';
import { useState, useEffect } from 'react';
import States from './States';
import Nav from './Nav';
import Footer from './Footer';

export default function Explore() {
  const [states, setStates] = useState([]);

  useEffect(() => {
    async function getStates() {
      try {
        const response = await axios.get('https://sih-backend-f30f.onrender.com/states');
        console.log(response.data);
        setStates(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getStates();
  }, []);

  return (
    <>
   
      <div className="explore-container">
        {states.map((state) => (
          <div key={state._id} className="state-card"> {/* Use _id as the key */}
            <States {...state} />
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

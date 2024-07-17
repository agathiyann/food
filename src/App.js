import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DishList from './components/DishList';
import foodIcon from './components/nosh.png'; // Import your icon
import './App.css';

const App = () => {
    const [dishes, setDishes] = useState([]);

    useEffect(() => {
        const fetchDishes = async () => {
            const { data } = await axios.get('https://foodbackend-461j.onrender.com/api/dishes');
            setDishes(data);
        };

        fetchDishes();
    }, []);

    const togglePublished = async (id) => {
        const { data } = await axios.put(`https://foodbackend-461j.onrender.com/api/dishes/${id}/toggle`);
        setDishes(dishes.map(dish => dish._id === data._id ? data : dish));
    };

    return (
        <div className="App">
            <div className="header"> 
                <h1>Food Menu<img src={foodIcon} alt="Food Icon" className="food-icon"  /></h1>
            </div>
            <DishList dishes={dishes} togglePublished={togglePublished} />
        </div>
    );
};

export default App;
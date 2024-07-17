import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DishItem from './components/DishItem';
import './App.css';
import noshImage from '../src/components/nosh.png';

function App() {
    const [dishes, setDishes] = useState([]);

    useEffect(() => {
        const fetchDishes = async () => {
            try {
                const response = await axios.get('https://foodbackend-461j.onrender.com/api/dishes');
                setDishes(response.data);
            } catch (error) {
                console.error('Error fetching dishes:', error);
            }
        };

        fetchDishes();
    }, []);

    const togglePublished = async (id) => {
        const dish = dishes.find(d => d._id === id);
        const updatedDish = { ...dish, isPublished: !dish.isPublished };

        try {
            const response = await axios.put(`https://foodbackend-461j.onrender.com/api/dishes/${id}`, { isPublished: updatedDish.isPublished });
            setDishes(dishes.map(d => d._id === id ? response.data : d));
        } catch (error) {
            console.error('Error updating dish:', error);
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={noshImage} alt="Nosh Logo" className="nosh-logo" />
                <h1>Food Menu</h1>
            </header>
            <div className="dish-list">
                {dishes.map(dish => (
                    <DishItem key={dish._id} dish={dish} togglePublished={togglePublished} />
                ))}
            </div>
        </div>
    );
}

export default App;

import React from 'react';
import ToggleButton from './ToggleButton';
import './DishItem.css'; 

const DishItem = ({ dish, togglePublished }) => {
    return (
        <div className="dish-item">
            <img src={dish.imageUrl} alt={dish.dishName} />
            <h2>{dish.dishName}</h2>
            <ToggleButton isPublished={dish.isPublished} onClick={() => togglePublished(dish._id)} />
        </div>
    );
};

export default DishItem;

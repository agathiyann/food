import React from 'react';
import DishItem from './DishItem';

const DishList = ({ dishes, togglePublished }) => {
    return (
        <div className="dish-list">
            {dishes.map(dish => (
                <DishItem key={dish._id} dish={dish} togglePublished={togglePublished} />
            ))}
        </div>
    );
};

export default DishList;

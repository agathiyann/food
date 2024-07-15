import React from 'react';
import './ToggleButton.css'; 

const ToggleButton = ({ isPublished, onClick }) => {
    return (
        <label className="switch">
            <input type="checkbox" checked={isPublished} onChange={onClick} />
            <span className="slider round"></span>
            <span className="label">{isPublished ?  'Published':'Unpublished' }</span>
        </label>
    );
};

export default ToggleButton;

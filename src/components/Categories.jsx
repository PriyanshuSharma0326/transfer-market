import React, { useState } from 'react';

const Categories = ({ filterMenuItems }) => {
    let categories = ['All', 'Cheap', 'Mid-range', 'Expensive'];
    const [activeCategory, setActiveCategory] = useState('All');

    return (
        <div className="categories">
            {categories.map((category, index) => {
                return (
                <button
                    className={`category ${activeCategory === category ? 'active' : ''}`} 
                    key={index} 
                    onClick={() => {
                        filterMenuItems(category);
                        setActiveCategory(category);
                    }}
                >
                    {category} 
                </button>
                );
            })}
        </div>
    );
};

export default Categories;

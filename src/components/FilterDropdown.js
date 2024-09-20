// src/components/FilterDropdown.js
import React from 'react';
import styled from 'styled-components';

const Dropdown = styled.select`
    padding: 10px;
    margin: 20px;
    font-size: 1rem;
    border-radius: 4px;
    border: 1px solid #ddd;
`;

const FilterDropdown = ({ categories, selectedCategory, onCategoryChange }) => {
    return (
        <Dropdown value={selectedCategory} onChange={(e) => onCategoryChange(e.target.value)}>
            <option value="">All Categories</option>
            {categories.map((category, index) => (
                <option key={index} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
            ))}
        </Dropdown>
    );
};

export default FilterDropdown;

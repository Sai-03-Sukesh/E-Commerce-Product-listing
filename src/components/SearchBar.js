// src/components/SearchBar.js
import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    width: 100%;
    max-width: 400px;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin: 20px auto;
    display: block;
    font-size: 1rem;
`;

const SearchBar = ({ searchQuery, setSearchQuery }) => {
    return (
        <Input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
        />
    );
};

export default SearchBar;

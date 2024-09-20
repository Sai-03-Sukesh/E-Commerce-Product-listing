// src/components/ThemeToggle.js
import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    border: none;
    padding: 10px 15px;
    cursor: pointer;
    position: fixed;
    top: 20px;
    left: 20px;
    border-radius: 4px;

    &:hover {
        opacity: 0.8;
    }
`;

const ThemeToggle = ({ toggleTheme }) => {
    return <Button onClick={toggleTheme}>Toggle Theme</Button>;
};

export default ThemeToggle;

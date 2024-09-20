// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductListing from './pages/ProductListing';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import ThemeToggle from './components/ThemeToggle';

const lightTheme = {
    background: '#ffffff',
    text: '#000000',
};

const darkTheme = {
    background: '#333333',
    text: '#ffffff',
};

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: all 0.3s ease;
  }
`;

const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <GlobalStyle />
            <Router>
                <ThemeToggle toggleTheme={toggleTheme} />
                <Routes>
                    <Route path="/" element={<ProductListing />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
};

export default App;

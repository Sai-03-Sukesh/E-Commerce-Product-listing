import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import FilterDropdown from '../components/FilterDropdown';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    max-width: 1200px;
    width: 100%;
`;

const Cart = styled.div`
    background-color: #f8f8f8;
    padding: 10px;
    border-radius: 8px;
    position: fixed;
    top: 20px;
    right: 20px;
    width: 200px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ProductListing = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [cart, setCart] = useState([]); 

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                setProducts(data);
                const uniqueCategories = [...new Set(data.map(item => item.category))];
                setCategories(uniqueCategories);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching products:', error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const filteredProducts = Array.isArray(products)
        ? products.filter(product => 
            (selectedCategory === '' || product.category === selectedCategory) && 
            product.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : [];

    return (
        <Container>
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <FilterDropdown categories={categories} selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
            <Grid>
                {loading
                    ? <p>Loading products...</p>
                    : filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} addToCart={addToCart} />
                    ))
                }
            </Grid>

            {cart.length > 0 && (
                <Cart>
                    <h4>Cart</h4>
                    {cart.map((item, index) => (
                        <p key={index}>{item.title}</p>
                    ))}
                </Cart>
            )}
        </Container>
    );
};

export default ProductListing;

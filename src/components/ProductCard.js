// src/components/ProductCard.js
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    border: 1px solid #ddd;
    padding: 16px;
    margin: 16px;
    text-align: center;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
    &:hover {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
`;

const ProductImage = styled.img`
    max-width: 100%;
    height: auto;
    margin-bottom: 16px;
`;

const ProductName = styled.h3`
    font-size: 1.2rem;
    color: #333;
    margin-bottom: 8px;
`;

const ProductPrice = styled.p`
    font-size: 1rem;
    color: #888;
`;

const AddToCartButton = styled.button`
    padding: 10px 15px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 10px;

    &:hover {
        background-color: #0056b3;
    }
`;

const ProductCard = ({ product, addToCart }) => {
    return (
        <Card>
            <ProductImage src={product.image} alt={product.name} />
            <ProductName>{product.title}</ProductName>
            <ProductPrice>${product.price}</ProductPrice>
            <AddToCartButton onClick={() => addToCart(product)}>
                Add to Cart
            </AddToCartButton>
        </Card>
    );
};

export default ProductCard;

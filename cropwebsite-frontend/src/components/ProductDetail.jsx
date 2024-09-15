import React from 'react';

// upload_date, file_name, product_name, price, quantity, description, url
const ProductDetail = ({ product }) => {
    return (
        <div className="product-card">
            <img src={product.url} alt={product.name} className="product-image" />
            <div className="product-info">
                <h3>{product.product_name}</h3>
                <p>{product.description}</p>
                <div className="product-bottom-info">
                    <span className="product-price">${product.price}</span>
                    <span className="product-quantity">{product.quantity}</span>
                </div>
                <small>{product.upload_date}</small>
            </div>
        </div>
    );
};

export default ProductDetail;
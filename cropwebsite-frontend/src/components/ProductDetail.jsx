import React from 'react';
import '@/style/ProductDetail.css';

// upload_date, file_name, product_name, price, quantity, description, url
const ProductDetail = ({ product }) => {
    return (
        <div className="product-card">
            <img src={product.url} alt={product.name} />
            <div >
                <h3>名称：{product.product_name}</h3>
                <p>描述：{product.description}</p>
                <div>
                    <h3>价格：¥{product.price}</h3>
                    <h3>数量：{product.quantity}</h3>
                </div>
                <small>更新时间：{product.upload_date}</small>
            </div>
        </div>
    );
};

export default ProductDetail;
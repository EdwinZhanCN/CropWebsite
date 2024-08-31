import React from 'react';
import '@/style/ImgCardCSS.css';

const ImgCard = ({ product }) => {
    return (
        <div className="card" >
            <div className="imgBx">
                <img src={product.img} alt={product.alt}/>
            </div>
            <h2 className="title">{product.title}</h2>
            <div className="content">
                <p>{product.description}</p>
            </div>
        </div>
    );
};

export default ImgCard;
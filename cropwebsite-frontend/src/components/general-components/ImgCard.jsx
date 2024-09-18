import React from 'react';
import '@/style/ImgCardCSS.css';
import ProductDetail from "@/components/ProductDetail";
import ProductDetailContainer from "@/components/container-components/ProductDetailContainer";

const ImgCard = ({ product }) => {
    const goToDetail = () => {
        return(
            <ProductDetailContainer />
        )
    }

    return (
        <div className="card">
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
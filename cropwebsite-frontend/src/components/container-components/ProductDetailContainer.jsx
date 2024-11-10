import React, { useEffect, useState } from "react";
import ProductDetail from "@/components/ProductDetail";
import { get } from '@/net';
import ImgCard from "@/components/general-components/ImgCard";

function ProductDetailContainer() {
    // the data that will be fetched from the backend
    const [products, setProducts] = useState(null);

    // get the data from the backend
    useEffect(() => {
        async function fetchProducts() {
            try {
                await get('/api/static/products',
                    (data) => {
                        setProducts(data);
                    },
                    (error) => {
                        console.error("Failed to fetch products:", error);
                        setProducts([]);  // 在错误发生时设置产品为一个空数组
                    });
            } catch (error) {
                console.error("Error handling in useEffect:", error);
            }
        }
        fetchProducts().then(r => console.log("Products fetched"));
    }, []);  // 空依赖数组表示这个 effect 仅在组件挂载时运行一次

    if (products === null) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="w-16 h-16 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div>
            <div className={"product-detail-container"}>
                {products.map((product) => (
                    <ProductDetail key={product.upload_date} product={product}/> // Corrected the props and variables
                ))}
            </div>
        </div>
    );
}

export default ProductDetailContainer;
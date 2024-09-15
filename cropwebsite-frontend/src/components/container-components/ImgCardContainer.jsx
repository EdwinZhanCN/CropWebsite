import React, { useEffect, useState } from 'react';
import ImgCard from '@/components/general-components/ImgCard';
import { get } from '@/net';
import image1 from '@/assets/1.jpg';
import image2 from '@/assets/2.jpg';
import image3 from '@/assets/3.jpg';
import image4 from '@/assets/4.jpeg';



/**
 * This component is an image box container that contains images and text
 * @param cid - the id of the image box
 * @returns {Element} - a div containing all the image boxes
 * @constructor
 */
function ImgCarContainer({ cid }) {
    //TODO: param cid

    // const [data, setData] = useState([]);

    //TODO: remove sample data
    const sampleData = [
        {
            id: 1,
            img: image1,
            alt: 'placeholder',
            title: 'placeholder',
            description: 'placeholder',
        },
        {
            id: 2,
            img: image2,
            alt: 'placeholder',
            title: 'placeholder',
            description: 'placeholder',
        },
        {
            id: 3,
            img: image3,
            alt: 'placeholder',
            title: 'placeholder',
            description: 'placeholder',
        },
        {
            id: 4,
            img: image4,
            alt: 'placeholder',
            title: 'placeholder',
            description: 'placeholder',
        }
    ];

    // useEffect(() => {
    //     // Fetch data from your database
    //     get(`/imgBox/${cid}`).then(response => {
    //         setData(response.data);
    //     });
    // }, [cid]);


    return (
        <div className="container-body">
            <div className="container">
                {sampleData.map((product) => (
                    <ImgCard key={product.id} product={product}/>
                ))}
            </div>
        </div>
    );
}

export default ImgCarContainer;
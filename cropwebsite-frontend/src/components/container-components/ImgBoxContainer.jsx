import React, { useEffect, useState } from 'react';
import ImgBox from '@/components/general-components/ImgBox';
import { get } from '@/net';
import image1 from '@/assets/microsoft.jpeg';


/**
 * This component is an image box container that contains images and text
 * @param bid - the id of the image box
 * @param type - the type of image box
 * @returns {Element} - a div containing all the image boxes
 * @constructor
 */
function ImgBoxContainer({ bid, type}) {
    //TODO: remove sample data
    const sampleData = [
        {
            id: 1,
            imgSrc: image1,
            imgAlt: 'placeholder',
            title: 'Microsoft',
            text: 'This is a sample description',
        },

    ]
    // const [data, setData] = useState([]);
    //
    // useEffect(() => {
    //     // Fetch data from your database
    //     get(`/imgBox/${bid}`).then(response => {
    //         setData(response.data);
    //     });
    // }, [bid]);

    return (
        <div>
            {sampleData.map(item => (
                <ImgBox key={item.id} info={item} type={type}/>
            ))}
        </div>
    );
}

export default ImgBoxContainer;
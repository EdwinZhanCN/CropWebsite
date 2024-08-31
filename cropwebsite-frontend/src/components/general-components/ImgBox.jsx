import React from 'react';
import '@/style/All-ImgBoxContainerCSS.css';


/**
 * This component is an image box container that contains an image and text
 * @param info - the information to be displayed in the image box
 * @param type - the type of image box
 * @param info.imgSrc - the source of the image
 * @param info.imgAlt - the alt text of the image
 * @param info.title - the title of the image box
 * @param info.text - the text of the image box
 * @returns {Element}
 */
function imgBox({info, type} ) {
    return (
        <div className={`imgbox-container ${type}`}>
            <div className={`imgbox-container ${type} content`}>
                <div>
                    <h1>{info.title}</h1>
                    <p>{info.text}</p>
                    <a>了解更多</a>
                </div>

            </div>
            <div className={`imgbox-container ${type} clip-path`} style={{
                backgroundImage: `url(${info.imgSrc})`,
                backgroundSize: 'cover',
            }}>
            </div>
        </div>
    )
}

export default imgBox;


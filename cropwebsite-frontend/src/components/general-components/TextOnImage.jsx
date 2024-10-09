import React from "react";

function TextOnImage({ text, imageSrc }) {
    return (
        <div
            style={{
                backgroundImage: `url(${imageSrc})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '40vh',
                maxHeight: '40vh',
                width: '100%',
                color: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                fontSize: '1.5rem',
            }}
        >
            <h1>{text}</h1>
        </div>
    );
}

export default TextOnImage;
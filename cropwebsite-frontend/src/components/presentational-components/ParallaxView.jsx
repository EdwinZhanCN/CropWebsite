import React from "react";

function ParallaxView({info}){
    return (
        <div id={info.id}>
            <div className="parallax-content">
                <h1>{info.subtitle}</h1>
                <p>{info.text}</p>
            </div>
            <div className="parallax" style={{
                backgroundImage: `url(${info.imgSrc})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
            }}>
                <h3>{info.title}</h3>
            </div>
        </div>

    )
}

export default ParallaxView;
import React from "react";

function GridPanel({info}) {
    return (
        <div className="grid-panel-img" style={{
            backgroundImage: `url(${info.imgSrc})`,
            backgroundSize: 'cover',
        }}>
            <a href={info.link}>
                <p>+了解更多</p>
            </a>
        </div>
    )
}

export default GridPanel;
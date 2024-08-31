import React from "react";
import GridPanel from "@/components/general-components/GridPanel";
import { get } from "@/net";
import { useState, useEffect } from "react";
import image1 from "@/assets/microsoft.jpeg";
import image2 from "@/assets/2.jpg";
import image3 from "@/assets/3.jpg";
import image4 from "@/assets/4.jpeg";
import "@/style/GridPanelCSS.css";

function GridPanelContainer({gid}){
    //TODO: Fetch data from backend
    const sampleData = [
        {
            id: 1,
            imgSrc: image1,
            imgAlt: 'placeholder',
        },
        {
            id: 2,
            imgSrc: image2,
            imgAlt: 'placeholder',
            link:'/'
        },
        {
            id: 3,
            imgSrc: image3,
            imgAlt: 'placeholder',
            link:'/'
        },
        {
            id: 4,
            imgSrc: image4,
            imgAlt: 'placeholder',
            link:'/'
        },
    ]

    return (
        <div className="grid-panel-wrapper">
            <div className="grid-panel-container">
                {sampleData.map(item => (
                    <GridPanel key={item.id} info={item}/>
                ))}
            </div>
        </div>
    )
}

export default GridPanelContainer;
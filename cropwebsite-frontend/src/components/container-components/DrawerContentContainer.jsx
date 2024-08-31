import React from "react";
import DrawerContent from "@/components/general-components/DrawerContent";
import { get } from "@/net";
import { useState, useEffect } from "react";
import image1 from "@/assets/microsoft.jpeg";
import image2 from "@/assets/2.jpg";
import image3 from "@/assets/3.jpg";
import image4 from "@/assets/4.jpeg";
import "@/style/DrawerCSS.css";

function DrawerContentContainer({did}){
    const sampleData = [
        {
            id: 1,
            imgSrc: image1,
            imgAlt: 'placeholder',
            title: 'Microsoft',
            text: 'This is a sample description',
        },
        {
            id: 2,
            imgSrc: image2,
            imgAlt: 'placeholder',
            title: 'Microsoft',
            text: 'This is a sample description',
        },
        {
            id: 3,
            imgSrc: image3,
            imgAlt: 'placeholder',
            title: 'Microsoft',
            text: 'This is a sample description',
        },
        {
            id: 4,
            imgSrc: image4,
            imgAlt: 'placeholder',
            title: 'Microsoft',
            text: 'This is a sample description',
        },
    ]

    return (
        <div className="drawer-wrapper">
            <div className="drawer-container">
                {sampleData.map(item => (
                    <DrawerContent key={item.id} info={item}/>
                ))}
            </div>
        </div>
    )
}

export default DrawerContentContainer;
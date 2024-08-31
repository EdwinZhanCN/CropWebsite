import React, { useState } from "react";



function DrawerContent({info}) {
    return (
        <>
            <input type="radio" name="slide" id={`drawer${info.id}`} checked/>
            <label htmlFor={`drawer${info.id}`} className="card" style={{
                backgroundImage: `url(${info.imgSrc})`
            }}>
                <div className="row">
                    <div className="description">
                        <h4>{info.title}</h4>
                        <p>{info.text}</p>
                    </div>
                </div>
            </label>
        </>

    )
}

export default DrawerContent;
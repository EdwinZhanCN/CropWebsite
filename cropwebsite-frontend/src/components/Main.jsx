import React from 'react';
import '@/style/MainCSS.css';
import Carousel from "@/components/general-components/SlickSlide";
import ImgBoxContainer from "@/components/container-components/ImgBoxContainer";
import DrawerContentContainer from "@/components/container-components/DrawerContentContainer";
import GridPanelContainer from "@/components/container-components/GridPanelContainer";
function Main() {
    return (
        <>
            <div  style={{
                    overflow: 'auto',
                }}>
                <Carousel />
                <ImgBoxContainer bid={1} type="B"/>
                <div className="star-product">
                    <h1>
                        明星产品
                    </h1>
                    <p>
                        产品描述
                    </p>
                    <DrawerContentContainer did={1}/>
                </div>
                <ImgBoxContainer bid={1} type="A"/>
                <GridPanelContainer gid={2}/>
            </div>
        </>
    );
}

export default Main;
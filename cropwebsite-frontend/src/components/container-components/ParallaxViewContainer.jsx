import React, { useEffect, useState } from 'react';
import ParallaxView from '@/components/presentational-components/ParallaxView';
import { get } from '@/net';
import '@/style/ParallaxViewCSS.css';
import image1 from '@/assets/work1.jpg';
import image2 from '@/assets/work2.png';
import image3 from '@/assets/work3.jpeg';
import image4 from '@/assets/work4.jpeg';

function ParallaxViewContainer({pid}) {
    //TODO: remove sample data
    const sampleData = [
        {
            id: 1,
            imgSrc: image1,
            imgAlt: 'placeholder',
            title: 'Microsoft',
            subtitle: 'Our Mission',
            text: 'This is a sample description',
        },
        {
            id: 2,
            imgSrc: image2,
            imgAlt: 'placeholder',
            title: 'Microsoft',
            subtitle: 'Our Mission',
            text: 'This is a sample description',
        },
        {
            id: 3,
            imgSrc: image3,
            imgAlt: 'placeholder',
            title: 'Microsoft',
            subtitle: 'Our Mission',
            text: 'This is a sample description',
        },
        {
            id: 4,
            imgSrc: image4,
            imgAlt: 'placeholder',
            title: 'Microsoft',
            subtitle: 'Our Mission',
            text: 'This is a sample description',
        },
    ];

    //map the ids for sections
    const sections = sampleData.map(item => item.id.toString());

    useEffect(() => {
        // Create a dot for each section
        const dotsContainer = document.getElementById('dots-container');
        const dots = Array.from(dotsContainer.getElementsByClassName('dot'));

        // Only add dots if they haven't been added before
        if (dots.length !== sections.length) {
            sections.forEach((sectionId) => {
                const dot = document.createElement('div');
                dot.classList.add('dot');
                dot.addEventListener('click', () => {
                    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
                });
                dotsContainer.appendChild(dot);
                console.log("add" + sectionId)
            });
        }

        // Track the current section
        const scrollListener = () => {
            let currentSection = null;
            sections.forEach((sectionId) => {
                const section = document.getElementById(sectionId);
                const sectionTop = section.getBoundingClientRect().top;
                if (sectionTop <= window.innerHeight / 2) currentSection = sectionId;
            });

            // Highlight the dot corresponding to the current section
            dots.forEach((dot, index) => {
                if (sections[index] === currentSection) dot.classList.add('active');
                else dot.classList.remove('active');
            });
        };

        window.addEventListener('scroll', scrollListener);

        // Cleanup function
        return () => {
            window.removeEventListener('scroll', scrollListener);
        };
    }, []);

    return (
        <>
            <div>
                {sampleData.map(item => (
                    <ParallaxView key={item.id} info={item}/>
                ))}
            </div>
            <div id="dots-container"></div>
        </>
    );
}

export default ParallaxViewContainer;
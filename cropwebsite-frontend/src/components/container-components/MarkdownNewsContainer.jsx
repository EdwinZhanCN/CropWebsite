import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import MarkdownNews from "@/components/presentational-components/MarkdownNews";
import "@/style/MarkdownNewsContainerCSS.css";
import TextOnImage from "@/components/general-components/TextOnImage";
import image1 from '@/assets/microsoft.jpeg';

function MarkdownNewsContainer() {
    const [markdownContent, setMarkdownContent] = useState('');
    const [selectedNews, setSelectedNews] = useState(null);

    useEffect(() => {
        fetch('/新闻文件.md')
            .then((response) => response.text())
            .then((text) => setMarkdownContent(text))
            .catch((error) => console.error('Error fetching markdown file:', error));
    }, []);

    const sampleData = [
        {
            id: 1,
            title: '这是一个新闻案例',
            date: '2021-08-01',
            short: '这是一个新闻案例的简短描述',
            content: markdownContent,
        },
        {
            id: 2,
            title: '这是一个新闻案例',
            date: '2021-08-01',
            short: '这是一个新闻案例的简短描述',
            content: markdownContent,
        },
        {
            id: 3,
            title: '这是一个新闻案例',
            date: '2021-08-01',
            short: '这是一个新闻案例的简短描述',
            content: markdownContent,
        },
        {
            id: 4,
            title: '这是一个新闻案例',
            date: '2021-08-01',
            short: '这是一个新闻案例的简短描述',
            content: markdownContent,
        },
        {
            id: 5,
            title: '这是一个新闻案例',
            date: '2021-08-01',
            short: '这是一个新闻案例的简短描述',
            content: markdownContent,
        }
    ];

    function renderMarkdownNews(news) {
        setSelectedNews(news);
    }

    return (
        <div className={"markdown-news-wrapper"}>
            {selectedNews ? <MarkdownNews news={selectedNews}/> :
                <div>
                    <TextOnImage text={"新闻动态"} imageSrc={image1}/>
                        {sampleData.map((item) => (
                            <div className={"markdown-news-nav"}
                                 onClick={() => renderMarkdownNews(item.content)}
                                 key={item.id}
                            >
                                <div className={"markdown-news-nav-content"}>
                                    <h1>{item.title}</h1>
                                    <h3>{item.date}</h3>
                                    <p>{item.short}</p>
                                </div>
                            </div>
                        ))}
                </div>

            }
        </div>
    );
}

export default MarkdownNewsContainer;
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import MarkdownNews from "@/components/presentational-components/MarkdownNews";
import "@/style/MarkdownNewsContainerCSS.css";
import TextOnImage from "@/components/general-components/TextOnImage";
import image1 from '@/assets/microsoft.jpeg';
import { get } from '@/net';

const baseUrl = import.meta.env.VITE_BACKEND_URL;

function MarkdownNewsContainer() {
    const [news, setNews] = useState([]);
    const [selectedNews, setSelectedNews] = useState(null);

    useEffect(() => {
        async function fetchNews() {
            try {
                // 使用自定义的 get 方法请求新闻数据
                await get(`${baseUrl}/api/static/news`, async (res) => {
                    console.log('News fetched:', res);

                    // 使用 Promise.all 读取每个 fileUrl 的内容
                    const formattedNews = await Promise.all(
                        res.map(async (item) => {
                            const fileContent = await get(item.fileUrl, (text) => text);
                            return {
                                id: item.id,
                                title: item.title,
                                date: new Date(item.date).toISOString().split('T')[0],
                                short: item.shortText,
                                content: fileContent, // 将文件内容作为文本
                            };
                        })
                    );

                    setNews(formattedNews);
                }, (error) => {
                    console.error('Failed to fetch News:', error);
                });
            } catch (error) {
                console.error('Error fetching News:', error);
            }
        }

        fetchNews().then(() => console.log('NewsDocs fetched'));
    }, []);


    // const sampleData = [
    //     {
    //         id: 1,
    //         title: '这是一个新闻案例',
    //         date: '2021-08-01',
    //         short: '这是一个新闻案例的简短描述',
    //         content: markdownContent,
    //     },
    // ];

    function renderMarkdownNews(newsContent) {
        setSelectedNews(newsContent);
    }

    return (
        <div className={"markdown-news-wrapper"}>
            {selectedNews ? <MarkdownNews news={selectedNews}/> :
                <div>
                    <TextOnImage text={"新闻动态"} imageSrc={image1}/>
                    {news.map((item) => (
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
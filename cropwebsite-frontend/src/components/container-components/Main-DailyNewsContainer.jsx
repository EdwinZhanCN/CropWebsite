import React, { useEffect, useState} from 'react';
import DailyNews from "@/components/presentational-components/Main-DailyNews";
import {get} from "@/net/index.js";

/**
 * This component is a container for the daily news
 * @param text - the text to search for news
 * @returns {Element} - a div containing all the news
 * @constructor
 */
function DailyNewsContainer({ text }) {
    //directly fetch the news from the api
    const [news, setNews] = useState([]);
    const [newsStatus, setNewsStatus] = useState("loading");

    //use the encoded text to fetch the news
    useEffect(() => {
        get("/api/static/news?text=${encodeURIComponent(text)}").then((response) => {
            setNews(response.data);
            setNewsStatus("succeeded");
        });
    },[text]);


    return (
        <div>
            news.map(item => (
                <DailyNews key={item.id} news={item} newsStatus={newsStatus} />
            ))
        </div>
    )
}
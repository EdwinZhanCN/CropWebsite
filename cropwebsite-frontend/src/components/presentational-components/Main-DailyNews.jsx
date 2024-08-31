//this component fetches news from the server and displays it
function MainDailyNews({ news, newsStatus }) {
    //display the news
    return (
        <div>
            {newsStatus === 'loading' && <div>Loading...</div>}
            {newsStatus === 'succeeded' &&
                news.map((newsItem) => (
                    <div key={newsItem.id}>
                        <h2>{newsItem.title}</h2>
                        <p>{newsItem.content}</p>
                    </div>
                ))}
            {newsStatus === 'failed' && <div>Error loading news.</div>}
        </div>
    );
}

export default MainDailyNews;
import React, { useEffect, useState } from 'react'

const News = () => {
  const [latestNews, setLatestNews] = useState(null);

  const newsImages = ["./news1.png", "./news2.png", "./news3.png", "./news4.png", "./news5.png", "./news6.png", "./news7.png"];

    useEffect(() => {

      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
          'X-RapidAPI-Host': 'nba-latest-news.p.rapidapi.com'
        }
      };
      
      fetch('https://nba-latest-news.p.rapidapi.com/articles?source=nba&limit=7', options)
        .then(response => response.json())
        .then(response => setLatestNews(response))
        .catch(err => console.error(err));
    },[])

  return (
    <>
    <div className="grid gap-2 lg:grid-cols-4 py-4 px-4">
    {latestNews ? latestNews.map((items, index) => (
                    <div className="w-full rounded-lg shadow-md lg:max-w-sm">
                         <img
                         className="object-cover w-full h-48"
                         src={newsImages[index]}
                     />
                        <div className="p-4">
                            <h4 className="text-xl font-semibold text-blue-500">
                                {items.title}
                            </h4>
                            <p className="mb-2 leading-normal">
                                {items.source.toUpperCase()}
                            </p>
                            <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                                <a href={items.url}>Read more</a>
                            </button>
                        </div>
                    </div>
              )) : <>
                    <div class="spinner-border animate-spin inline-block w-10 h-10 border-4 rounded-full" role="status">
                    <span class="visually-hidden">Loading...</span>
                    </div>
                  </>} 
          </div>
    </>
  )
}

export default News
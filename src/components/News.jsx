import React, { useEffect, useState } from 'react'

const News = () => {
  const [latestNews, setLatestNews] = useState([]);

  const newsImages = ["./news1.png", "./news2.png", "./news3.png", "./news4.png", "./news5.png", "./news6.png", "./news7.png"];


  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'c31c0f80f4mshbb6b108a22becd7p1ccc72jsn990e3c358a6d',
      'X-RapidAPI-Host': 'nba-latest-news.p.rapidapi.com'
    }
  };
  
  fetch('https://nba-latest-news.p.rapidapi.com/news/source/espn', options)
    .then(response => response.json())
    .then(data => setLatestNews(data))
    .catch(err => console.error(err));

    useEffect(() => {
      fetch()
    },[])

  return (
    <>
     <div className="grid gap-2 lg:grid-cols-4 py-4 px-4">
                {latestNews.map((items, index) => (
                    <div className="w-full rounded-lg shadow-md lg:max-w-sm">
                         <img
                         className="object-cover w-full h-48"
                         src={newsImages[index]}
                     />
                        <div className="p-4">
                            <h4 className="text-xl font-semibold text-blue-600">
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
              ))}
            </div>
    </>
  )
}

export default News
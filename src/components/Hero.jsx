import React, { useState, useEffect } from 'react'

const Hero = () => {
  const [news, setNews] = useState([]);
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'c31c0f80f4mshbb6b108a22becd7p1ccc72jsn990e3c358a6d',
      'X-RapidAPI-Host': 'nba-latest-news.p.rapidapi.com'
    }
  };
  
  fetch('https://nba-latest-news.p.rapidapi.com/news/player/lebron-james', options)
    .then(response => response.json())
    .then(data => setNews(data))
    .catch(err => console.error(err));

    useEffect(() => {
      fetch()
    }, [])


    return (
      <div>
            {news.map(new1 => (
              <>
                <h2>{new1.title}</h2>
                <a href={new1.url}>Learn More</a>
                <p>{new1.source}</p>
              </>
            ))}
      </div>
    )
  }

export default Hero
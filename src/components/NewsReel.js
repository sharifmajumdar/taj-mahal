// src/NewsReel.js
//import React, { useState, useEffect } from "react";

const NewsReel = () => {
  /*   const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Replace with your news API URL
    const url = "https://www.espncricinfo.com/";

    const fetchNews = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []); */

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-red-500 text-center">
        Ilmainen kuljetus 10 kilometrin säteellä (vähimmäiskulutus 20 euroa) |
        Aika: 15.00 - 21.00 | Soita: 045 140 2904!!!
      </h1>
      {/* <div className="flex flex-col space-y-4">
        {articles.map((article, index) => (
          <div key={index} className="p-4 border rounded shadow">
            <h2 className="text-xl font-semibold">{article.title}</h2>
            <p className="text-sm text-gray-600">{article.description}</p>
            <a
              href={article.url}
              className="text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more
            </a>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default NewsReel;

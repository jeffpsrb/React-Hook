import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NewsItem from "./NewsItem";

function NewsContainer() {
    const [searchTerm, setSearchTerm] = useState('');
    const [newsData, setNewsData] = useState([]);

    const apiKey = '997f0e41acf249f9ae502274124a1d09';

    useEffect(() => {
        if (searchTerm) {
            fetchNews();
        } else {
            setNewsData([]); // Reset newsData jika search term kosong
        }
    }, [searchTerm]);

    const fetchNews = async () => {
        try {
            const response = await fetch(
                `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${apiKey}`
            );
            const data = await response.json();

            if (data.articles.length > 0) {
                setNewsData(data.articles);
            } else {
                setNewsData([]);
            }
        } catch (error) {
            console.error('Error fetching news:', error);
        }
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div>
            <input
                type="text"
                className="form-control mb-4"
                placeholder="Cari berita..."
                value={searchTerm}
                onChange={handleSearchChange}
            />
            {newsData.map((article, index) => (
                <NewsItem key={index} article={article} />
            ))}
        </div>
    );
}

export default NewsContainer;

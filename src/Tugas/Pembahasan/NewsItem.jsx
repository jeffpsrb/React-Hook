import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function NewsItem({ article }) {
    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.description}</p>
                <a href={article.url} target="_blank" className="btn btn-primary" rel="noopener noreferrer">
                    Baca Selengkapnya
                </a>
            </div>
        </div>
    )
}

export default NewsItem;

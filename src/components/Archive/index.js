import React from 'react';

export default ({articles}) => {

    return (
        articles.map((article, i) => {
            return <article class="col-third">
                    <img src={article.image} alt=""/>
                    <div>
                    <h3>{article.title}</h3>
                    <p>{article.body}</p>
                    <button href={article.link}>Read More</button>
                    </div>
                </article>
        })
    )
}
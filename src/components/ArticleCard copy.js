import React from "react";



const ArticleCard = props => {
  const article = props.article;
  



  

    return(

    

      <div className="col s12 m6">
        <div className="card #4db6ac teal lighten-2">
          <div className="card-content white-text">
            <span className="card-title">{article.article_label}</span>
            <img src={`https://picsum.photos/300/200?random=${article.id}`}/>
          </div>
          <div className="card-action">
            
            <a className='deep-purple-text text-darken-4' href={article.url}>View Article</a>
            <button onClick={ _ => props.saveArticle(article)}>Save Article</button>
          </div>

        </div>

      </div>

    )

};

export default ArticleCard;

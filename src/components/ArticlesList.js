import React, {useState, useEffect}from "react";
import ArticleCard from "./ArticleCard";
import {axiosWithAuth} from '../utils/axiosWithAuth';


const ArticlesList = () => {
  const [articles, setArticles] = useState([])
  const [saved, setSaved] = useState([]);

  const deleteArticle = id => {
    e.preventDefault()
    axiosWithAuth().delete(`https://pintereach-backend.herokuapp.com/article/${id}`, newBoard)
        .then(r => 
          setArticles(articles.filter(item => item.id !== id))
          )
        .catch(err => console.log(err))
    }

    const saveArticle = article => {
      if (saved.filter(item => item.id = article.id)) {
        console.log("that article is already saved");
      } else {
      setSaved([...saved, article])
      localStorage.setItem("savedArticles", JSON.stringify(saved));
      }
    }




  useEffect(()=> {
    axiosWithAuth().get('https://pintereach-backend.herokuapp.com/articles')
    .then(response => {
      console.log(response.data)
      setArticles(response.data)
    })
    .catch(error => console.log(error))
  },[]);

  return(
    <div>
      <h1>Articles</h1>
      {articles.map(articles => 
      <ArticleCard 
        key={articles.id} 
        deleteArticle={deleteArticle} 
        saveArticle={saveArticle}
        article={articles} 

        />)}
    </div>
  )
}
export default ArticlesList;

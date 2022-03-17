import React,{useEffect} from 'react'
import {} from '../App'
import {useParams } from 'react-router-dom'

function NewsDetails(props) {
  const params = useParams();
  

  
  return (
    <>
    {props.data.map((news)=>{
      if(news.source.id === Number(params.id)){
     
        return (<div className='container my-5'>
        <div className="card col-10 mx-auto">
            <img src={ news.urlToImage === null || "" ? "news.jpg" : news.urlToImage} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{news.title}</h5>
              <p className="card-text">{news.description}</p>
              <a href={news.url} className="btn btn-primary" target="_blank">Read more</a>
            </div>
          </div>
     
        </div>);
        
      }
    })}

    
    </>
  )
}

export default NewsDetails
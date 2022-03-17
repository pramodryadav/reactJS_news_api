import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { googleIdContex } from '../App'




function NewsListing(props) {
  const { googleId } = useContext(googleIdContex);

  

  const selectFav = (news, isPresent) => {
    if (googleId === "") {
      alert("Please login");

    }
    else {
      if (!isPresent) {
        props.setFav([...props.fav, news]);
        localStorage.setItem("favlist_" + googleId, JSON.stringify([...props.fav, news]));
      }
      else {
        const arr = props.fav.filter((value) => news.source.id !== value.source.id)
        props.setFav(arr);
        localStorage.setItem("favlist_" + googleId, JSON.stringify(arr));
      }

    }



  }


  return (
    <>
      {props.data.length === 0 ? <div className="spinner-border text-success favEmpty" role="status">
        <span className="visually-hidden">Loading...</span>
      </div> : <div className="container my-3">
        <div className='row'>
          {
            props.data.filter((val) => {

              if (props.searchTerm === '') {
                return val
              }
              else if (val.title.toLowerCase().includes(props.searchTerm.toLowerCase())) {
                return val
              }

            }).map((news) => {
              const arr = props.fav.filter((value) => news.source.id === value.source.id);
            
              const isPresent = (arr.length > 0 && props.login) ? true : false;
              return (
                <div key={news.source.id} className="card col-md-6 col-lg-4 pt-3" >
                  <img src={news.urlToImage ? news.urlToImage : props.src} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <div className='d-flex justify-content-between'>
                      <div>
                        <h5 className="card-title">{news.title}</h5>
                      </div>
                      <div >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16" style={{ backgroundColor: isPresent ? props.favIconColor : "white" }}
                          onClick={() => selectFav(news, isPresent)}>
                          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                        </svg>
                      </div>
                    </div>
                    <p className="card-text">{news.description}</p>
                    <Link to={`/newsDetails/${news.source.id}`}><a href="#" className="btn btn-primary" >Read more</a>
                    </Link>
                  </div>
                </div>


              );
            })
          }
        </div>
      </div>}

    </>

  )
}

export default NewsListing
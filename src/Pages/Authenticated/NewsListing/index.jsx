import React from 'react'
import useFetchNews from './hooks/useFetchNews';


import { Grid } from '@mui/material';
import NewsCard from '../../../components/NewsCard';



function NewsListing() {

  const { filteredNews, handleClickReadMore,handleClickFav } = useFetchNews();


  return (
    <>
      {filteredNews?.length === 0 ?
        <div className="spinner-border text-success favEmpty" role="status">
          <span className="visually-hidden">Loading...</span>
        </div> :
        <Grid container sx={{ paddingTop: 12, paddingLeft: 10, paddingRight: 10 }} spacing={2}>
          {filteredNews.length>0 && filteredNews?.map((news) => {

            return <Grid item xs={12} lg={3} key={news.source?.id}>

              <NewsCard
                news={news}
                handleClickReadMore={handleClickReadMore}
                handleClickFav={handleClickFav}
              />

            </Grid>
          })
          }


        </Grid>
      }

    </>

  )
}

export default NewsListing
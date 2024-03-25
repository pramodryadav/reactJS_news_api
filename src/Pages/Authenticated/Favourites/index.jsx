import React from 'react'
import { Link } from 'react-router-dom'
import useFav from './hooks'
import NewsCard from '../../../components/NewsCard'
import { Grid } from '@mui/material'



function Favourites(props) {

    const { filteredNews, handleClickReadMore, handleClickFav } = useFav()

    return (
        <>
            {filteredNews?.length === 0 ?
                <p className='favEmpty'>You don't have any item on Favourite Page!</p> :
                <div className="container my-3">
                    <Grid container sx={{ paddingTop: 12, paddingLeft: 10, paddingRight: 10 }} spacing={2}>
                        {filteredNews?.map((news) => {

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
                </div>}

        </>
    )
}

export default Favourites
import { useContext, useEffect, useState } from "react";

import { userContext } from "../../../../context";

const useFav = () => {

    const { data, setData } = useContext(userContext);

    const [favList, setFavList] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const profileData = JSON.parse(localStorage.getItem("userData"));
    
    

    useEffect(() => {

        const newsList = JSON.parse(localStorage.getItem("newsList_" + profileData.email));

        let favlist = newsList.filter((eachNews)=>eachNews.fav)

        setFavList(favlist || []);

    }, [data]);

    console.log("favList,",favList);

    const handleClickReadMore = (news) => {
        window.open(news.url)
    }


    const onChangeSearch = (e) => {
        setSearchTerm(e.target.value)
    }

    const filteredNews = favList.filter((eachNews) => {
        if (searchTerm === '') {
            return eachNews
        }
        else if (eachNews.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return eachNews
        }
    })

    const handleClickFav = (news) => {

        let fav = news.fav ? false : true;

        const updatedNewsList = data.map((eachNews) => {

            if (news.source.id === eachNews.source.id) {
                return {
                    ...eachNews,
                    fav
                }
            }

            return eachNews
        });

        localStorage.setItem("newsList_" + profileData.email,
            JSON.stringify(updatedNewsList));
        setData(updatedNewsList)

    }

   

    return { filteredNews,handleClickReadMore,handleClickFav }
}

export default useFav
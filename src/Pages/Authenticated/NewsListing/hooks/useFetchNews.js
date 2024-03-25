import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Appconfig from "../../../../config";
import { userContext } from "../../../../context";


const useFetchNews = () => {

    const { data, setData } = useContext(userContext);
    const [searchTerm, setSearchTerm] = useState("");

    const profileData = JSON.parse(localStorage.getItem("userData"));
   

    useEffect(() => {

        axios.get(`${Appconfig.baseUrl}`).then(response => {

            let newsList = response.data.articles;

            let myNewsList = JSON.parse(localStorage.getItem("newsList_" + profileData?.email));

            let formattedNewsList = newsList.map((eachNews) => {

                let hasArticle = myNewsList?.length > 0 ?
                    myNewsList.find((eachArticle) => eachArticle.source.id === eachNews.source.id) :
                    null;
                if (hasArticle) {
                    return {
                        ...eachNews,
                        fav: hasArticle.fav
                    }
                }

                return {
                    ...eachNews,
                    fav: false
                }

            })

            setData(formattedNewsList);

        }

        ).catch(err => alert(err));

    }, [profileData?.email]);



    const handleClickReadMore = (news) => {
        window.open(news.url)
    }


    const onChangeSearch = (e) => {
        setSearchTerm(e.target.value)
    }

    const filteredNews = data.filter((eachNews) => {
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



    return { filteredNews, handleClickReadMore, handleClickFav }
}

export default useFetchNews
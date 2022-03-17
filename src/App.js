import './App.css';
import NewsListing from './Pages/NewsListing';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios'
import Contact from './Pages/Contact';
import Nav from './components/Nav';
import NewsDetails from './Pages/NewsDetails';
import Favourites from './Pages/Favourites';
import Appconfig from './config';

export const googleIdContex = createContext();

function App() {

  const [googleId, setGoogleId] = useState("");
  const [data, setData] = useState([]);
  const [fav, setFav] = useState([]);
  const [favIconColor, setFavIconColor] = useState("red");
  const [searchTerm, setSearchTerm] = useState("");
  const [login, setLogin] = useState(false);

  useEffect(() => {
    // let url = "http://localhost:3000/news.json";
    axios.get(`${Appconfig.baseUrl}`).then(response=>
      setData(response.data.articles)

    ).catch(err=> alert(err));

  }, []);

  useEffect(() => {
    const a = JSON.parse(localStorage.getItem("favlist_" + googleId));
    console.log(a);
    setFav(a || []);

  }, [googleId])






  return (
    <googleIdContex.Provider value={{ googleId, setGoogleId }}>
      <BrowserRouter>
        <Nav searchTerm={searchTerm} setSearchTerm={setSearchTerm} login={login} setLogin={setLogin} setGoogleId={setGoogleId} />
        <div className='container'>
          <Routes>
            <Route path="/" element={<NewsListing searchTerm={searchTerm} data={data} fav={fav} setFav={setFav} favIconColor={favIconColor} setFavIconColor={setFavIconColor} googleId={googleId} login={login} />} />
            <Route path="/newsDetails/:id" element={<NewsDetails data={data} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/fav" element={<Favourites fav={fav} favIconColor={favIconColor} setFavIconColor={setFavIconColor} setFav={setFav} searchTerm={searchTerm} googleId={googleId} login={login} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </googleIdContex.Provider>



  );

}

export default App;

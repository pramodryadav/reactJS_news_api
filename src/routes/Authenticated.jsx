import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NewsListing from '../Pages/Authenticated/NewsListing';
import Contact from '../Pages/Authenticated/Contact';
import Favourites from '../Pages/Authenticated/Favourites';

import ResponsiveAppBar from '../components/Appbar';

const Authenticated = () => {
    return (
        <>

            <ResponsiveAppBar />
            
                <Routes>
                    <Route path="/" element={<NewsListing />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/fav" element={<Favourites />} />
                </Routes>
           
        </>
    )
}

export default Authenticated
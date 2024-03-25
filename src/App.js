import './App.css';

import { BrowserRouter } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import Authenticated from './routes/Authenticated';
import NonAuthenticated from './routes/NonAuthenticated';
import { userContext } from './context';


function App() {

  const {isLoggedIn,setIsLoggedIn} = useContext(userContext)

const profileData = JSON.parse(localStorage.getItem("userData"));

useEffect(()=>{

  if(profileData){
    setIsLoggedIn(true)
  }else{
    setIsLoggedIn(false)
  }

},[profileData])


  return (


    <BrowserRouter>

      {isLoggedIn ? <Authenticated /> : <NonAuthenticated />}

    </BrowserRouter>

  );

}

export default App;

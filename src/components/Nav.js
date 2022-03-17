import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useContext } from 'react'
import { googleIdContex } from '../App'

function Nav(props) {
  const { setGoogleId } = useContext(googleIdContex);

  const logo = {
    width: "50px",
    borderRadius: "4px"
  }
  const clientId = "511416813718-7ratj21u3s60429augnj50pj78gpbpcc.apps.googleusercontent.com";

  const onLoginSuccess = (response) => {
  

    setGoogleId(response.tokenId);
    props.setLogin(true);
  }
  const onFailureSuccess = (response) => {
    alert("Login Failed", response);

  }
  const onLogout = (response) => {
    alert("You have been logged out successfully");
    props.setLogin(false);
    setGoogleId("");

  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div class="container-fluid">
        <a className="navbar-brand" href="#"><img src="daily_news.png" style={{ ...logo }} alt="" /></a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav align-self-center">
            <li className="nav-item align-self-center">
              <h3><Link className="nav-link active text-light "  to="/">Daily News</Link></h3>
            </li>
            <li className="nav-item align-self-center">
              <Link className="nav-link  text-light fs-5" to="/contact">Contact</Link>
            </li>
          </ul>
          <form className="d-flex mx-auto">
            <input className="form-control me-2" type="search" onChange={(e) => { props.setSearchTerm(e.target.value) }} placeholder="Search" aria-label="Search" />

          </form>
          <ul className="navbar-nav align-self-center mb-2 mb-lg-0">
            <li className="nav-item  align-self-center">
              <Link className="nav-link text-light fs-5"  to="/fav">Favourites</Link>
            </li>



          </ul>
          <ul className="navbar-nav align-self-center mb-2 mb-lg-0">
            {props.login ?

              <GoogleLogout
                className='mx-2 me-1'
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onLogout}
              >
              </GoogleLogout>
              :
              <GoogleLogin
                className='mx-2 me-1'
                clientId={clientId}
                buttonText="Login"
                onSuccess={onLoginSuccess}
                onFailure={onFailureSuccess}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
              />




            }
          </ul>









        </div>
      </div>
    </nav >
  )
}

export default Nav
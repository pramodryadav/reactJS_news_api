import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './index.css';
import App from './App';
import { ThemeProvider } from '@emotion/react';
import theme from "./theme"
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { UserContextProvider } from './context';

const clientID = process.env.REACT_APP_CLIENT_ID;

ReactDOM.render(
  <GoogleOAuthProvider clientId={clientID}>
    <React.StrictMode>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <UserContextProvider>
            <App />
          </UserContextProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </React.StrictMode>
  </GoogleOAuthProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


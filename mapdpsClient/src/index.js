import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // core css
import 'primeicons/primeicons.css';                                 // icons
import 'primeflex/primeflex.css';    

import Login from './Login';
import Home from './components/Home'
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
function RedirectPage(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <Home />;
  }
  return <Login />;
}
root.render(
  <React.StrictMode>
    <BrowserRouter>
  <Home></Home>
  </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import blog from './blog';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import menu from './menu';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
let allrouts =createBrowserRouter(
  [
    {
      Path:'/',
      Element:<App/>
    },
    {
      Path:'menu',
      element:<menu/>
    }
  ]
);
root.render(
  <React.StrictMode>
    <RouterProvider router={allrouts}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

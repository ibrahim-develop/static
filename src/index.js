import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Blog from './Blog';
import Home from './Home';
import Menu from './menu';


const root = ReactDOM.createRoot(document.getElementById('root'));
let allroute =createBrowserRouter(
  [
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/Blog',
      element:<Blog/>
    },
    {
      path:'/app',
      element: <App/>
    }  ,
      {
      path:'/menu',
      element: <Menu/>
    }
  ]
)
root.render(
  <React.StrictMode>
    <RouterProvider router={allroute}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

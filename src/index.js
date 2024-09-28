import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Home from "./routes/Home"
import About from "./routes/About"
import Profile from "./routes/Profile"

import { Error } from './routes/Error';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter ([

  {
    path: '/',
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/profile',
    element: <Profile />
  }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


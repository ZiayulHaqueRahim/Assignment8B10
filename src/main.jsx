import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layout/MainLayout.jsx';
import Dashboard from './Layout/Dashboard.jsx';
import Statistics from './Layout/Statistics.jsx';
import Error from './components/Error.jsx';
import Home from './Layout/Home.jsx';

import Shop from './components/Shop.jsx';
import All from './components/All Products.jsx';
import Laptop from './components/Laptop.jsx';
import Phones from './components/Phones.jsx';
import Accesories from './components/Accesories.jsx';
import SmartWatch from './components/SmartWatch.jsx';
import Macbook from './components/Macbook.jsx';
import Iphone from './components/Iphone.jsx';
import Cart from './components/Cart.jsx';
import Wishlist from './components/Wishlist.jsx';









const router = createBrowserRouter([


  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      
      {
        path: '/shop',
        element: <Shop />
      },
      {
        path: '/all',
        element: <All />
      },
      {
        path: '/laptop',
        element: <Laptop />
      },
      {
        path: '/phone',
        element: <Phones/>
      },
      {
        path: '/accesory',
        element: <Accesories />
      },
      {
        path: '/watch',
        element:  <SmartWatch />
      },
      {
        path: '/mac',
        element: <Macbook />
      },
      {
        path: '/iphone',
        element: <Iphone />
      }
      // {
      //   path: 'books/:bookId',
      //   loader:() => fetch('/booksData.json'),
      //   element: <BookDetails />
      // },
    ],
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    errorElement: <Error />,
    children: [
          
          {
            path: 'dashboard/cart',
            element: <Cart />
          },
          {
            path: 'dashboard/wishlist',
            element: <Wishlist />
          },
    ],
  },
  {
    path: '/statistics',
    element: <Statistics />
  },

]);







createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)

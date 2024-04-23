import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { About , Blog , Contact , Services } from './pages';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/About",
    element: <About />,
  },

  {
    path: "/Blog",
    element: <Blog />,
  },

  {
    path: "/Services",
    element: <Services />,
  },

  {
    path: "/Contact",
    element: <Contact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CatalogMain from './CatalogMain';
import "./App.css"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PhoneCard from './PhoneCard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/CatalogMain",
    element: <CatalogMain />,
  },
  {
    path: "/PhoneCard",
    element: <PhoneCard />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>
);

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'

import App from './App.jsx'
import Another from './Another.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },  {
    path: "/Another",
    element: <Another />,
  }
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

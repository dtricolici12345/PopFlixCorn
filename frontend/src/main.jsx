import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";

import AboutUs from "./pages/AboutUs";
import People from "./pages/People";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/people/:id",
        element: <People />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

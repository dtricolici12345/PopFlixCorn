import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import FocusFilmActeur from "./pages/FocusFilmActeur";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/FocusFilmActeur",
    element: <FocusFilmActeur />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

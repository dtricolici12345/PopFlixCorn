import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Filter from "./pages/Filter";
import FilterGallery from "./pages/FilterGallery";
import FocusFilmActeur from "./pages/FocusFilmActeur";
import Home from "./pages/Home";
import Gallery from "./components/Gallery";
import Focus from "./pages/Focus";
import Shop from "./pages/Shop";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/filter",
        element: <Filter />,
      },
      {
        path: "/filter/gallery/:filmType/:selectedGenres",
        element: <FilterGallery />,
      },
      {
        path: "/checklist",
        element: <App />,
      },
      {
        path: "/game",
        element: <App />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/aboutus",
        element: <App />,
      },
      {
        path: "/gallery/:query",
        element: <Gallery />,
      },
      {
        path: "/focus/:mediaType/:id",
        element: <Focus />,
      },
      {
        path: "/acteur/:acteurId",
        element: <FocusFilmActeur />,
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

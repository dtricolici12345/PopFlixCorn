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
import GameHello from "./pages/Game/GameHello";
import GameRomantique from "./pages/Game/Categories/GameRomantique";
import GameHorreur from "./pages/Game/Categories/GameHorreur";
import GameAnime from "./pages/Game/Categories/GameAnime";
import GameSerie from "./pages/Game/Categories/GameSerie";
import AboutUs from "./pages/AboutUs";
// import People from "./pages/People.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/about",
        element: <AboutUs />,
      },
      // {
      //   path: "/people/:id",
      //   element: <People />,
      // },
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
        element: <GameHello />,
      },
      {
        path: "/game/romantique",
        element: <GameRomantique />,
      },
      {
        path: "/game/horreur",
        element: <GameHorreur />,
      },
      {
        path: "/game/anime",
        element: <GameAnime />,
      },
      {
        path: "/game/seria",
        element: <GameSerie />,
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

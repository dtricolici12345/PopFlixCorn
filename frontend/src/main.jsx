import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import FocusFilmActeur from "./pages/FocusFilmActeur";
// import Loading from "./components/Loading";
import Home from "./pages/Home";
import Focus from "./pages/Focus";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
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
        path: "/shope",
        element: <App />,
      },
      {
        path: "/aboutus",
        element: <App />,
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

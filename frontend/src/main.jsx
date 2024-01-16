import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import FocusFilmActeur from "./pages/FocusFilmActeur";
// import Loading from "./components/Loading";
import Home from "./pages/Home";

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
    ],
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

import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./style/Main.scss";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/Home";
import Logement from "./pages/Logement";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    }, 
    {
        path: "/logement/:id",
        element: <Logement />,
    }
  ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

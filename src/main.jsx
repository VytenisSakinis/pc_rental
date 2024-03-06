import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegistrationWindow from "./Registration/register";




const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Pagrindinis puslapis</div>,
  },
  {
    path: "/register",
    element: <RegistrationWindow></RegistrationWindow>
  },
  {
    path: "/login",
    element: <div>Prisijungimas</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

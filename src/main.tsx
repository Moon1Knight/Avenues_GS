import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import AvenuesEducation from "./components/AvenuesEducation";
import AvenuesSchooling from "./components/AvenuesSchooling";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/avenues-education",
    element: <AvenuesEducation />
  },
  {
    path: "/avenues-schooling",
    element: <AvenuesSchooling />
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

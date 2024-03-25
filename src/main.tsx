import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Bin2Dec from "./pages/bin2dec";
import BorderRadiusPreviewer from "./pages/border-radius-previewer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "bin2dec",
    element: <Bin2Dec />,
  },
  {
    path: "border-radius-previewer",
    element: <BorderRadiusPreviewer />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

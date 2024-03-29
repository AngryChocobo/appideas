import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Bin2Dec from "./pages/bin2dec";
import Calculator from "./pages/calculator";
import ChristmasLights from "./pages/christmas-lights";
import CauseEffectApp from "./pages/cause-effect-app";
import CountdownTimer from "./pages/countdown-timer";
import JSON2CSV from "./pages/json2csv";
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
  {
    path: "calculator",
    element: <Calculator />,
  },
  {
    path: "christmas-lights",
    element: <ChristmasLights />,
  },
  {
    path: "cause-effect-app",
    element: <CauseEffectApp />,
  },
  {
    path: "countdown-timer",
    element: <CountdownTimer />,
  },
  {
    path: "json2csv",
    element: <JSON2CSV />,
  },
  {
    path: "csv2json",
    element: <JSON2CSV />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

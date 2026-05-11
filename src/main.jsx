import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import FirstQuiz from "./pages/Quiz1Page.jsx";
import Quiz2Page from "./pages/Quiz2Page.jsx";
import Quiz3Page from "./pages/Quiz3Page.jsx";
import Quiz4Page from "./pages/Quiz4Page.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/quiz1", element: <FirstQuiz /> },
  { path: "/quiz2", element: <Quiz2Page /> },
  { path: "/quiz3", element: <Quiz3Page /> },
  { path: "/quiz4", element: <Quiz4Page /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

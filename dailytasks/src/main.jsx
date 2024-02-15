import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import AllTasks from "./components/AllTasks.jsx";
import Calander from "./components/Calander.jsx";
import ErrorPage from "./components/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // { index: true, element: <AllTasks /> },
      { path: "calendar", element: <Calander /> },
    ],
    // TODO -- Create errorElement to handle bad urls
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

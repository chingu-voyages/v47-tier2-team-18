import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import AllTasks from "./components/AllTasks.jsx";
import Calendar from "./components/Calendar/Calendar.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import AllTasks from "./components/AllTasks.jsx"
import TaskForm from "./components/TaskForm/TaskForm.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <AllTasks /> },
      { path: "calendar", element: <Calendar /> },
      { path: "tasks" , element: <AllTasks />}
      { path: "add-task", element: <TaskForm /> },
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


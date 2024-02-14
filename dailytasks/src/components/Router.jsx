import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import AllTasks from "./AllTasks";
import Calander from "./Calander";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <AllTasks /> },
        { path: "/calendar", element: <Calander /> },
      ],
      // ADD errorElement here
    },
  ]);

  return <RouterProvider router={router} />;
};
export default Router;

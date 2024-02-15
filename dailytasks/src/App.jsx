import Sidebar from "./components/SideBar";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};

export default App;

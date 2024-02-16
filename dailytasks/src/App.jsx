import Sidebar from "./components/SideBar";
import { Outlet } from "react-router-dom";
import GlobalStyle from "./components/styles/globalStyles";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Sidebar />
      <Outlet />
    </>
  );
};

export default App;

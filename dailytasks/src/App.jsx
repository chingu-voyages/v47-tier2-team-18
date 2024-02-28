import Sidebar from "./components/SideBar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import GlobalStyle from "./components/styles/GlobalStyles";
import {
  AppWrapper,
  ContentWrapper,
  FooterWrapper,
  HeaderWrapper,
  NavigationWrapper,
} from "./components/styles/App.styled";
import AddTaskLink from "./components/AddTaskLink";
import { TaskContext } from "./data/TaskContext";
import { useState } from "react";
import Data from "./data/tasks-example.json";

const App = () => {
  const [data, setData] = useState(Data);

  return (
    <TaskContext.Provider value={[data, setData]}>
      {/* Apply global styles to all components in the app */}
      <GlobalStyle />
      <AppWrapper>
        <HeaderWrapper>
          {/* TODO -- replace with actual header component */}
          <div>Temp Header</div>
        </HeaderWrapper>
        <NavigationWrapper>
          <Sidebar />
        </NavigationWrapper>
        <ContentWrapper>
          <Outlet />
        </ContentWrapper>
        {/* TODO -- replace with actual footer component */}
        <FooterWrapper>
          <Footer />
        </FooterWrapper>
        <AddTaskLink />
      </AppWrapper>
    </TaskContext.Provider>
  );
};

export default App;

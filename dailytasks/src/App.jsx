import Sidebar from "./components/SideBar";
import { Outlet } from "react-router-dom";
import GlobalStyle from "./components/styles/globalStyles";
import {
  AppWrapper,
  ContentWrapper,
  FooterWrapper,
  HeaderWrapper,
  NavigationWrapper,
} from "./components/styles/App.styled";

const App = () => {
  return (
    <>
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
          <div>Temp Footer</div>
        </FooterWrapper>
      </AppWrapper>
    </>
  );
};

export default App;


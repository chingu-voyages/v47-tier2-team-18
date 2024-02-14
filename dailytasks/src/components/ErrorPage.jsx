import { Link } from "react-router-dom";
import { CenterWrapper, ErrorHeading } from "./styles/ErrorPage.styled";

const ErrorPage = () => {
  return (
    <CenterWrapper>
      <ErrorHeading>Error 404</ErrorHeading>
      <p>
        Sorry, the page you are looking for does not exist. Please go back to
        the <Link to="/">home page</Link>.
      </p>
    </CenterWrapper>
  );
};
export default ErrorPage;

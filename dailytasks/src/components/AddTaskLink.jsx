import { Link } from "react-router-dom";
import { TaskLink } from "../components/styles/AddTaskLink.styled";

const AddTaskLink = () => {
  return (
    <TaskLink>
      <Link to="add-task">
        <button>+</button>
      </Link>
    </TaskLink>
  );
};
export default AddTaskLink;

import { useContext, useState } from "react";
import Data from "../../data/tasks-example.json";
import DaysWeekCheckBox from "./DaysWeekCheckBox";
import DaysMonthInput from "./DaysMonthInput";
import { useNavigate } from "react-router-dom";
import {
  FlexColumn,
  Invalid,
  FlexRow,
  TaskFormWrapper,
  TaskInput,
  TaskTextArea,
  AddTaskButton,
  TaskAdded,
} from "../styles/TaskForm.styled";
import { TaskContext } from "../../data/TaskContext";

const TaskForm = () => {
  const navigate = useNavigate();

  // Create the necessary states
  const [taskArray, setTaskArray] = useContext(TaskContext);
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDays, setTaskDays] = useState([]);
  const [taskAdded, setTaskAdded] = useState(false);

  // Invalid states
  const [invalidTaskName, setInvalidTaskName] = useState(false);
  const [invalidTaskDescription, setInvalidTaskDescription] = useState(false);
  const [invalidTaskDays, setInvalidTaskDays] = useState(false);

  // Deals with the days portion of the form
  const [frequencyToggle, setFrequencyToggle] = useState(true);
  const handleFrequencyToggle = (event) => {
    setFrequencyToggle(event.target.value === "day-week" ? true : false);
    setTaskDays([]);
  };

  const addDays = (event) => {
    // Runs when box is checked
    if (event.target.checked) {
      // Prevent from adding the same day multiple times
      if (taskDays.includes(event.target.value)) {
        return;
      }
      setTaskDays([...taskDays, event.target.value]);
      return;
    }

    // Runs when box is unchecked
    setTaskDays(taskDays.filter((day) => day !== event.target.value));
  };

  const isInvalid = () => {
    if (taskName === "") {
      setInvalidTaskName(true);
    } else {
      setInvalidTaskName(false);
    }

    if (taskDescription === "") {
      setInvalidTaskDescription(true);
    } else {
      setInvalidTaskDescription(false);
    }

    if (taskDays.length < 1) {
      setInvalidTaskDays(true);
    } else {
      setInvalidTaskDays(false);
    }

    if (taskName === "" || taskDescription === "" || taskDays.length < 1)
      return true;

    return false;
  };

  const addTask = (event) => {
    event.preventDefault();

    if (isInvalid()) return;

    setTaskArray([
      ...taskArray,
      { taskName: taskName, taskDescription: taskDescription, days: taskDays },
    ]);

    setTaskAdded(true);

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <>
      {taskAdded ? (
        <TaskAdded>Task Added</TaskAdded>
      ) : (
        <TaskFormWrapper>
          <form action="">
            <FlexColumn>
              <FlexRow $justifyContent={"space-between"}>
                <label htmlFor="task-name">Task Name</label>
                {invalidTaskName && (
                  <Invalid>Task name must not be empty</Invalid>
                )}
              </FlexRow>
              <TaskInput
                type="text"
                name="task-name"
                id="task-name"
                value={taskName}
                onChange={(event) => setTaskName(event.target.value)}
                required
              />
            </FlexColumn>
            <FlexColumn>
              <FlexRow $justifyContent={"space-between"}>
                <label htmlFor="description">Description</label>
                {invalidTaskDescription && (
                  <Invalid>Task description must not be empty</Invalid>
                )}
              </FlexRow>
              <TaskTextArea
                name="description"
                id="description"
                value={taskDescription}
                onChange={(event) => setTaskDescription(event.target.value)}
              />
            </FlexColumn>

            <FlexRow $marginBottom={"0.5rem"}>
              <div>
                <input
                  type="radio"
                  name="frequency"
                  id="day-week"
                  value="day-week"
                  onChange={handleFrequencyToggle}
                  checked={frequencyToggle}
                />
                <label htmlFor="day-week">Weekly</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="frequency"
                  id="day-month"
                  value="day-month"
                  onChange={handleFrequencyToggle}
                />
                <label htmlFor="day-month">Monthly</label>
              </div>
            </FlexRow>

            {invalidTaskDays && <Invalid>Must select a day</Invalid>}
            {frequencyToggle ? (
              <DaysWeekCheckBox onChange={addDays} />
            ) : (
              <DaysMonthInput updateDaysArray={setTaskDays} />
            )}
            <AddTaskButton onClick={addTask}>Add</AddTaskButton>
          </form>
        </TaskFormWrapper>
      )}
    </>
  );
};
export default TaskForm;

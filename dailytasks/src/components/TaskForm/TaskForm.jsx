import { useState } from "react";
import Data from "../../data/tasks-example.json";
import DaysWeekCheckBox from "./DaysWeekCheckBox";
import DaysMonthInput from "./DaysMonthInput";
import { useNavigate } from "react-router-dom";

const TaskForm = () => {
  const navigate = useNavigate();

  // Create the necessary states
  const [taskArray, setTaskArray] = useState(Data);
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDays, setTaskDays] = useState([]);

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

  // Need to implement
  const checkValid = () => {
    // Stuff in here
  };
  const addTask = (event) => {
    event.preventDefault();

    //Check for empty inputs
    if (taskName === "" || taskDescription === "" || taskDays.length < 1) {
      return;
    }

    setTaskArray([
      ...taskArray,
      { taskName: taskName, taskDescription: taskDescription, days: taskDays },
    ]);

    navigate("/");
  };

  return (
    <form action="">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="task-name">Task Name</label>
        <input
          type="text"
          name="task-name"
          id="task-name"
          value={taskName}
          onChange={(event) => setTaskName(event.target.value)}
          required
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          value={taskDescription}
          onChange={(event) => setTaskDescription(event.target.value)}
        />
      </div>

      <div>
        <input
          type="radio"
          name="frequency"
          id="day-week"
          value="day-week"
          onChange={handleFrequencyToggle}
          checked={frequencyToggle}
        />
        <label htmlFor="day-week">Day of the Week</label>
      </div>

      <div>
        <input
          type="radio"
          name="frequency"
          id="day-month"
          value="day-month"
          onChange={handleFrequencyToggle}
        />
        <label htmlFor="day-month">Day of the Month</label>
      </div>

      {frequencyToggle ? (
        <DaysWeekCheckBox onChange={addDays} />
      ) : (
        <DaysMonthInput updateDaysArray={setTaskDays} />
      )}

      <button onClick={addTask}>Add</button>
    </form>
  );
};
export default TaskForm;

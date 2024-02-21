import { useState } from "react";
import {
  FlexColumn,
  FlexRow,
  Invalid,
  TaskInput,
} from "../styles/TaskForm.styled";

const DaysMonthInput = ({ updateDaysArray }) => {
  const [day, setDay] = useState("");
  const [greaterThan, setGreaterThan] = useState(false);
  const [lessThan, setLessThan] = useState(false);

  const addDays = (event) => {
    if (Number(event.target.value > 31)) {
      setGreaterThan(true);
      return;
    }

    if (Number(event.target.value < 1)) {
      setDay("");
      setLessThan(true);
      setGreaterThan(false);
      return;
    }

    setLessThan(false);
    setGreaterThan(false);
    setDay(event.target.value);
    updateDaysArray([event.target.value]);
  };

  return (
    <FlexColumn>
      <FlexRow justifyContent={"space-between"}>
        <label htmlFor="day-month">Day of the Month</label>
        {greaterThan && <Invalid>Cannot be Greater than 31</Invalid>}
        {lessThan && <Invalid>Cannot be less than 1</Invalid>}
      </FlexRow>
      <TaskInput type="number" max={31} value={day} onChange={addDays} />
    </FlexColumn>
  );
};
export default DaysMonthInput;

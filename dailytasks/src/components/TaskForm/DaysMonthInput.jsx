import { useState } from "react";

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
    <>
      <label htmlFor="day-month">Day of the Month</label>
      {greaterThan ? <div>Cannot be Greater than 31</div> : null}
      {lessThan ? <div>Cannot be less than 1</div> : null}
      <input type="number" max={31} value={day} onChange={addDays} />
    </>
  );
};
export default DaysMonthInput;

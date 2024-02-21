const DaysWeekCheckBox = ({ onChange }) => {
  return (
    <>
      <div>
        <input
          type="checkbox"
          id="monday"
          value="monday"
          name="frequency"
          onChange={onChange}
        />
        <label htmlFor="monday">Monday</label>
      </div>

      <div>
        <input
          type="checkbox"
          id="tuesday"
          value="tuesday"
          name="frequency"
          onChange={onChange}
        />
        <label htmlFor="tuesday">Tuesday</label>
      </div>

      <div>
        <input
          type="checkbox"
          id="wednesday"
          value="wednesday"
          name="frequency"
          onChange={onChange}
        />
        <label htmlFor="wednesday">Wednesday</label>
      </div>

      <div>
        <input
          type="checkbox"
          id="thursday"
          value="thursday"
          name="frequency"
          onChange={onChange}
        />
        <label htmlFor="thursday">Thursday</label>
      </div>

      <div>
        <input
          type="checkbox"
          id="friday"
          value="friday"
          name="frequency"
          onChange={onChange}
        />
        <label htmlFor="friday">Friday</label>
      </div>

      <div>
        <input
          type="checkbox"
          id="saturday"
          value="saturday"
          name="frequency"
          onChange={onChange}
        />
        <label htmlFor="saturday">Saturday</label>
      </div>

      <div>
        <input
          type="checkbox"
          id="sunday"
          value="sunday"
          name="frequency"
          onChange={onChange}
        />
        <label htmlFor="sunday">Sunday</label>
      </div>
    </>
  );
};
export default DaysWeekCheckBox;

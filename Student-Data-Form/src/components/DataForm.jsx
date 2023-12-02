import "./DataForm.css";

const DataForm = () => {
  return (
    <form>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>First Name</label>
          <input type="text"></input>
        </div>
        <div className="new-cost__control">
          <label>Last Name</label>
          <input type="text"></input>
        </div>
        <div className="new-cost__control">
          <label>Email</label>
          <input type="text"></input>
        </div>
      </div>
    </form>
  );
};

export default DataForm;

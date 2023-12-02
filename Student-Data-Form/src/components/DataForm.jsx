import "./DataForm.css";
import { useState } from "react";

const DataForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const firstNameHandler = (event) => {
    setFirstName(event.target.value);
  };

  const lastNameHandler = (event) => {
    setLastName(event.target.value);
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const studentData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
    };

    console.log(studentData);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div>
        <div>
          <label>First Name</label>
          <input type="text" onChange={firstNameHandler}></input>
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" onChange={lastNameHandler}></input>
        </div>
        <div>
          <label>Email</label>
          <input type="text" onChange={emailHandler}></input>
        </div>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default DataForm;

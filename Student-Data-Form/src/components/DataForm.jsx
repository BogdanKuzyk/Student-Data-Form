import "./DataForm.css";
import { useState } from "react";

const DataForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateForm = () => {
    let isValid = true;

    if (firstName.length < 3) {
      setFirstNameError("Invalid name");
      isValid = false;
    } else {
      setFirstNameError("");
    }

    if (lastName.length < 3) {
      setLastNameError("Invalid last name");
      isValid = false;
    } else {
      setLastNameError("");
    }

    if (!email.includes("@")) {
      setEmailError("Invalid email address");
      isValid = false;
    } else {
      setEmailError("");
    }

    return isValid;
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      const studentData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
      };

      props.onaddStudent(studentData);

      setFirstName("");
      setLastName("");
      setEmail("");
      setSubmitted(false);
    } else {
      setSubmitted(true);
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div>
        <div>
          <label>First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          ></input>
          {submitted && firstNameError && <p>{firstNameError}</p>}
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          ></input>
          {submitted && lastNameError && <p>{lastNameError}</p>}
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          {submitted && emailError && <p>{emailError}</p>}
        </div>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default DataForm;

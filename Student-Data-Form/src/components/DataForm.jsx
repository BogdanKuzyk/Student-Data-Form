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
      <div className="form__controls">
        <div className="form__controls__control">
          <label className="first-name-label">First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          ></input>
          {submitted && firstNameError && (
            <p className="error-message">{firstNameError}</p>
          )}
          {!firstNameError && <div className="error-placeholder" />}
        </div>
        <div className="form__controls__control">
          <label className="last-name-label">Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          ></input>
          {submitted && lastNameError && (
            <p className="error-message">{lastNameError}</p>
          )}
          {!lastNameError && <div className="error-placeholder" />}
        </div>
        <div className="form__controls__control">
          <label className="email-label">Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          {submitted && emailError && (
            <p className="error-message">{emailError}</p>
          )}
          {!emailError && <div className="error-placeholder" />}
        </div>
        <div className="form__controls__control">
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
};

export default DataForm;

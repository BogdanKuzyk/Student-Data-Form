const Student = (props) => {
  return (
    <ul className="student">
      <li>First Name: {props.firstName}</li>
      <li>Last Name: {props.lastName}</li>
      <li>Email: {props.email}</li>
    </ul>
  );
};

export default Student;

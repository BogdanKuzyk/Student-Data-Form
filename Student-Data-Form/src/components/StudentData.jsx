const StudentData = (props) => {
  return (
    <div>
      <p>First name: {props.newStudent ? props.newStudent.firstName : ""}</p>
      <p>Last name: {props.newStudent ? props.newStudent.lastName : ""}</p>
      <p>Email: {props.newStudent ? props.newStudent.email : ""}</p>
    </div>
  );
};
// <>
//   {props.newStudent.map((student) => (
//     <Student
//       key={student.id}
//       firstName={student.firstName}
//       lastName={student.lastName}
//       email={student.email}
//     />
//   ))}
// </>

export default StudentData;

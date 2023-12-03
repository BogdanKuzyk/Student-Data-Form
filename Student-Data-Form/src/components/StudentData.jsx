// import Student from "./Student";

const StudentData = (props) => {
  return (
    <div>
      <p>First name: {props.newStudent.firstName}</p>
      <p>Last name: {props.newStudent.lastName}</p>
      <p>Email: {props.newStudent.email}</p>
    </div>
  );
};

//Solution to display dinamicaly each user
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

import Student from "./Student";

const StudentData = (props) => {
  return (
    <>
      {props.newStudent.map((student) => (
        <Student
          key={student.id}
          firstName={student.firstName}
          lastName={student.lastName}
          email={student.email}
        />
      ))}
    </>
  );
};

export default StudentData;

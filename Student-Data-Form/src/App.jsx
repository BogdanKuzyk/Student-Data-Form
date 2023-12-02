import "./App.css";
import DataForm from "./components/DataForm";
import StudentData from "./components/StudentData";

function App() {
  const newStudent = [];

  const addStudenthandler = (student) => {
    const studentData = {
      ...student,
      id: 1,
    };

    console.log(studentData);
  };

  return (
    <div>
      <DataForm onaddStudent={addStudenthandler} />
      <StudentData addStudent={newStudent} />
    </div>
  );
}

export default App;

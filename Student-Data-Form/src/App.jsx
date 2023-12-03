import "./App.css";
import DataForm from "./components/DataForm";
import StudentData from "./components/StudentData";
import { useState } from "react";

const NEW_STUDENT = [];

function App() {
  const [students, setStudents] = useState(NEW_STUDENT);

  const addStudenthandler = (student) => {
    setStudents([student]);
  };

  return (
    <div className="content-wrapper">
      <DataForm onaddStudent={addStudenthandler} />
      <StudentData newStudent={students[0]} />
    </div>
  );
}

export default App;

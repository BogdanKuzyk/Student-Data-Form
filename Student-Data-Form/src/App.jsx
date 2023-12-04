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
    <div>
      <div className="heading">
        <h1>Student data form</h1>
      </div>
      <div className="content-wrapper">
        <DataForm onaddStudent={addStudenthandler} />
        <StudentData newStudent={students[0]} />
      </div>
    </div>
  );
}

export default App;

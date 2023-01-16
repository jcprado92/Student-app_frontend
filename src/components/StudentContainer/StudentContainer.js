import "./StudentContainer.scss";
import React, { useState, useEffect} from "react";
import StudentCard from '../StudentCard/StudentCard'
const API = `http://localhost:1236`

function StudentContainer() {
  const [students, setStudents] = useState([]);

  // fetch all student data
  useEffect(() => {
    fetch(`${API}/students`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setStudents(data.data);
      });
  }, []);

  return (
    <div className="studentContainer">
      {students.map((student) => {
        return <StudentCard student={student} key={student.id} />;
      })}
    </div>
  );
}

export default StudentContainer;

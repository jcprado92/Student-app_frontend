import React, {useEffect, useState} from "react";
import './StudentCardList.css';
import StudentCard from '../StudentCard/StudentCard'

const API = 'http://localhost:1236'

const StudentCardList = () => {
    const [students, setStudents] = useState([]);

    // fetch all student data
    useEffect(() => {

        fetch(`${API}/students`)
        .then(res => res.json())
        .then(data => {
          console.log(data)
            setStudents(data.data);
        })
    }, [])

    return (
        <div className="studentCardList">
          {students.map(student => {
            return (<StudentCard student={student} key={student.id} />)
          })}
        </div>
    )
}

export default StudentCardList;
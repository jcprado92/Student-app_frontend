import './StudentCard.css'

import React from 'react'

function StudentCard({ student }) {
const numericGrades = student.grades.map((grade) => Number(grade));
let total = 0;
for (const grade of numericGrades) {
    total += grade;
  }
const average = total / numericGrades.length;

  return (
    <div className="StudentCard" key={student.id}>
      <div className="StudentCard__avatar">
        <img src={student.pic} alt={`${student.firstName} ${student.lastName}`} />
      </div>
      <div className="StudentCard__info">
        <h1>
          {student.firstName} {student.lastName}
        </h1>
        <ul>
          <li>Email: {student.email}</li>
          <li>Company: {student.company} </li>
          <li>Skill: {student.skill}</li>
          <li>Average: {average}%</li>
        </ul>
      </div>
    </div>
  )
}

export default StudentCard
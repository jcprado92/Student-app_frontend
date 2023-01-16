import "./StudentCard.scss";
import Add from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


import React, { useState } from "react";

function StudentCard({ student }) {
  const [showGrades, setShowGrades] = useState(false);

  const toggleGrades = () => {
    if (!showGrades) {
      // TODO: change plus icon to loader

      setShowGrades(true);
    } else {
      setShowGrades(false);
    }
  };

  return (
    <div className="studentCard">
      <div className="studentCard__image">
        <img src={student.pic} alt={`${student.firstName} ${student.lastName}`}/>
      </div>
      <div className="studentCard__profile">
        <div className="studentCard__name">
          {student.firstName} {student.lastName}
        </div>
        <div className="studentCard__info">
          <div>Email: {student.email}</div>
          <div>Company: {student.company}</div>
          <div>Skill: {student.skill}</div>
          <div
            className="studentCard__grades"
            style={{ display: showGrades ? "block" : "none" }}
          >
            {student.grades.map((grade, index) => {
              return (
                <div className="studentCard__grade" key={index + 1}>
                  <span>Test {index + 1}:</span>
                  <span>{grade}%</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="studentCard__toggleGrades">
        {!showGrades && <Add onClick={toggleGrades} fontSize="inherit" />}
        {showGrades && <RemoveIcon onClick={toggleGrades} fontSize="inherit" />}
      </div>
    </div>
  );
}

export default StudentCard;

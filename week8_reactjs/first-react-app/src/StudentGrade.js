import React from 'react';
// import logo from './logo.svg';
import './StudentGrade.css';

function StudentGrade() {
  
  let studentScore = [];
  let studentGrade = [];
  let myScore = prompt("enter your score: ");
  let studentNumber;

  
  while(myScore !== "" && myScore !== null) {
    studentScore.push(Number(myScore));
    myScore = prompt("enter your score: ");
  }

  for (let score of studentScore) {
    let grade;
    grade = (score >= 80 && "A") || (score >= 70 && "B") || (score >= 60 && "C") || (score >= 50 && "D") || "F";
    studentGrade.push(grade)
  }

  // turn studentScore & studentGrade arrays into an object
  let studentReport = [];
  for (let i=0; i<studentScore.length; i++) {
    studentReport.push({ "score": studentScore[i], "grade": studentGrade[i] });
  }

  // 
  const rowRemoveHandler = (event) => {
    event.preventDefault();
    let row = event.target.parentNode.parentNode;  
    console.log(row);
    row.remove();
  }

  return (
    <div> 

      <table className="studentGrade">
        <caption style={ {fontSize:"24px", fontWeight:"bold"} }>Student Report</caption>
        <thead>
          <tr>
            <th>No.</th>
            <th>Score</th>
            <th>Grade</th>
            <th>Option</th>
          </tr>
        </thead>

        <tbody>
          {
            studentReport.map(function(item, index) {
              studentNumber = index+1
              return (
                <tr key={studentNumber}>
                  <td>
                    {studentNumber}
                  </td>
                  <td>
                    {item.score}
                  </td>
                  <td>
                    {item.grade}
                  </td>
                  <td>
                    <button onClick={ rowRemoveHandler }> DELETE </button>
                  </td>
                </tr>
              )
              
            })
          }
        </tbody>
      </table>

    </div>
  );
}

export default StudentGrade;

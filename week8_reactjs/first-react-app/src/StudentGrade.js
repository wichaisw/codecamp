import React, { useLayoutEffect } from 'react';
// import logo from './logo.svg';
import './StudentGrade.css';

function StudentGrade() {
  let studentScore = [];
  let studentGrade = [];
  let myScore = Number(prompt("enter your score: "));
  
  // while (true) {
  //   if(myScore !== null) {
  //     studentScore.push(myScore);
  //     myScore = Number(prompt("enter your score: "));
  //   }
  // }

  for (let i=0; i<5; i++) {
    myScore = Number(prompt("enter your score: "));
    studentScore.push(myScore);
  }
  
  for (let score of studentScore) {
    let grade;
    grade = (score >= 80 && "A") || (score >= 70 && "B") || (score >= 60 && "C") || (score >= 50 && "D") || "F";
    studentGrade.push(grade)
  }

  // turn studentScore & studentGrade arrays into an object
  let studentReport = []
  for (let i=0; i<studentScore.length; i++) {
    studentReport.push({ "score": studentScore[i], "grade": studentGrade[i] });
  }

  return (
    <div> 

      <table className="studentGrade">
        <thead>
          <tr>
            <th>No.</th>
            <th>Score</th>
            <th>Grade</th>
          </tr>
        </thead>

        <tbody>
            {
              studentReport.map(function(item, index) {
              return <tr> <td>{index+1}</td> <td>{item.score}</td> <td> {item.grade} </td> </tr>
              })
              
            }


        </tbody>
      </table>


    </div>
  );
}

export default StudentGrade;

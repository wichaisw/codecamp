import React from 'react';
// import logo from './logo.svg';
import './App.css';
let test1 = "monkey bobo";

let studentScore = [];
let studentGrade = [];
let myScore;



// gradeCalculator function for one student score 
// let myScore;
// myScore = Number(prompt("enter your score: "));
// const gradeCalculator = (score) => {
//   let grade;
//   grade = (score >= 80 && "A") || (score >= 70 && "B") || (score >= 60 && "C") || (score >= 50 && "D") || "F";
//   return grade;
// }

// const gradeCalculator = (score) => {
//   let grade;
//   if (score >= 80 ) {
//     grade = "A"
//   } else if(score >= 70) {
//     grade = "B"
//   } else if(score >= 60) {
//     grade = "C"
//   } else if(score >= 50) {
//     grade = "D"
//   } else if (score < 50) {
//     grade = "F"
//   }
//   return grade;
// }

function App() {
  
  for (let i=0; i<5; i++) {
    myScore = Number(prompt("enter your score: "));
    studentScore.push(myScore);
  }

  for (let score of studentScore) {
    let grade;
    grade = (score >= 80 && "A") || (score >= 70 && "B") || (score >= 60 && "C") || (score >= 50 && "D") || "F";
    studentGrade.push(grade)
  }

  return (
    <div>
          <p style={ {fontSize:"50px"} } className="App__text--color App__text--bgcolor">Hello, Moto</p>
          <p>Hi {test1}</p>


          {/* // gradeCalculator function for one student score  */}
          {/* Your score is {myScore}. You got an { gradeCalculator( myScore ) } grade.  */}

          {/* list of student's grades & scores */}
          <ul>
              {studentGrade.map(function(item, index) {
                let score = studentScore[index]
                return <li>Student No.{[index+1]}'s score is {score}, got {item} grade</li>
              })}
          </ul>
          

    </div>
  );
}

export default App;

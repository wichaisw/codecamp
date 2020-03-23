import React from 'react';
// import logo from './logo.svg';
import './App.css';

let test1 = "monkey bobo"
let myScore = Number(prompt("enter your score: "));
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
const gradeCalculator = (score) => {
  let grade = (score >= 80 && "A") || (score >= 70 && "B") || (score >= 60 && "C") || (score >= 50 && "D") || "F";
  return grade;
}


function App() {
  return (
    <div>
          <p style={ {fontSize:"50px"} } className="App__text--color App__text--bgcolor">Hello, Moto</p>
          <p>Hi {test1}</p>

          Your score is {myScore}. You got an {gradeCalculator( myScore ) } grade. 
          {/* Your grade is: {grade} */}
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Persons from './containers/Persons'


function App() {
  return (
    <div className="App">
      <ol>
        <li>เปลี่ยน App นี้ไปใช้ Redux ทั้งหมด (ไม่ใช้ State ใน Component)</li>
      </ol>
      <Persons />
    </div>
  );
}

export default App;

import React from 'react';
import './EditModal.css';
import axios from 'axios';

export default function EditModal(props) {

  const {showModal, setShowModal, editStudentById, editId, name, age, phoneNumber, setName, setAge, setPhoneNumber } = props

  return (
    <div style={{display: showModal}} class='editModal'>
      <h1>Edit</h1>
      <div>
        Id: {editId} 
      </div>
      <div>
        Name: <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        Age: <input 
          type="text" 
          value={age}
          onChange={(e) => setAge(e.target.value)} />
      </div>
      <div>
        Phone number: <input 
          type="text" 
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)} />
      </div>
      <button onClick={() => editStudentById(editId)}>Edit</button>
      <button onClick={() => setShowModal('none')}>Close</button>
    </div>
  )
}

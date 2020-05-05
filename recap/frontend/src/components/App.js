import React, {useState, useEffect} from 'react';
import './App.css';
import axios from '../config/axios';
import EditModal from './EditModal';
import LoginForm from './LoginForm';
import jwtDecode from 'jwt-decode';

function App() {
  
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showModal, setShowModal] = useState('none');
  const [editId, setEditId] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    fetchData();
    const token = localStorage.getItem('ACCESS_TOKEN');
    if (token) {
      const user = jwtDecode(token);
      console.log(user)
      setUserInfo(user);
      setIsLogin(true);
    }
  }, [])

  const fetchData = async() => {
    const result = await axios.get('/student');
    console.log(result.data)
    setStudents(result.data)
  }

  const addStudent = async() => {
    const body = {
      name,
      age,
      number: phoneNumber
    }
    await axios.post('/student', body);
    // setStudents(result.data)
    fetchData()
    alert("A new student is added")
  }

  const deleteStudentById = async(id) => {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`}
    await axios.delete(`/student/${id}`, {headers: headers});
    fetchData();
    alert(`student id${id} has been deleted`)
  }

  const openEditModal = (id) => {
    setShowModal('block')
    setEditId(id)
  }

  const editStudentById = async(id) => {
    const body = {
      name,
      age,
      number: phoneNumber
    }

    await axios.put(`/student/${id}`, body)
    alert(`student id${id} has been edited`)
    fetchData()
  }

  return (
    <div className="App student">
      <h1>Login</h1>
      <LoginForm isLogin={isLogin} setIsLogin={setIsLogin} userInfo={userInfo} setUserInfo={setUserInfo} />
      <h1>Student List</h1>
      <table class="student__table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Phone Number</th>
            <th colSpan='2'>Options</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => {
            return (
              <tr>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.phone_number}</td>
                
                {isLogin ? (
                  <>
                    <td><button onClick={() => openEditModal(student.id)}>Edit</button></td>
                    <td><button onClick={() => deleteStudentById(student.id)}>delete</button></td>
                  </>
                ) : <td>Log in to use options</td>}  
              </tr>
              // <div style={{border: '1px solid #000000', width: '50%', margin: '0.7rem'}}>
              //   <div>ชื่อ: {element.name}</div>
              //   <div>อายุ: {element.age}</div>
              // </div>
            )
          })}
        </tbody>
      </table>

      {/* <button onClick={fetchData}>fetch data</button> */}
      
      <div>
        <h1>Add a student</h1>
        <div>
          Name: <input 
            type="text" 
            value={name}
            onChange={(e) => {
              console.log(e.target.value)
              setName(e.target.value)}} />
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
        <button onClick={addStudent}>Add</button>
      </div>

      {/* <div>
        <h1>Delete a student</h1>
        ID: <input type="text" onChange={(e) => setId(e.target.value)} />
        <button onClick={deleteStudentById}>Delete</button>
      </div> */}

      <EditModal 
        showModal={showModal}
        setShowModal={setShowModal}
        editStudentById={editStudentById}
        editId={editId}

        name={name}
        age={age}
        phoneNumber={phoneNumber}
        setName={setName} 
        setAge={setAge} 
        setPhoneNumber={setPhoneNumber} />
    </div>
  );
}

export default App;
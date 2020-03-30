import React, {useState} from 'react';

const HookPractice = () => {

  // Hook แบบนี้ต่่างกับการใช้ setState ใน Class เพราะขณะที่ใน class component จะ mergeให้
  // แบบนี้จะเป็นการเขียนค่าทับลงไปเลย วิธีแก้คือเขียน function แยกให้ set เป็นตัวๆ ไปเลย เช่น setName, setAge
  // const [state, setState] = useState( {
  //   name: "Wichai",
  //   age: 25
  // })
  
  // function setSecondState() {
  //   setState({
  //     age: 40
  //   })
  // }

  const [name, setName] = useState("Wichai");
  const [age, setAge] = useState(25);

  function setNameState() {
    setName("Noom");
  }

  return(

    <>
      <button onClick={setNameState}>Change Second State</button>
    </>

  )

}

export default HookPractice;
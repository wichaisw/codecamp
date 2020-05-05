import React, { useState } from 'react'
import axios from '../config/axios';
import JwtDecode from 'jwt-decode';

export default function LoginForm(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { isLogin, setIsLogin, userInfo, setUserInfo } = props;

  const login = async() => {
    const body = {
      username,
      password
    };

    const result = await axios.post('/user/login/', body);
    console.log(result)

    // localStorage อยู่ใน window.localStorage ของ เบราเซอร์
    localStorage.setItem('ACCESS_TOKEN', result.data.token);
    const user = JwtDecode(result.data.token);
    setUserInfo(user)
    setIsLogin(true);
  }

  const logout = () => {
    localStorage.removeItem('ACCESS_TOKEN');
    setUserInfo({});
    setIsLogin(false);
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      {isLogin ? ( 
        <>
          <h2>Hello! {userInfo.name}.</h2>
          <button onClick={logout}>Log Out</button> 
        </>
      ) : (
        <>
          <div>
            Username: 
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div>
            Password: 
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button onClick={login}>Log in</button>
        </>
        )
      }
    </div>
  )
}

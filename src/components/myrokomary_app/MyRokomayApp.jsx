import { useState } from 'react';
import './MyRokomaryApp.css'
export default function MyRokomaryApp(){
    return(
        <div className="MyRokomaryApp">
        <LoginComponent/>
        {/* <WelcomeComponent/> */}
            {/* Rokomary Application */}
        </div>
    );
}

function LoginComponent(){
  const [username,setUser] =  useState('admin');
  function handleUserName(event){
    // console.log(event.target.value);
    setUser(event.target.value);
  }
  const [password,setPassword] =  useState('admin');
  function handlePassword(event){
    console.log(event.target.value);
    setPassword(event.target.value);
  }
  return(
    <div className='Login'>
      <div className='LoginForm'>
        <div>
          <label>User Name</label>
          <input type="text" name="username" value={username} onChange={handleUserName}/>
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" value={password} onChange={handlePassword}/>
        </div>
        <div>
          <button type="button" name="loginButton">Login</button>
        </div>
      </div>
    </div>
  );
}

function WelcomeComponent(){
  return(
    <div className='Welcome'>
      Welcome Component
    </div>
  );
}
import React, { useState } from 'react';

import Loginani from '../assets/Animations/Login-ani.json'; 
import  Lottie from  "lottie-react";



import "../assets/css/Login.css";
import Navbar from './Home';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (email === 'admin@gmail.com' && password === 'pass') {
      console.log('Login successful');
    } else {
      setError('Invalid username or password');
    }
  };
 

  return (
    <div className="container1">
      <br></br>
      <Link to='/'>

       <button type="submit" className="navbar-form-submit">Home</button>
      </Link>
      
      
    <div className="lottie-container" style={{ marginLeft: '0px' }}>
      <Lottie
        animationData={Loginani}
        style={{ width: '500px', height: '500px' }} 
      />
    </div>

    
      
    
        
      <div className="box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="inputBox">
            <input
              type="email"
              name="email"
              required
              value={email}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>Email-Id</label>
          </div>
          <div className="inputBox">
            <input
              type="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
          </div>
          {error && <div style={{ color: 'red' }}>{error}</div>}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="submit" name="sign-in" value="Login" />
          <p style={{ color: '#fff', textAlign: 'center' }}>
            Don't have an account? <a style={{ color: '#03a9f4' }} >Register here</a>
          </p>
        </form>
      </div>
        {/* <div className="lottie-container1"> */}
        {/* <Lottie
          animationData={Loginani2}
          style={{ width: '400px', height: '500px' }} 
        />
      </div> */}
    </div>
  );
};

export default Login;

import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './register.css';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('false');

  const handleSubmit = async (e) => {
    setError(false);
    e.preventDefault();
    

    try{
      const res = await axios.post('/auth/register', {
        username,
        password,
        email,
      });
        res.data && window.location.replace("/login");
    }catch(err){
      setError(true);
    }
  };

  return (
    <div className='register'>
      <span className='registerTitle'>Register</span>
      <form className='registerForm' onSubmit={handleSubmit}>
        <label>Usrename</label>
        <input
          type='username'
          className='registerInput'
          placeholder='Enter Your Username...'
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>E-mail</label>
        <input
          type='email'
          className='registerInput'
          placeholder='Enter Your E-mail...'
          name='email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type='password'
          className='registerInput'
          placeholder='Enter Your Password...'
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Re-Password</label>
        <input
          type='password'
          className='registerInput'
          placeholder='Re-Enter Your Password...'
        />
        <button className='registerButton'>Register</button>
      </form>
      <button className='registerLoginButton'>
        <Link className='link' to='/login'>
          Login
        </Link>
      </button>
    {error && <span style={{ color:"red",marginTop:"5px" }}>Something went wrong!</span>}
    </div>
  );
}

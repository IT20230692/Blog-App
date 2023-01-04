import { Link } from "react-router-dom";
import "./register.css"

export default function Register() {
  return (
    <div className='register'>
    <span className='registerTitle'>Register</span> 
    <form className="registerForm">
        <label>Usrename</label>
        <input type="username" className="registerInput" placeholder="Enter Your Username..." name="email"/>
        <label>E-mail</label>
        <input type="email" className="registerInput" placeholder="Enter Your E-mail..." name="email"/>
        <label>Password</label>
        <input type="password" className="registerInput" placeholder="Enter Your Password..."/>
        <label>Re-Password</label>
        <input type="password" className="registerInput" placeholder="Re-Enter Your Password..."/>
      <button className="registerButton">Register</button>
    </form>
    <button className="registerLoginButton">
    <Link className="link" to="/login">Login</Link>
    </button>
    </div>
  );
}

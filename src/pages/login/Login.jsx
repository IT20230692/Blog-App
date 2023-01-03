import "./login.css"

export default function Login() {
  return (
    <div className='login'>
    <span className='loginTitle'>Login</span> 
    <form className="loginForm">
        <label>E-mail</label>
        <input type="email" className="loginInput" placeholder="Enter Your E-mail..." name="email"/>
        <label>Password</label>
        <input type="password" className="loginInput" placeholder="Enter Your Password..."/>
        <button className="loginButton">Login</button>
    </form>
    <button className="loginRegisterButton">Register</button>
    </div>
  );
}

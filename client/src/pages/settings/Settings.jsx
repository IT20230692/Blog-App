import './settings.css'
import SideBar from "../../components/sideBar/SideBar";


export default function Settings() {
  return (
    <div className='settings'>
      <div className='settingsWrapper'>
        <div className='settingsTitle'>
          <span className='settingsUpdateTitle'>Update Your Account</span>
          <span className='settingsDeleteTitle'>Delete Your Account</span>
        </div>
        <form className='settingsForm'>
          <label className='settingslabel'>Profile Picture</label>
          <div className='settingsPP'>
            <img
              src="https://pbs.twimg.com/media/FVtqWSuX0AA8e5M?format=jpg&name=large"
              alt="pro img"
            />
            <label htmlFor='fileInput'>
              <i className='settingsPPIcon far fa-user-circle'></i>
            </label>
            <input type='file' id='fileInput' style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder='Chandima'></input>
          <label>E-mail</label>
          <input type="email" placeholder='chandima@gmail.com'></input>
          <label>Password</label>
          <input type="password" ></input>
          <button className='settingsSubmit'>Update</button>
        </form>
      </div>
      <SideBar />
    </div>
  )
}

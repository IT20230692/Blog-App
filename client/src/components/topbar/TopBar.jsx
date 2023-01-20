import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./TopBar.css"
export default function TopBar() {
  const {user} = useContext(Context);

  return (
    <div className="top">
        <div className="topLeft">
        <i className="topIcon fb fa-brands fa-square-facebook"></i>
        <i className="topIcon twitter fa-brands fa-square-twitter"></i>
        <i className="topIcon pinterest fa-brands fa-square-pinterest"></i>
        <i className="topIcon inster fa-brands fa-square-instagram"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem"><Link className="link" to="/">HOME</Link></li>
                <li className="topListItem"><Link className="link" to="/">ABOUT</Link></li>
                <li className="topListItem"><Link className="link" to="/">CONTACT</Link></li>
                <li className="topListItem"><Link className="link" to="/write">WRITE</Link></li>
                <li className="topListItem">
                  {user && "LOGOUT"}
                </li>
            </ul>
        </div>
        <div className="topRight">
        {
          user ? (
            <img 
              className="topImg"
              src="https://pbs.twimg.com/media/FVtqWSuX0AA8e5M?format=jpg&name=large"
              alt="pro img"    
            />
          ): (
            <ul className="topList">
            <li className="topListItem">
            <Link className="link" to="/login">LOGIN</Link>
            </li>
            <li className="topListItem">
            <Link className="link" to="/register">REGISTER</Link>
            </li>
            </ul>
          )
        }
        
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
 const currentUser = true;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
          <Link className="link" to='/'>
          HOME
          </Link>
          </li>
          <li className="topListItem">
          ABOUT
         </li>
          <li className="topListItem">
          CONTACT
          </li>
          <li className="topListItem">
          <Link className="link" to='/write'>
          WRITE
          </Link>
          </li>
          {currentUser && <li className="topListItem">LOGOUT</li>}
        </ul>
      </div>
      <div className="topRight">
      {
        currentUser ? (
          <Link className="link" to='/settings'>
            <img
              className="topImg"
              src="https://avatars.githubusercontent.com/u/78584267?v=4"
              alt=""
            />
            </Link>
        ) : 
        <ul className="topList">
        <li className="topListItem">
        <Link className="link" to='/login'>
          LOGIN
        </Link>
        </li>
        <li className="topListItem">
        <Link className="link" to='/register' >
          REGISTER
          </Link>
        </li>
        </ul>
      }
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
  }




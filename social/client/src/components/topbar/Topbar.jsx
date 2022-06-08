import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import {Link, useHistory} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import {useDispatch, useSelector} from "react-redux";
// import {Logout} from "@material-ui/icons";
// import LogoutIcon from '@mui/icons-material/Logout';
// import { logoutUser } from "../../apiCalls";

export default function Topbar() {

  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  // const history = useHistory()
  //const dispatch = useDispatch();
  
  const logoutUser = () =>{
      localStorage.removeItem('user');
      window.location.href = "/login";
    }

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
      <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Picstagram</span>
      </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          {/* <span className="topbarLink">Homepage</span> */}
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className="topbarLink">Timeline</span>
          </Link>
          <Link to="/login" style={{ textDecoration: "none" }}>
          {/* <Logout /> */}
            <span 
            className="topbarLink" onClick={logoutUser}
            // onClick={()=>{
            //   dispatch(logoutUser())
            >
              Logout
            </span>
          </Link>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img src={user.profilePicture ? PF+user.profilePicture : PF+"person/noAvatar.png"} alt="" className="topbarImg"/>
        </Link>
      </div>
    </div>
  );
}
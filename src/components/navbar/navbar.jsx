import "./navbar.scss";
import React, { useContext } from "react";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import Brightness4RoundedIcon from "@mui/icons-material/Brightness4Rounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Link } from "react-router-dom";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {
  const{currentUser}= useContext(AuthContext)
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
            <span>3pletsocial</span>
        </Link>
          <HomeRoundedIcon />

      
          <Brightness4RoundedIcon />
          <GridViewRoundedIcon />
        <div className="search">
          <SearchRoundedIcon />
          <input type="text" placeholder="search"></input>
        </div>
      </div>
      <div className="right">
        <PersonOutlineRoundedIcon />
        <NotificationsActiveRoundedIcon />
        <Link to='/profile/${post.userId}' style={{textDecoration:'none',color:'black'}}>
        <div className="user">
          <img
            // src={currentUser.profilePicture}
            src='https://images.pexels.com/photos/1323206/pexels-photo-1323206.jpeg?cs=srgb&dl=pexels-mixu-1323206.jpg&fm=jpg'
            alt=""
            />
          <span>{currentUser.name}</span>
        </div>
            </Link>
      </div>
    </div>
  );
};

export default Navbar;

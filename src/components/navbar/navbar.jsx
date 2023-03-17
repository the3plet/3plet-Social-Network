import "./navbar.scss";
import React from 'react'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import Brightness4RoundedIcon from '@mui/icons-material/Brightness4Rounded';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { Link } from 'react-router-dom';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';

const Navbar = () => {
  return (
    <div className="nabvbar">
        <div className="left">
            <Link to="/" style={{textDecoration:"none"}}>
            <span>3pletsocial</span>
            <HomeRoundedIcon/>
            <Brightness4RoundedIcon/>
            <GridViewRoundedIcon/>
            </Link>
            <div className="search">
                <SearchRoundedIcon/>
                <input type="text" placeholder='search'></input>
            </div>
        </div>
        <div className="right">
            <PersonOutlineRoundedIcon/>
            <NotificationsActiveRoundedIcon/>
            <div className="user">
                {/* <img src='https://media.wired.com/photos/598e35fb99d76447c4eb1f28/16:9/w_2123,h_1194,c_limit/phonepicutres-TA.jpg' alt=''/> */}
                <span>Peter Parker</span>
            </div>
        </div>
    </div>
  )
}

export default Navbar;
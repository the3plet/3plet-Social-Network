import Friends from "../../assets/friends.jpg"
import Groups from "../../assets/group.png"

import React, { useContext } from 'react'
import './leftBar.scss'
import { AuthContext } from "../../context/authContext"
const LeftBar = () => {
  const {currentUser} = useContext(AuthContext)
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={currentUser.profilePicture} alt=""/>
            <span>{currentUser.name}</span>
          </div>
          <div className="items">
            <img src={Friends} alt=""/>
            <span>Friends</span>
          </div>
          <div className="items">
            <img src={Groups} alt=""/>
            <span>Groups</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftBar;
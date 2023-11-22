import React from 'react'
import "./Userinfo.css";
import { FcApproval } from "react-icons/fc";
import { FcGlobe } from "react-icons/fc";
import { FcRating } from "react-icons/fc";
import { BiSolidLike } from "react-icons/bi";
import { AiFillEye } from "react-icons/ai";
import { FcLike } from "react-icons/fc";



const Userinfo = () => {
  return (
    <div>
    {/* Div for profile pic and Followers count section */}
    <div className='userinfo'>
        {/* Div for left Profile picture */}
        <div className="profile-pic"> 
          <img className='dp' src="https://pbs.twimg.com/profile_images/1148507476578275328/fsrvymGR_400x400.jpg" alt="Anuj" />
        </div>

        {/* Div for right Info section */}
        <div className="info">

          {/* Div for name */}
          <div className="name">
          <h3>Anuj Gosalia</h3>
          <FcGlobe className="icons"/>
          <FcApproval className="icons"/>
          </div>

          {/* Box for followers and dollow count*/}
          <div className="follow">
            <div className="followers">
              <div className="count">
                6482
              </div>
              <p>Followers</p>
            </div>
            <div className="following">
              <div className="count">
                260
              </div>
              <p>Following</p>
            </div>
          </div>
        </div> 
    </div>

    {/*Div for Bio */}
    <div className="bio">
      <p>Co-founder & CEO at Terribly Tiny Tales</p>
      <a href="www.instagram.com" className="link">https://www.instagram.com/anujgosalia</a>

      <div className="highlights">

        <div className="stars hlt">
        <FcRating className="hlticons"/>
        
        125
        </div>
        <div className="upvote hlt">
        <BiSolidLike className="hlticons"/>
          12  
        </div>
        <div className="views hlt">
        <AiFillEye className="hlticons"/>
          57.8K
        </div>
        <div className="likes hlt">
        <FcLike className="hlticons"></FcLike>
          26.0K
        </div>

      </div>

    </div>
  </div>
  )
}

export default Userinfo

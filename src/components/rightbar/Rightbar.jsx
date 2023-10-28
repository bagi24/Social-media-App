import "./rightbar.css";
import { Users } from "../../UsersData";
import Online from "../online/Online";

export default function Rightbar({profile}) {

  const HomeRightbar =()=> {
    return ( <> 
    
    <div className="birthdayConteiner">
      <img className="birthdayImg" src="/assets/gift.png" alt="" />
   <span className="birthdatText"> <b> Davit injgia </b>  and  <b> 3 other Friends</b> have a birthday today </span>
    </div>


    <img className="rightbarAd" src="/assets/ad.png" alt="" />
    <h4 className="rightbarTitle"> Online Friends</h4>
    <ul className="rightbarFriendList">
   {Users.map (u => <Online key={u.id} user={u} />)}
      
    </ul>
    </>)
  }

  const ProfileRightbar = () => {
return (

  <>
  <h4 className="rightbarTitle">User Information</h4>
  <div className="rightbarInfo">

    <div className="rightbarInfoItem">
      <span className="rightbarInfoKey"> City: </span>
       <span className="rightbarInfoValue"> Tbilisi </span>
    </div>
    <div className="rightbarInfoItem">
      <span className="rightbarInfoKey"> From: </span>
       <span className="rightbarInfoValue"> Georgia </span>
    </div>
    <div className="rightbarInfoItem">
      <span className="rightbarInfoKey"> Relationship: </span>
       <span className="rightbarInfoValue"> Single </span>
    </div>
  </div>

    <h4 className="rightbarTitle">User Friends</h4>
    <div className="rightbarFollowings">
      <div className="rightbarFollowing">
        <img className="rightbarFollowingImg" src="assets/persons/1.jpeg" alt="" />
       <span className="rightbarFollowingName"> Maka sakhiashvili</span>
      </div>
      <div className="rightbarFollowing">
        <img className="rightbarFollowingImg" src="assets/persons/2.jpeg" alt="" />
       <span className="rightbarFollowingName"> Maka sakhiashvili</span>
      </div>
      <div className="rightbarFollowing">
        <img className="rightbarFollowingImg" src="assets/persons/3.jpeg" alt="" />
       <span className="rightbarFollowingName"> Maka sakhiashvili</span>
      </div>
      <div className="rightbarFollowing">
        <img className="rightbarFollowingImg" src="assets/persons/4.jpeg" alt="" />
       <span className="rightbarFollowingName"> Maka sakhiashvili</span>
      </div>
      <div className="rightbarFollowing">
        <img className="rightbarFollowingImg" src="assets/persons/5.jpeg" alt="" />
       <span className="rightbarFollowingName"> Maka sakhiashvili</span>
      </div>
      <div className="rightbarFollowing">
        <img className="rightbarFollowingImg" src="assets/persons/6.jpeg" alt="" />
       <span className="rightbarFollowingName"> Maka sakhiashvili</span>
      </div>
    </div>
  
  </>
  )

  }
  return (
    <div className="rightbar">
   <div className="rightbarWrapper">
    { profile ?  <ProfileRightbar /> : <HomeRightbar/> }
   </div>
    </div>
  )
}

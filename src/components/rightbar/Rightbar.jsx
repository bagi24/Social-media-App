import "./rightbar.css";
import { Users } from "../../UsersData";
import Online from "../online/Online";

export default function Rightbar() {
  return (
    <div className="rightbar">
   <div className="rightbarWrapper">
    <div className="birthdayConteiner">
      <img className="birthdayImg" src="/assets/gift.png" alt="" />
   <span className="birthdatText"> <b> Davit injgia </b>  and  <b> 3 other Friends</b> have a birthday today </span>
    </div>


    <img className="rightbarAd" src="/assets/ad.png" alt="" />
    <h4 className="rightbarTitle"> Online Friends</h4>
    <ul className="rightbarFriendList">
   {Users.map (u => <Online key={u.id} user={u} />)}
      
    </ul>
   </div>
    </div>
  )
}

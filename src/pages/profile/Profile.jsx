import "./profile.css"
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";


export default function Profile() {
  return (
     <>
  
  <Topbar />
<div className="profile">
<Sidebar />
<div className="profileRight">
    <div className="profileRightTop">

<div className="profileCover">

<img className="profileCoverImg" src="assets/posts/3.jpeg" alt="" />
<img className="profileUserImg" src="assets/persons/7.jpeg" alt="" />
</div>

<div className="profileInfo">
    <h4 className="profileInfoName"> Bagrati Injgia</h4>
     <span className="profileDesc"> Hello my friends</span>
</div>

    </div>
     <div className="profileRightBottom">
        <Feed />
<Rightbar Profile />
    </div>


</div>


</div>
  


  </>
  )
}

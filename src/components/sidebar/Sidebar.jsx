import "./sidebar.css"

import {RssFeed,Chat, PlayCircle, People, TurnedIn, HelpCenter,WorkOutline, Today, School }from '@mui/icons-material';
import Closefriend from "../closeFriend/Closefriend";
import { Users } from "../../UsersData";

export default function Sidebar() {
  return (
    <div className="sidebar"> 
     <div className="sidebarWrapp">
<ul className="sidebarList">

  <li className="sidebarListItem">
<RssFeed  className="sidebarIcon"/>
<span className="sidebarItemText">
  Feed
</span>
  </li>

  <li className="sidebarListItem">
< Chat className="sidebarIcon"/>
<span className="sidebarItemText">
  Chat
</span>
  </li>

  <li className="sidebarListItem">
< PlayCircle className="sidebarIcon"/>
<span className="sidebarItemText">
  Videos
</span>
  </li>


  <li className="sidebarListItem">
< People className="sidebarIcon"/>
<span className="sidebarItemText">
  Groups
</span>
  </li>


  <li className="sidebarListItem">
< TurnedIn className="sidebarIcon"/>
<span className="sidebarItemText">
  Bookmarks
</span>
  </li>

  
  <li className="sidebarListItem">
< HelpCenter className="sidebarIcon"/>
<span className="sidebarItemText">
  Questions
</span>
  </li>


  <li className="sidebarListItem">
< WorkOutline className="sidebarIcon"/>
<span className="sidebarItemText">
  Jobs
</span>
  </li>

  <li className="sidebarListItem">
< Today className="sidebarIcon"/>
<span className="sidebarItemText">
  Events
</span>
  </li>

  <li className="sidebarListItem">
< School className="sidebarIcon"/>
<span className="sidebarItemText">
  Courses
</span>
  </li>

</ul>

<button className="sidebarbutton"> Show More</button>
<hr className="sidebarHr"/>
<ul className="sidebarFriendList">

 {Users.map(u => <Closefriend key={u.id} user={u} />)}
  
</ul>
  
     </div>
    </div>
  )
}

import './sidebar.css'

export default function SideBar() {
  return (
    <div className='sidebar'>
    <div className='sidebarItem'>
      <span className='sidebarTitle'>ABOUT ME
      </span>
        <img src='https://cdn2.stylecraze.com/wp-content/uploads/2019/06/101-Funny-Ways-To-Say-Hello-To-People.jpg' alt='' />
        <p>Lorem ipsum dolor sit amet consectetur, 
          adipisicing elit. Consectetur ipsa placeat soluta ab vitae 
          dolorem molestias totam minus eligendi repellat, cupiditate quas mollitia</p>
    </div>
    <div className="sidebarItem">
         <span className="sidebarTitle">CATEGORIES</span> 
         <ul className="sidebarList">
           <li className="sidebarListItem">Life</li>
           <li className="sidebarListItem">Music</li>
           <li className="sidebarListItem">Style</li>
           <li className="sidebarListItem">Sport</li>
           <li className="sidebarListItem">Tech</li>
           <li className="sidebarListItem">Cinema</li>
         </ul>
    </div>
    <div className="sidebarItem">
      <span className="sidebarTitle">FOLLOW US</span>
      <div className="sidebarSocial">
      <i className="sidebarIcon fab fa-facebook-square"></i>
      <i className="sidebarIcon fab fa-instagram-square"></i>
      <i className="sidebarIcon fab fa-pinterest-square"></i>
      <i className="sidebarIcon fab fa-twitter-square"></i>
      </div>
    </div>
    </div>
  )
}

import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import "../App.css";
import{ FaBars,FaBuffer,FaClipboardCheck,
  FaHourglassHalf,FaCalendarDay} from 'react-icons/fa'
// import 'bootstrap/dist/css/bootstrap.min.css'

  const SideBar = ({children}) => {
    const menuItems = [
      {
        path:'/mytask',
        name: "My Tasks",
        icon: <FaBuffer />

      },
      {
        path:'/inprogress',
        name: "In Progress",
        icon:<FaHourglassHalf />
      },
      {
        path:'/completed',
        name: "Completed",
        icon:<FaClipboardCheck />
      },
      {
        path:'/newprocess',
        name: "New Process",
        icon:< FaCalendarDay/>
      },
    ]
    const [isOpen,setOpen] = useState(true)
    const toggle = () =>setOpen(!isOpen)
    return (
     <div className='container'>
<div className='sidebar' style={{width:isOpen ? "200px" : "50px"}}>
  <div className='top_section'>
    <h1 style={{display: isOpen ? 'block' : 'none'}} className='logo'>logo</h1>
    <div style={{marginLeft: isOpen ? '60px' : '0px'}} className='bars'>
      <FaBars onClick={toggle}/>
      </div>
  </div>
  {
    menuItems.map((item, index)=>(
      <NavLink to ={item.path} key={index} className="link" activeclassname="active">
        <div className='icons'>{item.icon}</div> 
       <div style={{display: isOpen ? 'block' : 'none'}} className='link_text'>{item.name}</div> 
      </NavLink>
    ))
  }
</div>
     <main>{children}</main>
  </div>
    );
  };
  
  export default SideBar;
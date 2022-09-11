import React,{Component} from "react";
import '../App.css'
import {FaHandsHelping} from 'react-icons/fa'
class Navbar extends Component {


    render() {
        return (
            <div className="navbar">
<nav className="Nav">
    <div style={{display:"flex"}}>
    <div className="log">
        <FaHandsHelping />
    </div>
    <div className="logout">
        <button className="btn" onClick={() =>{
            localStorage.removeItem('token')
            window.location.reload(false)
            console.log(localStorage.getItem('token'))
        }} >logout</button>
    </div>
    </div>
</nav>
</div>
 )   
}
}
export default Navbar;
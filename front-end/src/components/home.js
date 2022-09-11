import React,{Component} from "react";
import SideBar from "../components/sidebar";
import Navbar from "../components/navbar";
import Mytasks from "../pages/Mytasks";
import Inprogress from "../pages/inprogress";
import Completed from "../pages/completed";
import Newprocess from "../pages/newprocess";

import {BrowserRouter, Routes,Route} from 'react-router-dom'
class Home extends Component {

    render() {
        return (
            <div>
              <Navbar className="statNav"/>
              <BrowserRouter>
              <SideBar>
              <Routes>
              <Route path="/"element={<Mytasks/>}/>
                <Route path="/mytask"element={<Mytasks/>}/>
                <Route path="/inprogress"element={<Inprogress/>}/>
                <Route path="/completed"element={<Completed/>}/>
                <Route path="/newprocess"element={<Newprocess/>}/>
                </Routes>
                </SideBar>
              </BrowserRouter>
            </div>
        )   
}
}
export default Home;
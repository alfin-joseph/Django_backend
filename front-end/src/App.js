import './App.css';
import {useState} from 'react'
import Login from './components/login';
import Home from './components/home';
function App() {
  const [tok,setToken] = useState()
  const userLogin = (token) =>{
    setToken(token)
  }
  if (localStorage.getItem('token') !==null ){
    return (
      <div className="App">
        {/* <Login />  */}
        <Home/>
      </div>
    );
  }
  return (
    <div className="App">
      <Login userLogin={userLogin}/> 
      {/* <Home /> */}
    </div>
  );
}

export default App;

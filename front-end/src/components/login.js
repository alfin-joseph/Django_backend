import React,{Component} from "react";
import '../App.css'
class Login extends Component {

state = { credentials: {username:'',password:''}
}
login = (event) =>{
fetch('http://127.0.0.1:8000/auth/', { 
    method:"POST",
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify(this.state.credentials)
})
.then( data => data.json())
.then(
    data =>{
        this.props.userLogin(data.token);
        localStorage.setItem('token',data.token)
    }
).catch(
    error =>{
        console.error(error)
    }
)
}
Inputchange = event =>{
  const cred = this.state.credentials;
  cred[event.target.name] = event.target.value;
  this.setState({credentials:cred});
}
render() {
return (
    <div className="loginPage">
        <center>
       <h1 className="loginhed">LOGIN</h1>
       <label className="label">Username:</label>
       <input className="input" type='text'  name='username' value={this.state.credentials.username}
    onChange={this.Inputchange}></input>
       <br/>
       <label className="label">password:</label>
       <input className="input" type='text'  name='password' value={this.state.credentials.password}
    onChange={this.Inputchange}></input>
       <br/>
       <button className="loginbtn" onClick={this.login}>login</button>
       </center>
    </div>
 );
}
}
  
export default Login;
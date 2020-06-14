import React, { Component } from 'react';
import './signupandsignin.css';
import * as db from './datastore.js';
import Main from './Main';
import {BrowserRouter as Router,Route,useHistory} from 'react-router-dom';


class SignUp extends Component {
 constructor(props) {
     super(props);
 
     this.state = {
       signupusername: "",
       signuppassword: "",
       signuppasswordTwo: "",
       signinusername:'',
       signinpassword:'',
       signinfetchedpassword:'',
       signedin:'',
       signupnooftimes:0,
       redirectt:'dont'
     }
 }
 
 signupcomponent = () => {
  
  return(
    <div className="pairs" id={this.state.redirectt}>
<div id="LoginContainer" className={this.state.redirectt}>
              <br />
              <div>
                <h1 className = "signupheader">Create New Account</h1>
              </div>
              <br />
              <div>
                  <label>username:   </label>
                  <input class="occupy" type="text" value={this.state.signupusername} onChange={this.signupchangeusername} />
              </div>
              <br />
              <div>
                  <label>Password:   </label>
                  <input class="occupy" type="password" value={this.state.signuppassword} onChange={this.signupchangepassword}/>
              </div>
              <br />
              <div>
                  <label>Confirm Password:   </label>
                  <input class="occupy" type="password" value={this.state.signuppasswordTwo} onChange={this.signupchangepasswordTwo}/>
              </div>
              <br />
              
              
                  <button class="submitButton" onClick={() => {this.signupcheckifuseralreadyexists();}}>Create Account</button>
              
              <br />
          </div>
          <div id="LoginContainer" className={this.state.redirectt}>
          <br />
          <div>
        <h1 className= "LoginHeader">Login</h1>
          </div>
          <br />
          <div>
              <label>username:   </label>
              <input class="occupy" type="text" value={this.state.signinusername} onChange={this.signinchangeusername} />                 </div>
          <br />
          <div>
              <label>Password:   </label>
              <input class="occupy" type="password" value={this.state.signinpassword} onChange={this.signinchangepassword}/>
          </div>
          <br />
          
              <button onClick={() => {this.signIn();}} class="submitButton">Login</button>
              
          <br />
        </div>
        </div>
  )
}

showcontinuebutton = () => {
const history = useHistory();
if(this.state.redirectt==='show'){
    return(
      <div>
        <h1 class="continuemsg">Sucessfully logged in</h1>
   <div className="continuebutton" onClick={()=>{history.push('/Main');}}>continue</div>
   </div>
    )
}else{
  return(null);
}
}

signincomponent = () => {
  
}
 
 signupchangeusername = (event) => {
     this.setState({signupusername: event.target.value});
 }
      
 signupchangepassword = (event) => {
     this.setState({signuppassword: event.target.value});
 }
 
 signupchangepasswordTwo = (event) => {
   this.setState({signuppasswordTwo: event.target.value});
 }
 signinchangeusername = (event) => {
  this.setState({signinusername: event.target.value});
}
    
signinchangepassword = (event) => {
  this.setState({signinpassword: event.target.value});
}

   

 signupcheckifuseralreadyexists = () => {
   this.setState({signinusername:''});
   if(this.state.signuppassword!=='' && this.state.signupusername!==''){
   db.checksignin(this.state.signupusername,this.signupcallbackhandlerchecksignin);
 }else{
   alert("username or password cannot be empty");
 }
}

signupcallbackhandlerchecksignin = (password,props) => {
  if (password!==null){
alert('username already taken');
}else{
  if (this.state.signuppassword === this.state.signuppasswordTwo) {
    db.signup(this.state.signupusername,this.state.signuppassword,this.state.signupnooftimes);
    this.setState({signedin:'signedin',signupnooftimes:1,redirectt:'show'});
  }
   else {
     alert('Make sure passwords match');
   }
 }
}
signIn = () => {
db.checksignin(this.state.signinusername,this.signincallbackhandlerchecksignin);
this.setState({signupusername:''})
}

signincallbackhandlerchecksignin = (fetchedpassword) => {
  if(this.state.signinpassword===fetchedpassword){
    this.setState({redirectt:'show',signedin:'signedin'})
  }else{
    alert('wrong username or password');
  }
}
 
 callmain = () => {
   if(this.state.signinusername===''){
  return(<Main signedin={this.state.signedin} username={this.state.signupusername}/>)
   }
   if(this.state.signupusername===''){
    return(<Main signedin={this.state.signedin} username={this.state.signinusername}/>)
     }
    }
  
 
 render() {
     return (
       <Router>
      
      <Route path="/Main" exact component={this.callmain}/>
      <Route path="/" exact component={this.showcontinuebutton}/>
        <Route path="/" exact component={this.signupcomponent} />
        
      </Router> 
     )
 }
}


export default SignUp;
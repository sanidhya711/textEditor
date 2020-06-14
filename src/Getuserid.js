import React,{Component} from 'react'
import Main from './Main'
import * as db from './datastore'
import firebase from 'firebase'

class Getusername extends Component{
  constructor(props){
  super(props); 
  this.state={username:''}
  db.getUser(this.callbackhandlerusername);
  }
  callbackhandlerusername = (username) => {
    this.setState({username:username});
  }

  render(){
  return (
    <div>
     <Main username={this.state.username}/>
    </div>
    );
  }
  }
  export default Getusername;
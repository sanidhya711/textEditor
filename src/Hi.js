import React,{Component} from 'react'
import './App.css'

class Hi extends Component{
  constructor(props){
  super(props); 
  this.state ={isclicked:"notclicked"}
   }
   changeState = (state) => {
    if(this.state.isclicked==="notclicked"){
      this.setState({isclicked:"clicked"});
    }
    if(this.state.isclicked==="clicked"){
      this.setState({isclicked:"secondclicked"});
    }
    if(this.state.isclicked==="secondclicked"){
      this.setState({isclicked:"notclicked"})
    }
  }
  render(){
  return (
    <div>
        <link rel="stylesheet" href="style.css"/>
        <link href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans:ital@1&display=swap" rel="stylesheet"/>
      <div class="topbar">
      </div>
      <div class="hiholder">
          hi i am
      </div>
      <div class="divforanimating"></div>
        <div class="textholder"> 
    <div id="ss">S</div>    <div id="aa" >a</div>    <div id="nn">n</div>   <div id="ii">i</div>   <div id="dd">d</div>   <div id="hh">h</div>   <div id="yy">y</div>   <div id="aa2">a</div>
        <hr/>
        </div>
    <div id="imgholder">
    <div id="div1"><img src="deku.jpg" class="imagee"/><div class="imgexplain">Hello I am Sanidhya.I am 14 years old and i live in Lucknow</div></div>
    <div id="div2"><img src="st francis.png" class="imagee"/><div class="imgexplain">I go to ST. Francis college. i am in 9th grade and I like to study computer and mathematics</div></div>
    <div id="div3"><img src="football.jpg" class="imagee"/><div class="imgexplain">I really enjoy playing football and video games</div></div>
    </div>
        <div class={"slidetray"+this.state.isclicked}>
            <a href="https://www.youtube.com/channel/UCr9t7MF0VWif-TK2F3GmRvw?view_as=subscriber" ><img src="youtube logo.png" class="youtubelogo"/></a>
            <a href="mailto:sanidhyajain077@outlook.com"><img src="outlook logo.png" class="outlooklogo"/></a>
            <a href="mailto:sanidhyajain077@gmail.com"><img src="gmail logo.png" class="gmaillogo"/></a>
        <img src="circle-cropped (1).png" className={"arrow"+this.state.isclicked} onClick={this.changeState}/>
       </div>
       <div class="bottombar">
           <div class="bottomsanidhya">@sanidhya</div>
       </div>
    </div>
    );
  }
  }
  export default Hi;
   
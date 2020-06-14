import React,{ Component } from 'react'
import * as db from './datastore'
import './main.css'

class Main extends Component{
  constructor(props){
  super(props);
  this.state={username:'username not changed',signedin:'',bruh:true, inputtext:'',arraycounter:0,filename:'',filename1:'',filename2:'',filename3:'',filename4:'',filename5:'',fileno:0,inputtextfetched:'',
  filenamefetched1:'',filenamefetched2:'',filenamefetched3:'',filenamefetched4:'',filenamefetched5:'',nooffiles:0,filenameclicked1:'clicked1',filenameclicked2:'',filenameclicked3:'',filenameclicked4:'',filenameclicked5:''}
    this.setusername();
  }

setusername = () => {
  this.setState({username:this.props.username,signedin:this.props.signedin},() => {
this.fetcheverything();
  });
}

signedinsetter = () => {
  this.setState({signedin:this.props.signedin});
}

  changefilename = (event) => {
    this.setState({filename:event.target.value})
  }

  fetcheverything = () => {
   db.fetchtext(this.state.username,'1',this.callbackhandlertext);
    db.fetchnooffiles(this.state.username,this.callbackhandlernooffiles);
    db.fetchtfilename1(this.state.username,this.callbackhandlerfilename1);
    db.fetchtfilename2(this.state.username,this.callbackhandlerfilename2);
    db.fetchtfilename3(this.state.username,this.callbackhandlerfilename3);
    db.fetchtfilename4(this.state.username,this.callbackhandlerfilename4);
    db.fetchtfilename5(this.state.username,this.callbackhandlerfilename5);
  }

  newfile = () => {
    if(this.state.nooffiles<5){
    this.setState({nooffiles:this.state.nooffiles+1,fileno:this.state.nooffiles+1,},
      () => {
    db.newfile(this.state.username,this.state.fileno,this.state.filename,this.state.nooffiles);
    this.setState({filename:'',inputtextfetched:''})
    if(this.state.fileno===1)
     this.file1clicked();
     if(this.state.fileno===2)
     this.file2clicked();
     if(this.state.fileno===3)
     this.file3clicked();
     if(this.state.fileno===4)
     this.file4clicked();
     if(this.state.fileno===5)
        this.file5clicked();
        this.fetcheverything();
    });
  }
}


deletefile = () => {
  if(this.state.fileno>0 && this.state.nooffiles>0){
 this.setState({inputtext:'', filename:'',inputtextfetched:'',nooffiles:this.state.nooffiles-1}, () => {
 db.deletefile(this.state.username,this.state.fileno,this.state.nooffiles);
 this.setState({fileno:this.state.fileno-1});
 
 
 if(this.state.nooffiles===0){
   this.file1clicked();
 }else{

 if(this.state.filenameclicked5==='clicked5')
 this.file4clicked();

 if(this.state.filenameclicked4==='clicked4')
 this.file3clicked();

 if(this.state.filenameclicked3==='clicked3')
 this.file2clicked();

 if(this.state.filenameclicked2==='clicked2')
 this.file1clicked();
 this.fetcheverything();
 }
 });
}
 }




  inputchange = (event) => {
    this.setState({inputtextfetched:event.target.value});
  }

  callbackhandlertext = (fetcheddtextt) => {
 this.setState({inputtextfetched:fetcheddtextt});
 console.log(fetcheddtextt)
  }

  callbackhandlernooffiles = (fetchednumberoffiles) => {
    this.setState({nooffiles:fetchednumberoffiles});
    console.log(fetchednumberoffiles)
    }


  callbackhandlerfilename1 = (fetcheddfilenamee) => {
    this.setState({filenamefetched1:fetcheddfilenamee});
    console.log(fetcheddfilenamee);
     }
  callbackhandlerfilename2 = (fetcheddfilenamee) => {
     this.setState({filenamefetched2:fetcheddfilenamee});
     console.log(fetcheddfilenamee);
     }
  callbackhandlerfilename3 = (fetcheddfilenamee) => {
      this.setState({filenamefetched3:fetcheddfilenamee});
     }
  callbackhandlerfilename4 = (fetcheddfilenamee) => {
      this.setState({filenamefetched4:fetcheddfilenamee});
      }
  callbackhandlerfilename5 = (fetcheddfilenamee) => {
       this.setState({filenamefetched5:fetcheddfilenamee});
      }
             file1clicked = () => {
               this.setState({fileno:1,filenameclicked1:'clicked1',filenameclicked2:'',filenameclicked3:'',filenameclicked4:'',filenameclicked5:''},() => {
               db.fetchtext(this.state.username,this.state.fileno,this.callbackhandlertext);
               });
            }
             file2clicked = () => {
              this.setState({fileno:2,filenameclicked1:'',filenameclicked2:'clicked2',filenameclicked3:'',filenameclicked4:'',filenameclicked5:''},() => {
                db.fetchtext(this.state.username,this.state.fileno,this.callbackhandlertext);
              });
          }
            file3clicked = () => {
              this.setState({fileno:3,filenameclicked1:'',filenameclicked2:'',filenameclicked3:'clicked3',filenameclicked4:'',filenameclicked5:''},() => {
                db.fetchtext(this.state.username,this.state.fileno,this.callbackhandlertext);});
          }
            file4clicked = () => {
              this.setState({fileno:4,filenameclicked1:'',filenameclicked2:'',filenameclicked3:'',filenameclicked4:'clicked4',filenameclicked5:''},() => {
                db.fetchtext(this.state.username,this.state.fileno,this.callbackhandlertext);
              });
          }
            file5clicked = () => {
              this.setState({fileno:5,filenameclicked1:'',filenameclicked2:'',filenameclicked3:'',filenameclicked4:'',filenameclicked5:'clicked5'},() => {
                db.fetchtext(this.state.username,this.state.fileno,this.callbackhandlertext);
              });
          }


  file1clickedhandler = () => {
    if(this.state.filenamefetched1!==null){
    this.file1clicked();
          }
        }
  file2clickedhandler = () => {
    if(this.state.filenamefetched2!==null){
    this.file2clicked();
        }
      }
  file3clickedhandler = () => {
    if(this.state.filenamefetched3!==null){
    this.file3clicked();
      }
    }
  file4clickedhandler = () => {
    if(this.state.filenamefetched4!==null){
    this.file4clicked();
    }
  }
  file5clickedhandler = () => {
    if(this.state.filenamefetched5!==null){
    this.file5clicked();
  }
}
returnall = () => {
  return(
    <div>
  <div class="newfilearea">
<input type="text" onChange={this.changefilename}  value={this.state.filename}></input>
<button onClick={() => {this.newfile()}}>new file</button>
</div>
<div class="aholder"><div class="a" id={this.state.filenameclicked1}onClick={this.file1clickedhandler}>{this.state.filenamefetched1}</div><div class="a" id={this.state.filenameclicked2} onClick={this.file2clickedhandler}>{this.state.filenamefetched2}</div><div class="a" id={this.state.filenameclicked3} onClick={this.file3clickedhandler}>{this.state.filenamefetched3}</div><div class="a" id={this.state.filenameclicked4} onClick={this.file4clickedhandler}>{this.state.filenamefetched4}</div><div class="a" id={this.state.filenameclicked5} onClick={this.file5clickedhandler}>{this.state.filenamefetched5}</div></div>
<textarea type="time" onChange={this.inputchange} value={this.state.inputtextfetched}></textarea>
<button onClick={this.savetext} class="savetext">save!</button>
<button onClick={() => {this.deletefile()}} class="deletebutton">delete file</button>
</div>
  )
}
showerrorscreen = () => {
  return(
    <div>
      <h1 className="errormsg">please sign in or sign up from the login page</h1>
      <a href="/"> <div class="myButton"> go to login page</div></a>
    </div>
  )
}
     savetext = () => {
      db.updatetext(this.state.username,this.state.fileno,this.state.inputtextfetched);
     }
     
  render(){
    if(this.state.bruh){
      this.setState({bruh: false});
      this.setusername();
    }
    if(this.state.signedin==='signedin'){
    var whattoshow = this.returnall();
    }else{
    var whattoshow = this.showerrorscreen();
    }
  return (
  <div>
{whattoshow}
        </div>
    );
  }
  }
  export default Main;
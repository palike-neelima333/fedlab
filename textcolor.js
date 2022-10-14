import React,{Component} from "react";
class TextColor extends Component{
   constructor(props){
      super(props);
      this.state={
        color:'#FFOOFF'
      };
   }
   setRed=(e)=>{
     this.setstate({color:"FFOOOO"});
   };
   setOrange=(e)=>{
     this.setState({colorr:"orange"});
   };
   setBlue=(e)=>{
      this.setstate({color:"#OOOFF"});
   };
render(){
  return(
    <div>
      <h1 style={{color:this.State.color}}>this is CSE C classroom</h1>
      <button onclick={this.setRed}>Red</button>
      <button onClick={this.setOrange}>orange</button>
      <button onCLick={this.setBlue}>Blue</button>
    </div>

  );
}
}


app.js:

import './APP.CSS'
import TextColor from"./TextColor";
function APP(){
  return(
     <div style={{width:'90%',margin:'0 auto'}}>
     <TextColor/>
     </div>
  );
}
export default APP;




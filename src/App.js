//NODE_ENV=production node_modules/react-scripts/bin/react-scripts.js start
import React from 'react'
import TopHeader from './components/TopHeader'
import Main from './components/Main'
import About from './components/About'
import Contact from './components/Contact'
import Other from './components/Other'
import UserForm from './components/UserForm'
import './style.css'

import $ from 'jquery'
import {useSelector, useDispatch} from 'react-redux'

class App extends React.Component{
  constructor(props){
    super()
    this.state={opt:0, flagIsVisible:false,
      project:[],
      store : props.store
    }
    this.getMain=this.getMain.bind(this)
    this.setOpt=this.setOpt.bind(this)
    this.getOpt=this.getOpt.bind(this)
  }

  getMain(){
    let main;
    switch(Number(this.state.opt)){
      case 0:
        main=<Main project={this.state.project} />
      break;
      case 1:
        main=<About />
      break;
      case 2:
        main=<Contact />
      break;
      case 3:
        main=<Other />
      break;
    }
    return main
  }
  getOpt(){
    return this.state.opt
  }
  setOpt(n){
    //console.log("n:" +n)
    this.setState({opt:n})
  }
  componentDidMount(){//async
    this.flagDisplay()
    /*try {
      const res = await fetch('http://localhost:8000/project/'); // fetching the data from api, before the page loaded
      const project = await res.json();
      //console.log("this" + project);
      this.setState({
        project
      });
    } catch (e) {
      console.log("ERROR: " + e);
    }*/
  }
  flagDisplay =()=>{
    $("#flagBTN").click(()=>{

      if(this.state.flagIsVisible===false){
        
        $("#flagUserForm").animate({opacity:1}, 1000, ()=>{})
        $("#flagUserForm").css("display", "")
      }else{
        $("#flagUserForm").animate({opacity:0}, 1000, ()=>{$("#flagUserForm").css("display", "none")})
      }
      this.setState({flagIsVisible:!this.state.flagIsVisible})
      
    });
  }

  render(){
    
    return (<div>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,300;0,400;0,600;1,400&display=swap" rel="stylesheet"/> 
      <br/><br/>
      <UserForm />
      <TopHeader selectedOpt={this.state.opt} getOpt={this.getOpt} setOpt={this.setOpt} />
      {this.getMain()}
    </div>)
  }
}
export default App
import React from 'react'
import TopHeader from './components/TopHeader'
import Main from './components/Main'
import About from './components/About'
import Contact from './components/Contact'
import Other from './components/Other'
import './style.css'
import $ from 'jquery'
class App extends React.Component{
  constructor(){
    super()
    this.state={opt:0, flagIsVisible:false}
    this.getMain=this.getMain.bind(this)
    this.setOpt=this.setOpt.bind(this)
    this.getOpt=this.getOpt.bind(this)
  }
  getMain(){
    let main;
    switch(Number(this.state.opt)){
      case 0:
        main=<Main />
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
  componentDidMount(){
    this.flagDisplay()
  }
  flagDisplay =()=>{
    $("#flagBTN").click(()=>{
      if(this.state.flagIsVisible===false)
        $("#flagImg").animate({opacity:1}, 1000, ()=>{console.log("done")})
      else
      $("#flagImg").animate({opacity:0}, 1000, ()=>{console.log("done")})
      this.setState({flagIsVisible:!this.state.flagIsVisible})
    });
  }
  render(){
    return (<div>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,300;0,400;0,600;1,400&display=swap" rel="stylesheet"/> 
      <br/><br/>
      <img id="flagImg" src="https://cdn.britannica.com/36/22536-004-9855C103/Flag-Union-of-Soviet-Socialist-Republics.jpg"
        style={{position:'fixed', left:window.length/2, opacity:0}}
      />
      <TopHeader selectedOpt={this.state.opt} getOpt={this.getOpt} setOpt={this.setOpt} />
      {this.getMain()}
    </div>)
  }
}
export default App
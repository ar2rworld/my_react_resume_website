import React from 'react'
import TopHeader from './components/TopHeader'
import Main from './components/Main'
import './style.css'
class App extends React.Component{
  constructor(){
    super()
    this.state={opt:0}
    this.getMain=this.getMain.bind(this)
  }
  getMain(){
    console.log("0 opt")
    let main;
    switch(this.state.opt){
      case 0:
        main=<Main />
      break;
    }
    return main
  }
  render(){
    return (<div>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,300;0,400;0,600;1,400&display=swap" rel="stylesheet"/> 
      <TopHeader />
      {this.getMain()}
    </div>)
  }
}
export default App
import React from 'react'
import TopHeader from './components/TopHeader'
import Main from './components/Main'
import About from './components/About'
import Contact from './components/Contact'
import Other from './components/Other'
import './style.css'
class App extends React.Component{
  constructor(){
    super()
    this.state={opt:0}
    this.getMain=this.getMain.bind(this)
    this.setOpt=this.setOpt.bind(this)
  }
  getMain(){
    let main;
    switch(this.state.opt){
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
  setOpt(n){
    console.log("n:" +n)
    this.setState({opt:n})
  }
  render(){
    return (<div>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,300;0,400;0,600;1,400&display=swap" rel="stylesheet"/> 
      <TopHeader setOpt={this.setOpt} />
      {this.getMain()}
    </div>)
  }
}
export default App
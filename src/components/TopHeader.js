import React, { Component } from 'react'
import MenuOption from './MenuOption'
class TopHeader extends Component{
  constructor(props){
    super()
    this.state={setOpt:props.setOpt, selectedOpt:props.selectedOpt,
    getOpt:props.getOpt}
  }
  render(props){
    return(<div className="menuHeader">
        {/*<li onClick={()=>props.setOpt(0)} className='menuOption'>main</li>*/}
        <MenuOption className='menuOption' name="main" selectedOpt={this.state.selectedOpt} getOpt={this.state.getOpt} setOpt={this.state.setOpt} opt="0"/>
        <MenuOption className='menuOption' name="about" selectedOpt={this.state.selectedOpt} getOpt={this.state.getOpt} setOpt={this.state.setOpt} opt="1"/>
        <MenuOption className='menuOption' name="contact" selectedOpt={this.state.selectedOpt} getOpt={this.state.getOpt} setOpt={this.state.setOpt} opt="2"/>
        <MenuOption className='menuOption' name="other" selectedOpt={this.state.selectedOpt} getOpt={this.state.getOpt} setOpt={this.state.setOpt} opt="3"/>
        <img id="flagBTN" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pixilart.com%2Fimages%2Fart%2Fabce8f219c4ef45.gif&f=1&nofb=1" style={{widht:"auto", height:"50px"}}/>
    </div>)
  }
}
export default TopHeader
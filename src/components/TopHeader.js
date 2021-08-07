import { useSelector,useDispatch } from 'react-redux'

import React from 'react'
import MenuOption from './MenuOption'

const TopHeader = props => {
  //const value = useSelector(state => state.value)

  return(<div className="menuHeader">
        {/*<h1>{value}</h1>*/}
        {/*<li onClick={()=>props.setOpt(0)} className='menuOption'>main</li>*/}
        <MenuOption className='menuOption' name="main" selectedOpt={props.selectedOpt} getOpt={props.getOpt} setOpt={props.setOpt} opt="0"/>
        <MenuOption className='menuOption' name="about" selectedOpt={props.selectedOpt} getOpt={props.getOpt} setOpt={props.setOpt} opt="1"/>
        <MenuOption className='menuOption' name="contact" selectedOpt={props.selectedOpt} getOpt={props.getOpt} setOpt={props.setOpt} opt="2"/>
        <MenuOption className='menuOption' name="other" selectedOpt={props.selectedOpt} getOpt={props.getOpt} setOpt={props.setOpt} opt="3"/>
        <img id="flagBTN" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pixilart.com%2Fimages%2Fart%2Fabce8f219c4ef45.gif&f=1&nofb=1" style={{widht:"auto", height:"50px"}}/>
    </div>)
}

export default TopHeader
import React from 'react'
function TopHeader(props){
  return(<div>
    <ul className="menuHeader">
      <li onClick={()=>props.setOpt(0)} className='menuOption'>main</li>
      <li onClick={()=>props.setOpt(1)} className='menuOption'>about</li>
      <li onClick={()=>props.setOpt(2)} className='menuOption'>contact</li>
      <li onClick={()=>props.setOpt(3)} className='menuOption'>other</li>
    </ul>
    <br/>
    <br/>
    <br/>
    <br/>
  </div>)
}
export default TopHeader
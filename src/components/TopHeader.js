import React from 'react'
function TopHeader(props){
  function setOpt(n){
    console.log("opt : " + n)
  }
  return(<div>
    <ul className="menuHeader">
      <li onClick={setOpt(0)} className='menuOption'>home</li>
      <li className='menuOption'>about</li>
      <li className='menuOption'>contact</li>
      <li className='menuOption'>other</li>
    </ul>
    <br/>
    <br/>
    <br/>
    <br/>
  </div>)
}
export default TopHeader
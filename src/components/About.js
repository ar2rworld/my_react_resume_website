import React from 'react'
function About(){
  return(<div>
    <h1>Hello World! This is my react resume website</h1>
    <h2>Technologies used:</h2>
    <ul>
      <li>Reactjs</li>
      <li>jQuery</li>
      <li>Django rest_framework</li>
    </ul>
    {/*<div style={{width:"100px", height:"100px", backgroundColor:"grey"}}></div>*/}
    <h3 style={{textAlign:"center"}}>Some more history:</h3>
    <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.huffingtonpost.com%2F2015-01-06-Berlin1945_USSRflag.jpg&f=1&nofb=1"
      style={{margin:"auto", display:"block", width:"60%"}}
      alt="https://www.huffpost.com/entry/war-and-trade_b_6424338"
    />
    <h4 style={{textAlign:"center"}}>Russian soldier raises the Soviet flag over Berlin 1945.</h4>
    <h2>Good luck to you, keep learning throughtout life</h2>
  </div>)
}
export default About
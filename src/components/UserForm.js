import React, {Component} from "react"
class UserForm extends Component{
  constructor(props){
    super()
    this.state={}
  }
  render(props){return(
    <div id="flagUserForm" style={{
      position:'fixed', left:"50%",display:"none", opacity:0,
      //backgroundImage:'url("https://cdn.britannica.com/36/22536-004-9855C103/Flag-Union-of-Soviet-Socialist-Republics.jpg")'
    }}>
      <div style={{position:"relative"}}>
        <img src="https://cdn.britannica.com/36/22536-004-9855C103/Flag-Union-of-Soviet-Socialist-Republics.jpg"
          style={{width:"100%"}}
        />
        <p style={{position:"absolute", top:"0px", marginLeft:"50%"}}>
        <span>Login</span><input type="text"/>
        <br/>
        <span>Password</span><input type="text"/>
        <br/>
        <button style={{width:"100%", backgroundColor:"#333",height:"50px"}}/>
        </p>
      </div>
    </div>
  )}
}
export default UserForm
import React, {Component} from "react"

class Post extends Component{
  constructor(props){
    super()
    this.state={}
  }
  render(){return(
    <div>
      <h2 className="PostTitle">Title</h2>
      <h3>Post Content</h3>
      <img src="" style={{backgroundColor:"grey", width:"100px", height:"70px", margin:"auto", display:"block"}}/>
    </div>
  )}
}

export default Post
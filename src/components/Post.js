import React, {Component} from "react"

class Post extends Component{
  constructor(props){
    super()
    this.state={mainUrl:props.mainUrl?props.mainUrl:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd1yjjnpx0p53s8.cloudfront.net%2Fstyles%2Flogo-thumbnail%2Fs3%2F0001%2F1595%2Fbrand.gif%3Fitok%3DBocODtcV&f=1&nofb=1",
      title:props.title?props.title:"Post title(needs update)",
      content:props.content?props.content:"Some content(needs update)"
    }
  }
  render(){return(
    <div>
      <h2 className="PostTitle">{this.state.title}</h2>
      <img src={this.state.mainUrl} style={{backgroundColor:"grey", width:"80%", height:"auto", margin:"auto", display:"block"}}/>
      <h3>{this.state.content}</h3>
    </div>
  )}
}

export default Post
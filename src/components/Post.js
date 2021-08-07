import React, {Component} from "react"

class Post extends Component{
  constructor(props){
    super()
    this.state={mainUrl:props.mainUrl?props.mainUrl:"https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0001/1595/brand.gif?itok=BocODtcV&f=1&nofb=1",
      title:props.title?props.title:"Post title(needs update)",
      content:props.content?props.content:"Some content(needs update)"
    }
  }
  render(){return(
    <div>
      <h2 className="PostTitle">{this.state.title}</h2>
      <img src={this.state.mainUrl} alt={this.state.title+' image'} style={{backgroundColor:"grey", width:"auto", height:"20%", margin:"auto", display:"block"}}/>
      <h3>{this.state.content}</h3>
    </div>
  )}
}

export default Post
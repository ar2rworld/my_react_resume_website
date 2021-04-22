import React, {Component} from "react"

class Product extends Component{
  constructor(props){
    super()
    this.state={url:(props.url?props.url:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd1yjjnpx0p53s8.cloudfront.net%2Fstyles%2Flogo-thumbnail%2Fs3%2F0001%2F1595%2Fbrand.gif%3Fitok%3DBocODtcV&f=1&nofb=1"),
    alt:(props.alt?props.alt:"Product image"),
    name:(props.name?props.name:"Product name"),
    width:(props.width?props.width:"100%"),
    height:(props.height?props.height:"auto"),
    description:(props.description?props.description:"Another russian toy")
    }
  }
  render(){return(
    <div className="Product" style={{padding:"10px", border:"2px red solid", width:"auto", margin:"5px"}}>
      <img src={this.state.url} style={{width:this.state.width, height:this.state.height}} alt={this.state.alt}/>
      <h4>{this.state.name}</h4>
      <h5>{this.state.description}</h5>
    </div>
  )}
}

export default Product
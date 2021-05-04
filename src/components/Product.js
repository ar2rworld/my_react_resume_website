import React, {Component} from "react"
import $ from "jquery"

class Product extends Component{
  constructor(props){
    super()
    this.state={url:(props.url?props.url:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd1yjjnpx0p53s8.cloudfront.net%2Fstyles%2Flogo-thumbnail%2Fs3%2F0001%2F1595%2Fbrand.gif%3Fitok%3DBocODtcV&f=1&nofb=1"),
    alt:(props.alt?props.alt:"Product image"),
    name:(props.name?props.name:"Product name"),
    width:(props.width?props.width:"50%"),
    height:(props.height?props.height:"auto"),
    description:(props.description?props.description:"Another russian toy"),
    price:(props.price?props.price:0)
    }
  }
  componentDidMount(){
    this.addEffect()
  }
  addEffect=()=>{
    $('.Product').mouseenter((obj)=>{
      obj.currentTarget.childNodes.forEach(c=>{if(c.className==="redBColor"){
        $(c).animate({opacity:1}, 100);
      }})
    })
    $('.Product').mouseleave((obj)=>{
      obj.currentTarget.childNodes.forEach(c=>{if(c.className==="redBColor"){
        $(c).animate({opacity:0.6}, 100)
      }})
    })
    /*$(".redBColor").mouseenter((obj)=>{
      //console.log(obj)
      $(obj.currentTarget).animate({opacity:1}, 100)
    })
    $('.redBColor').mouseleave((obj)=>{
      $(obj.currentTarget).animate({opacity:0.6}, 100)
    })*/
  }
  render(){return(
    <div className="Product" style={{padding:"10px", border:"2px red solid", width:"auto", margin:"5px"}}>
      <div className="redBColor" style={{width:"100%", height:"100%", opacity:"0.5"}}></div>
      <img src={this.state.url} style={{display:"block",margin:"auto", width:this.state.width, height:this.state.height}} alt={this.state.alt}/>
      <h4>{this.state.name}</h4>
      <h5>{this.state.description}</h5>
      <h4 className="yellow" style={{fontStyle:"italic", textAlign:"right"}}>₽{this.state.price!=="0"?this.state.price:"Free for comrads"}</h4>
    </div>
  )}
}

export default Product
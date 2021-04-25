import React, {Component} from 'react'
class MenuOption extends Component{
  constructor(props){
    super()
    this.state={selectedOpt:props.selectedOpt,
      className: props.className,
      setOpt:props.setOpt,
      name:(props.name?props.name:"Error"),
      opt:props.opt,
      getOpt:props.getOpt
    }
    //this.setState({opt: props.opt, name:props.name})
  }
  componentDidMount(){
    //this.setState({name:})
  }
  render(props){
    return(
        <div className={this.state.className}
        style={{color:(this.state.getOpt() == this.state.opt?"#00ffaa":"#000")}}
        onClick={()=>{
          this.state.setOpt(this.state.opt);
          console.log(this.state.selectedOpt);
          this.style=(this.state.selectedOpt == this.state.opt?"#00ffaa":"#000");
        }}>{this.state.name}</div>
    )
  }
}
export default MenuOption
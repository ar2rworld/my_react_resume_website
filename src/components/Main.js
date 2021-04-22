import React, {Component} from 'react'
import Shop from "./Shop"
class Main extends Component{
  constructor(){
    super()
    this.state={isSelected:false}
  }
  render(props){
    return(<div className="Main">
      <div className="main">
        <p>
        <h1>Hello comrad!</h1>
        <h2>And welcome to my website for real communists.<br/>Here you will see some information about your brother: Artur Linnik</h2>
        </p>
        <Shop />
      </div>


    </div>)
  }
}
export default Main
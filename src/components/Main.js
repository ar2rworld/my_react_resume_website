import React, {Component} from 'react'
import Shop from "./Shop"
class Main extends Component{
  constructor(props){
    super()
    this.state={isSelected:false,
    project:props.project}
  }
  render(props){
    return(<div className="Main">
      <div className="main">
        <p>
        <h1>Hello comrad!</h1>
        <h2>And welcome to the website for real communists.<br/>Here you will see some information about your leader: Vladimir Lenin</h2>
          <div className="imageWrap" style={{width:"100%", height:"auto"}}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Vladimir_Lenin.jpg/220px-Vladimir_Lenin.jpg"
              style={{float:"right",height:"", padding:"5px", height:"200px"}}
            />
            <p style={{padding:"5px 10px", width:"", textAlign:"justify"}}>
            <span style={{fontStyle:"italic"}}>Vladimir Ilyich Ulyanov</span>(22 April [O.S. 10 April] 1870 – 21 January 1924), better known by his alias Lenin,[c] was a Russian revolutionary, politician, and political theorist. He served as the first and founding head of government of Soviet Russia from 1917 to 1924 and of the Soviet Union from 1922 to 1924. Under his administration, Russia, and later the Soviet Union, became a one-party socialist state governed by the Soviet Communist Party. A Marxist, he developed a variant of this communist ideology known as Leninism.
            </p>
          </div>
        </p>
        <Shop />
      </div>


    </div>)
  }
}
export default Main
import React, {Component} from 'react'
class ContactForm extends Component{
  constructor(props){
    super()
    this.state={}
    this.submit=this.submit.bind(this)
    this.onChange=this.onChange.bind(this)
  }
  onChange=(event)=>{
    const {name, value, type} = event.target;
    this.setState({[name] : value})
  }
  submit=(e)=>{
    e.preventDefault();
    alert(`Thank you ${this.state.name} for your message, Our team will contact you shortly(your email:${this.state.email})!`)
  }
  render(){return(<form onSubmit={this.submit} style={{backgroundColor:"rgba(204,0,0,0.6)", margin:"0% auto", padding:"2%", width:"35%", border:"3px solid red"}}>
    <h3>Name: </h3>
    <input
      required  onChange={this.onChange}
      name="name" type="text"
      style={{backgroundColor:"red"}}
    />
    <h3>Email: </h3>
    <input
      required onChange={this.onChange}
      name="email" type="email"
      style={{backgroundColor:"red"}}
    />
    <h3>Your message:</h3>
    <textarea
      onChange={this.onChange} name="message"
      style={{height:"auto", width:"90%",backgroundColor:"red"}}>
    </textarea><br/>
    <button type="submit" style={{backgroundColor:"red", marginBottom:"0%",marginTop:"3%", width:"100%"}} >Submit</button>
  </form>)}
}
export default ContactForm;
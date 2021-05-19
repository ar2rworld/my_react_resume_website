import React , {useState, useEffect} from 'react';
const SubscribeForm =()=>{
  const [email, setEmail] = useState("");
  const change=(e)=>{
    const {name, value} = e.target;
    setEmail(value);
    console.log(email);
  }
  const onSubmit=(e)=>{
    e.preventDefault();
    //setEmail(e.target.value);
  }
  useEffect(()=>{
    console.log("API call here");
  })
  return (<div style={{margin:"2%",padding:"1%", width:"auto",border:"green 3px solid", textAlign:"center"}}>
    <form onSubmit={(e)=>{
      e.preventDefault();
      setEmail(e.target.value);
      alert("You email is " + email+"\nThank you for subscription!");
    }}>
    <p>You email: <input required name="email" type="email"  value={email} onChange={(e)=>{
      setEmail(e.target.value);
    }}/></p>
    <button type="submit">Subscribe!</button>
    </form>
  </div>)
}
export default SubscribeForm
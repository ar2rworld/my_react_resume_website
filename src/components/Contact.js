import React from 'react'
import ContactForm from './ContactForm'
function Contact(){
  return(<div>
    <h2>Some ways to contact me:</h2>
    <ul>
      <li>Personal email: ar2r.world[at]gmail[dot]com</li>
      <li>Linked-In: <a href="https://www.linkedin.com/in/artur-linnik-ba42b4192/">https://www.linkedin.com/in/artur-linnik-ba42b4192/</a></li>
      <li>Github: <a href="https://github.com/ar2rworld">https://github.com/ar2rworld</a></li>
    </ul>
    <ContactForm />
  </div>)
}
export default Contact
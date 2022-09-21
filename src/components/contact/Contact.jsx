import './contact.css'
import {FaPaperPlane} from 'react-icons/fa'
const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <h2><span>03.</span> Contact Me</h2>
      <div className="container">
        <p className='icon'><FaPaperPlane className='icon'/></p>
        <h2 className='this'>Get In Touch</h2>
        <p className='text'>
        Whether you have an idea for a project or just want to chat, feel free to shoot me an email!
        ,I’ll try my best to get back to you!
        </p>
        <a href="mailto:abdessamad.studio@proton.me">Say Hello</a>
      </div>
    </div>
  )
}

export default Contact

import './contact.css'
import {FaPaperPlane} from 'react-icons/fa'
import { Facebook, Github, Linkedin } from '../about/imports'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Contact = () => {
  const navigate = useNavigate()
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
        <a href="mailto:abdessamad.maaroufi12@gmail.com">Say Hello</a>
        <div className="social-media">
          <ul className='media'>
        <Facebook className='facebook' fill="#fff"/> 
        <Linkedin className='linkedin' fill="#fff" />
        <Github  className='github'  fill="#fff" />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Contact

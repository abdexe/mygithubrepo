import './header.css'
import {FaDownload } from 'react-icons/fa'
const Header = () => {
  return (
    <header>
       <div className="header-top">
        <p>Hi, my name is</p>
        <h1>Abdessamd EL-Maaroufi</h1>
        <h2>I build things for the web </h2>
       </div>
       <div className="email"><p>abdessamad.maaroufi12@gmail.com</p></div>
       <div className="line"></div>
       <div className="header-bottom">
        <p style={{lineHeight: '3rem'}} >I’m a <span> Junior Software Developer</span> with a passion for front end development and design</p>
        I'm currently pursuing a BAC+5 degree in informatique & computer science  at FST Beni Mellal  with a minor in interaction design <button type='file'>Download Resume <FaDownload className='icon' /></button>
       </div>  
    </header>
  )
}

export default Header

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
       <div className="email"><p>abdessamd.studio@proton.me</p></div>
       <div className="line"></div>
       <div className="header-bottom">
        <p>I’m a <span> graphic designer</span> specializing in building (and occasionally designing) 
          exceptional Visual identity graphic design, Brand Identity , User interfaces and Digital Art. 
          Currently, I’m focused on building my own Business</p>
          <button type='file'>Download Resume <FaDownload className='icon' /></button>
       </div>  
    </header>
  )
}

export default Header

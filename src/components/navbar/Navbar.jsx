import './navbar.css'
import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const navigate = useNavigate()
  return (
    <nav>
      <div onClick={()=>navigate('/')} className="logo">
        <img src={logo} alt="" />
      </div>

      <div className="navbar">
        <ul>
         <li><a href="#about"><span>01.</span> About</a></li>
         <li><a href="#projects"><span>02.</span>Projects</a></li>
         <li><Link  to='/digital' ><a href="#work"><span>03.</span> Work</a></Link></li>
         <li><a href="#contact"><span>04.</span> Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

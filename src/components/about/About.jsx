import './about.css'
import me from '../../assets/me.jpg'
import { 
  ReactJS ,Javascript, Css,Html,Tailwindcss, Bootstrap, Nodejs,Mongo, Expressjs } from './imports' 
const About = () => {
  return (
    <div className='about' id='about'>
      <div className="about__left">
        <h2><span>01.</span> About Me</h2>
        <p>
        Hello! My name is Abdessamad and I enjoy creating things that live on the internet.
        My interest in web development started back in 2018 when I decided
        to make a Landing page for a product to advertise it on facebook</p>

        <p> Fast-forward to today, and I’ve had the privilege of Continue my studies in this field. 
        <span> My main focus these days 
         is  to work as a developer </span> & building accessible, inclusive products and digital experiences for a 
         variety of clients.</p>

         <p> Here are a few technologies I’ve been working with recently:</p>
         <div className="softwares">
          <ul>
            <li> <Html className='icon'/>HTML5</li>
            <li> < Css  className='icon'/>CSS3</li>
            <li> <Javascript className='icon'/>JAVASCRIPT</li>
          </ul>
          <ul>
            <li><Tailwindcss className='icon'/>Tailwindcss</li>
            <li> <Bootstrap className='icon'/>Bootstrap</li>
            <li><ReactJS className='icon'/> React JS</li>
          </ul>
          <ul>
            <li><Expressjs className='icon'/> Express js</li>
            <li><Nodejs className='icon'/>Node JS</li>
            <li> <Mongo className='icon'/>MongoDB</li>
          </ul>
         </div>
      </div>
      <div className="about-right">
        <div className='box'>
        <img src={me} alt="" />
        <div className="line"></div>
        </div>
      </div>
    </div>
  )
}

export default About

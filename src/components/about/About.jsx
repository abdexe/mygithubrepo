import './about.css'
import me from '../../assets/me.jpg'
import { AdobeIlustrator,
  ArtFlow,Corel, AdobeIndesign, AdobePhotshop, Figma } from './imports' 
const About = () => {
  return (
    <div className='about' id='about'>
      <div className="about__left">
        <h2><span>01.</span> About Me</h2>
        <p>
        Hello! My name is Abdessamad and I enjoy creating things that live on the internet.
         My interest in Design and colors started back in 2017 when I decided to try editing 
         custom bloaring pictures</p>

        <p> Fast-forward to today, and I’ve had the privilege of working at an <span>advertising agency,
        </span> a <span> start-up as infogrpahiste</span> , and a <span>student-led design studio</span> . My main focus these days 
         is building accessible, inclusive brand indetity and digital experiences for a
          variety of clients.</p>

         <p> Here are a few tools I’ve been working with recently:</p>
         <div className="softwares">
          <ul>
            <li> <AdobePhotshop className='icon'/> Adobe Photoshop</li>
            <li> <AdobeIlustrator className='icon'/>  Adobe Ilustrator</li>
            <li> <AdobeIndesign className='icon'/>  Adobe InDesign</li>
          </ul>
          <ul>
            <li><Corel className='icon'/> Corel Idraw</li>
            <li> <Figma className='icon'/> Figma</li>
            <li><ArtFlow className='icon'/> ArtFlow</li>
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

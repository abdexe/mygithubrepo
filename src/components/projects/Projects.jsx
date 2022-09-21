import './projects.css'
import ui from '../../assets/ui.png'
import {useNavigate} from 'react-router-dom'
import branding from '../../assets/branding.png'
import digital from '../../assets/digital.png'
import { AdobeIlustrator,
  ArtFlow,Corel, AdobeIndesign, AdobePhotshop, Figma }from '../about/imports'
const Projects = () => {
  const navigate = useNavigate()
  const onClick = (e)=>{
    if(e.target.id === 'digital'){
    navigate('/digital')
    }else if(e.target.id === 'ui'){
     navigate('/ui')
    }else {
      navigate('/branding')
    }}
  return (
    <div className='projects' id='projects'>
      <h2><span>02.</span> Projects I've Done</h2>
      <div className="container">
         <div className="card">
          <img src={branding} alt="" />
          <h3>Visual Identity</h3>
          <p>logo, typography, and other design components that makes a 
            brand stand out from competitors, and recognizable to consumers </p>
          <div className="softwares">
            <ul>
              <li><AdobeIlustrator className='icon' /></li>
              <li><AdobePhotshop className='icon'/></li>
            </ul>
          </div>
          <button onClick={onClick} id="branding" >Explore</button>
         </div>

         <div className="card">
          <img src={ui} alt="" />
          <h3>User Interfaces</h3>
          <p>design process.some professional work in user research, ideation,
             wireframing, prototyping, and usability testing!</p>
          <div className="softwares">
            <ul>
            <li><Figma className='icon'/></li>
            <li><AdobeIndesign className='icon'/></li>
            </ul>
          </div>
          <button onClick={onClick} id="ui" >Explore</button>
         </div>

         <div className="card">
          <img src={digital} alt="" />
          <h3>Digital Art</h3>
          <p> part of the creative or presentation process,
             presented  some coole effect in Anime and characters using digital technology!</p>
          <div className="softwares">
            <ul>
            <li><ArtFlow className='icon'/></li>
            <li><Corel className='icon'/></li>
            </ul>
          </div>
          <button onClick={onClick} id="digital" >Explore</button>
         </div>
      </div>
    </div>
  )
}

export default Projects

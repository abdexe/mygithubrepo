import './projects.css'
import {useNavigate} from 'react-router-dom'
import { 
  ArtFlow ,Javascript, Css,Html,Tailwindcss, Bootstrap, Nodejs,Mongo } from '../about/imports' 
import { ReactJS } from '../about/imports'

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
          <img src='' alt="" />
          <h3>Visual Identity</h3>
          <p>logo, typography, and other design components that makes a 
            brand stand out from competitors, and recognizable to consumers </p>
          <div className="softwares">
            <ul>
              <li><Javascript className='icon' /></li>
              <li><Html className='icon'/></li>
            </ul>
          </div>
          <button onClick={onClick} id="branding" >Explore</button>
         </div>

         <div className="card">
          <img src='' alt="" />
          <h3>User Interfaces</h3>
          <p>design process.some professional work in user research, ideation,
             wireframing, prototyping, and usability testing!</p>
          <div className="softwares">
            <ul>
            <li><ReactJS className='icon'/></li>
            <li><Nodejs className='icon'/></li>
            </ul>
          </div>
          <button onClick={onClick} id="ui" >Explore</button>
         </div>

         <div className="card">
          <img src='' alt="" />
          <h3>Digital Art</h3>
          <p> part of the creative or presentation process,
             presented  some coole effect in Anime and characters using digital technology!</p>
          <div className="softwares">
            <ul>
            <li><Tailwindcss className='icon'/></li>
            <li><Bootstrap className='icon'/></li>
            </ul>
          </div>
          <button onClick={onClick} id="digital" >Explore</button>
         </div>
      </div>
    </div>
  )
}

export default Projects

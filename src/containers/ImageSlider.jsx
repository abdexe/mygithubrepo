import { useState } from "react"
import './imageslider.css'
import {FaArrowLeft, FaArrowRight,FaCircle} from 'react-icons/fa'
const ImageSlider = ({slides}) => {

const [currentIndex, setCurrentIndex] = useState(0)

const sliderStyles = {
    height: '100%',
    position: 'relative',
    marginTop: '2rem',
    
 
}
const slideStyles = {
    width: '100%',
    height: '100%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    borderRadius: '10px',
    backgroundImage: `url(${slides[currentIndex]})`

}
const LeftStyles = {
    position:'absolute',
    top: '50%',
    transform: 'translate(0,-50%)',
    left: '10px',
    fontSize:'30px',
    color:'#64ffda',
    zIndex: 1,
    cursor: 'pointer'
  }
  const RightStyles = {
    position:'absolute',
    top: '50%',
    transform: 'translate(0,-50%)',
    right: '10px',
    fontSize:'30px',
    color:'#64ffda',
    zIndex: 1,
    cursor: 'pointer'
  }
  const dotsContainerStyles = {
    display: 'flex',
    justifyContent: 'center',

  }
  const dotsStyle = {
    margin: '0.5rem 0.5rem',
    cursor :'pointer',
    color:'#8892b0',
    fontSize: '10px'
  }
  const goToPreviuos = ()=>{
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
   setCurrentIndex(newIndex)
  }
  const goToNext = ()=>{
    const isLastIndex = currentIndex === slides.length - 1
    const newIndex = isLastIndex ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }
  const goToSlide = (slideIndex)=>{
   setCurrentIndex(slideIndex)
  }
  return (
    
    <div className="image-slider" style={sliderStyles}>
   <div style={LeftStyles} onClick={goToPreviuos} ><FaArrowLeft/></div>
   <div style={RightStyles} onClick={goToNext} ><FaArrowRight/></div>
    <div  style={slideStyles}></div>
    <div style={dotsContainerStyles}>{slides.map((slide,slideIndex)=>(
        <div style={dotsStyle} onClick={()=>goToSlide(slideIndex)} key={slideIndex}><FaCircle/></div>
    ))}</div>
    <div className="title">Starbucks UI</div>
    </div>
  )
}

export default ImageSlider

import './container.css'
import ImageSlider from './ImageSlider'
import ImageSlider2 from './ImageSlider2'
import ImageSlider3 from './ImageSlider3'
import ImageSlider4 from './ImageSlider4'
import ImageSlider5 from './ImageSlider5'
import ImageSilder6 from './ImageSilder6'
import {A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,PQ,R,S,T,U,V,W,X,Y,Z,AA,BB,CC,DD,EE
,FF,GG,HH,II,JJ,KK,LL} from './imports'

const UI = () => {
  const slides = [A,B,C,D,E,F]
  const slides2 = [G,H,I,J,K]
  const slides3 = [L,M,N,O,PQ]
  const slides4 = [R,S,T,U,V,W,]
  const slides5 = [X,Y,Z,AA,BB,CC,DD,EE]
  const slides6 = [FF,GG,HH,II,JJ,KK,LL]
  const containerStyles = {
    width: '500px',
    height: '280px',
  }
  return (
    <div className="container__work">
      <h2 className='text-blue'>UI & UX Design</h2>
      <div className='container-style'>
      <div className="container"style={containerStyles} >
         <ImageSilder6 slides={slides6} />
      </div>
      <div className="container"style={containerStyles} >
         <ImageSlider2 slides={slides2} />
      </div>

      <div className="container"style={containerStyles} >
         <ImageSlider3 slides={slides3} />
      </div>
      <div className="container"style={containerStyles} >
         <ImageSlider4 slides={slides4} />
      </div>
      <div className="container"style={containerStyles} >
         <ImageSlider5 slides={slides5} />
      </div>
      <div className="container"style={containerStyles} >
         <ImageSlider slides={slides} />
      </div>

      </div>
    </div>
  )
}

export default UI

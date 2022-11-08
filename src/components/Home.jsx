import Header from '../components/header/Header'
import About from './about/About'
import Contact from './contact/Contact'
import Projects from './projects/Projects'
const Home = () => {
  return (
    <div>
      <Header/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default Home

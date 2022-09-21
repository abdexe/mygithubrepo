import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import UI from './containers/UI'
import Branding from './containers/Branding'
import Digital from './containers/Digital'
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Home from './containers/Home';
function App() {
  return (
    <>
    <Router>
    <div className="App">
        <Navbar/>
        <Routes>
        <Route  path='/'  element={<Home/>} />
        <Route  path='/ui'  element={<UI/>} />
        <Route  path='/branding'  element={<Branding/>} />
        <Route  path='/digital'  element={<Digital/>} />
        </Routes>
        <Footer/>
    </div>
    </Router>
    </>
  );
}

export default App;

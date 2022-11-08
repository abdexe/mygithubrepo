import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './components/Home';
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
function App() {
  return (
    <>
    <Router>
    <div className="App">
        <Navbar/>
        <Routes>
        <Route  path='/'  element={<Home/>} />
        </Routes>
        <Footer/>
    </div>
    </Router>
    </>
  );
}

export default App;

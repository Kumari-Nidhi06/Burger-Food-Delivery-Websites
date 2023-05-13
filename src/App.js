
import './App.css';
import Navbar from './component/Navbar';
import HomePage from './pages/HomePage';
import Menu from './pages/Menu';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from './component/Footer';
import About from './pages/About';
import Contact from './pages/Contact';


function App() {
  return (
    <div className="App">
    <Router>
    <Navbar />
     <Routes>
      <Route exact path="/" element={<HomePage/>}/>
      <Route exact path = "/menu" element={<Menu/>} />
      <Route exact path = "/about" element={<About/>} />
      <Route exact path = "/contact" element={<Contact/>} />
      </Routes>
    </Router>
    <Footer />
    </div>
  );
}

export default App;

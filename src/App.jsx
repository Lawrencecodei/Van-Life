import {BrowserRouter, Routes, Route} from 'react-router-dom';  
import About from './components/about/About';
import Home from './components/home/Home';
import Navbars from './components/navbars/Navbars';
import './app.css';



const App = () => {
    return (
      <BrowserRouter>
      
      <Navbars />
     
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
    );
  }

  export default App;
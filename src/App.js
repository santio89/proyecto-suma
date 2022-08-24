import './styles/css/App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Help from './components/Help';
import PrimeraPuesta from './components/PrimeraPuesta';
import Bebes from './components/Bebes';
import Nenes from './components/Nenes';
import NotFound from './components/NotFound';
import { useState, useEffect } from 'react';

function App() {
  const [darkTheme, setDarkTheme] = useState(false || JSON.parse(localStorage.getItem("sumaDarkTheme")));

  const toggleDarkTheme = () => {
    setDarkTheme(current => !current);
  }

  useEffect(() => {
    localStorage.setItem("sumaDarkTheme", JSON.stringify(darkTheme));
  }, [darkTheme])


  return (
    <>
      {/* CONTEXT (SI USAMOS) */}
      <div className={darkTheme ? 'root-theme dark-theme' : 'root-theme'}>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/*" element={<NotFound />} />
            <Route path='/' element={<Home />} />
            <Route path='/primera' element={<PrimeraPuesta />} />
            <Route path='/bebes' element={<Bebes />} />
            <Route path='/nenes' element={<Nenes />} />
            <Route path='/about' element={<About />} />
            <Route path='/help/:helpSection' element={<Help />} />
          </Routes>

          <Footer darkTheme={darkTheme} toggleDarkTheme={toggleDarkTheme} />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

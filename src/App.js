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

function App() {
  return (
    <>
      {/* CONTEXT (SI USAMOS) */}

      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/primera' element={<PrimeraPuesta />} />
          <Route path='/bebes' element={<Bebes />} />
          <Route path='/nenes' element={<Nenes />} />


          {/*  <Route path="/*" element={<Error404 />} /> */}
          <Route path='/about' element={<About />} />
          <Route path='/help/:helpSection' element={<Help />} />
        </Routes>

        <Footer />
      </BrowserRouter>


    </>
  );
}

export default App;

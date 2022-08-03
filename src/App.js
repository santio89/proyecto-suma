import './styles/css/App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* CONTEXT (SI USAMOS) */}

      

      <BrowserRouter>
        <Navbar/>

        {/* <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/primeraPuesta' element={<PrimeraPuesta />} />
          <Route path='/bebes' element={<Bebes />} />
          <Route path='/nenes' element={<Nenes />} />
          <Route path='/about' element={<About />} />
          <Route path='/help/:helpSection' element={<Help />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>*/}

        <Footer /> 
      </BrowserRouter>


    </>
  );
}

export default App;

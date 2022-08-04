import './styles/css/App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home'

function App() {
  return (
    <>
      {/* CONTEXT (SI USAMOS) */}

      <BrowserRouter>
        <Navbar/>

        <Routes>
          <Route path='/' element={<Home />} />
       {/*    <Route path='/primera' element={<PrimeraPuesta />} />
          <Route path='/bebes' element={<Bebes />} />
          <Route path='/nenes' element={<Nenes />} />
          <Route path='/about' element={<About />} />
          <Route path='/help/:helpSection' element={<Help />} />
          <Route path="/*" element={<Error404 />} /> */}
        </Routes>

        <Footer /> 
      </BrowserRouter>


    </>
  );
}

export default App;

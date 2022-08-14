import '../styles/css/Navbar.css';
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import useScrollPosition from '../utils/useScrollPosition';

const Navbar = () => {

    const scrollPosition = useScrollPosition()

    return (
        <div className={`navbar ${scrollPosition > 80?'scrolled':''}`}>
            <div className='link-logo'>
                <Link className="btn-logo" to='/'>
                    <h1 className="logo-btn">SUMA</h1>
                </Link>
            </div>
            <div className='links'>
                <div className='link-btn'>
                    <NavLink className="btn" to='/primera'>
                        <p className="titulo-btn">PRIMERA PUESTA</p>
                        <p>0 A 12 MESES</p>
                    </NavLink>
                </div>
                <div className='link-btn'>
                    <NavLink className="btn" to='/bebes'>
                        <p className="titulo-btn">BEBÉS</p>
                        <p>6 A 24 MESES</p>
                    </NavLink>
                </div>
                <div className='link-btn'>
                    <NavLink className="btn" to='/nenes'>
                        <p className="titulo-btn">NIÑOS</p>
                        <p>2 A 10 AÑOS</p>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
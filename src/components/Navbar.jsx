import { Link } from 'react-router-dom';
import '../styles/css/Navbar.css';

const Navbar = () => {

    return (
        <div className="navbar">
            <div className='link-logo'>
                <Link className="btn-logo" to='/'>
                    <h1 className="logo-btn">SUMA</h1>
                </Link>
            </div>
            <div className='links'>
                <div className='link-btn'>
                    <Link className="btn" to='/primera'>
                        <p className="titulo-btn">PRIMERA PUESTA</p>
                        <p>0 A 12 MESES</p>
                    </Link>
                </div>
                <div className='link-btn'>
                    <Link className="btn" to='/bebes'>
                        <p className="titulo-btn">BEBÉS</p>
                        <p>6 A 24 MESES</p>
                    </Link>
                </div>
                <div className='link-btn'>
                    <Link className="btn" to='/nenes'>
                        <p className="titulo-btn">NIÑOS</p>
                        <p>2 A 10 AÑOS</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
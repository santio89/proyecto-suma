import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/css/NotFound.css';

const NotFound = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className='section-full'>
            <div className='container'>
                <div className='row'>
                    <div className='div-img'>
                        <img src="./assets/misc/not-found.jpg" alt='Nena disconforme' className='img'/>
                    </div>
                </div>
                <div className='row'>
                    <div>
                        <h2 className='title'>¡Ups!</h2>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <p className='text'>
                            No encontramos la página que estabas buscando.
                        </p>
                    </div>
                </div>
                <div className='row-btn'>
                    <Link to="/" className='btn-volver'>
                        Volver
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default NotFound;
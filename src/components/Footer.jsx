import { Link } from 'react-router-dom';
import '../styles/css/Footer.css';

const Footer = () => {

    return (
        <section>
            <div className='divider'></div>

            <div className="footer">
                <span className='row-links-footer'>
                    <div className='col-footer'>
                        <p className='title-footer'>Conocenos</p>
                        <span className='btn-responsive'>
                            <Link className="btn" to='/about'>
                                <p className="texto-btn">¿Quiénes somos?</p>
                            </Link>
                        </span>
                        
                    </div>
                    <div className='col-footer'>
                        <p className='title-footer'>Ayuda</p>
                        <span className='btn-responsive'>
                            <Link className="btn" to='/help/reception'>
                                <p className="texto-btn">Recepción del pedido</p>
                            </Link>
                            <Link className="btn" to='/help/shipping'>
                                <p className="texto-btn">Plazos y costos de envío</p>
                            </Link>
                            <Link className="btn" to='/help/return'>
                                <p className="texto-btn">Cambios y devoluciones</p>
                            </Link>
                        </span>
                        
                    </div>
                    <div className='col-footer'>
                        <p className='title-footer'>Atención al cliente</p>
                        <span className='btn-responsive'>
                            <p className="texto-btn">Teléfono: 094373344.</p>
                            <p className="texto-btn">Horario de atención: Lunes a viernes de 10 a 18 hs.</p>
                            <p className="texto-btn">Montevideo, Uruguay.</p>
                        </span>
                        
                    </div>
                </span>

                <div className='col-rrss'>
                    <p className='title-footer'>Seguinos en nuestras redes</p>
                    <div className='container-rrss'>
                        <Link className="btn" to=''>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg' alt='Logo de Instagram' className='logos-rrss'/>
                        </Link>
                        <Link className="btn" to=''>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png' alt='Logo de Facebook' className='logos-rrss'/>
                        </Link>
                        <Link className="btn" to=''>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/1/19/WhatsApp_logo-color-vertical.svg' alt='Logo de WhatsApp' className='logos-rrss'/>
                        </Link>
                        <Link className="btn" to=''>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg' alt='Logo de Gmail' className='logos-rrss'/>
                        </Link>
                    </div>
                </div>
            </div>

            <div className='development'>
                <p>Desarrollado por </p>
            </div>
        </section>
    );
};

export default Footer;
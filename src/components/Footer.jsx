import { Link } from 'react-router-dom';
import '../styles/css/Footer.css';

const Footer = ({darkTheme, toggleDarkTheme}) => {

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
                        <a className="btn" href='https://www.instagram.com/sumakids_uy' rel='noreferrer' target='_blank'>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg' alt='Logo de Instagram' className='logos-rrss' />
                        </a>
                        <a className="btn" href='https://www.facebook.com/Sumakids_uy-110894938380819' rel='noreferrer' target='_blank'>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png' alt='Logo de Facebook' className='logos-rrss' />
                        </a>
                        <a className="btn" href='https://api.whatsapp.com/send?phone=59894373344&app=facebook&entry_point=page_cta&fbclid=IwAR19T2feRHoxnjGggw3exR21foISUDZDTjj0S_hna6sWwJ7ETSOJiTWLouE' rel='noreferrer' target='_blank'>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/1/19/WhatsApp_logo-color-vertical.svg' alt='Logo de WhatsApp' className='logos-rrss' />
                        </a>
                        <a className="btn" href='mailto:info@sumamultimarca.com'>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg' alt='Logo de Gmail' className='logos-rrss' />
                        </a>
                    </div>
                </div>
            </div>

            <div className='theme-mode'>
                <div className='theme-mode_inner'>
                    <input type="checkbox" className="checkbox" id="checkbox" onChange={toggleDarkTheme} checked={darkTheme && true} aria-label="light/dark theme - input"/>
                    <label htmlFor="checkbox" className="label-dm" aria-label="light/dark theme - label">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="moon-fill" viewBox="0 0 16 16">
                            <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="sun-fill" viewBox="0 0 16 16">
                            <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                        </svg>
                        <div className='ball' aria-label='light/dark theme - indicator'></div>
                    </label>
                </div>
            </div>

            <div className='development'>
                <p>Desarrollado por
                    <span className='names'> Santiago Olais</span>, <span className='names'>Viviana Petraroia</span>, <span className='names'>Macarena Romero</span> y <span className='names'>Victoria Salvatierra</span>
                </p>
            </div>
        </section>
    );
};

export default Footer;
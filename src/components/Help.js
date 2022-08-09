import { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../styles/css/Help.css';

const Help = () => {
    const [activeTab, setActiveTab] = useState(useLocation().pathname.split("/")[2]);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        setActiveTab(location.pathname.split('/')[2])
    }, [location])

    const modifyTab = (tabName) => {
        setActiveTab(tabName);
        navigate(`/help/${tabName}`);
    }

    return (
        <section className='section-full help'>
            <div className='container'>
                <div className='row'>
                    <div>
                        <h2 className='title'>Ayuda</h2>
                    </div>
                </div>
                <div className='row-links'>
                    <div className='col'>
                        <button onClick={() => modifyTab('reception')}>
                            <h3  className={activeTab === 'reception' ? 'btn-active' : ''}>Recepción del pedido</h3>
                        </button>
                    </div>
                    <div className='col'>
                        <button onClick={() => modifyTab('shipping')}>
                            <h3 className={activeTab === 'shipping' ? 'btn-active' : ''}>Plazos y costos de envío</h3>
                        </button>
                    </div>
                    <div className='col'>
                        <button onClick={() => modifyTab('return')}>
                            <h3 className={activeTab === 'return' ? 'btn-active' : ''}>Cambios y devoluciones</h3>
                        </button>
                    </div>
                </div>

                <section className={activeTab !== 'reception' ? 'inactive' : ''} id='reception'>
                    <div className='row'>
                        <div className='col'>
                            <p className='text'>
                                Puedes elegir recibir tu pedido en un domicilio o retirarlo gratis en nuestra oficina en Carrasco. 
                            </p>
                            <p className='text'>
                                Las entregas a domicilio en Montevideo se realizan en horario de 10:00 a 17:00 hs. en días hábiles.
                            </p>
                            <p className='text'>
                                En el Interior de Uruguay los envíos se realizan únicamente a domicilio o en agencias de DAC.
                            </p>
                        </div>
                    </div>
                </section>
                
                <section className={activeTab !== 'shipping' ? 'inactive' : ''} id='shipping'>
                    <div className='row'>
                        <div className='col'>
                            <section className='paragraph'>
                                <h4>Plazos de envío:</h4>
                                <p className='text'>
                                    El plazo de entrega es de 2 a 3 días hábiles en Montevideo.
                                </p>
                                <p className='text'>
                                    En el interior del país la entrega es de 3 a 5 días hábiles.
                                </p>
                                <p className='text'>
                                    Durante promociones, la entrega de pedidos puede sufrir retrasos. Igualmente siempre será informada si llegan a ocurrir demoras.
                                </p>
                            </section>
                            
                            <section className='paragraph'>
                                <h4>Costos de envío:</h4>
                                <p className='text'>
                                    Dentro de Uruguay, los costos de envío son:
                                </p>
                                <p className='text'>
                                    $200 envíos en 2 a 3 días hábiles a Montevideo.
                                </p>
                                <p className='text'>
                                    $200 para envíos en 5 días hábiles al interior.
                                </p>
                                <p className='text'>
                                    * Para ventas mayores a $5000 el envío es gratuito. *
                                </p>
                            </section>
                            
                            <section className='paragraph'>
                                <h4>Envoltorio del regalo:</h4>
                                <p className='text'>
                                    Los pedidos que sean regalo pueden enviarse envueltos con previa anticipación.
                                </p>
                            </section>
                        </div>
                    </div>
                </section>
                
                <section className={activeTab !== 'return' ? 'inactive' : ''} id='return'>
                    <div className='row' id='return'>
                        <div className='col'>
                            <section className='paragraph'>
                                <h4>Guía de devoluciones:</h4>
                                <p className='text'>
                                    El plazo para realizar cambios será de hasta 15 días desde la fecha de compra, admitiéndose un máximo de 1 cambio.
                                </p>
                                <p className='text'>
                                    Se deberá presentar la boleta y el artículo comprado tendrá que estar en perfectas condiciones y sin uso. Las devoluciones de productos incompletos, dañados, desgastados, estropeados o modificados, no se aceptarán y se devolverán al cliente.
                                </p>
                                <p className='text'>
                                    Se podrá realizar cambio de productos solo entre la misma temporada y misma condiciones de precios, promociones o descuentos. Los productos en “sale” se tomarán al precio que se compró y se podrán cambiar por productos de la misma categoría.
                                </p>
                            </section>

                            <section className='paragraph'>
                                <h4>Cambios por correo:</h4>
                                <p className='text'>
                                    Prepara el paquete agregando la boleta original e incluila en el interior del paquete.
                                </p>
                                <p className='text'>
                                    En el paquete, tendrás que colocar la siguiente información:
                                </p>
                                <p className='text'>
                                    <span className='text-left-align'>
                                        - Devolucion.
                                    </span>
                                    <span className='text-left-align'>
                                        - Gavea 7157, Esquina French. CP:11500. Montevideo, Uruguay.
                                    </span>
                                </p>
                                <p className='text'>
                                    Es necesario enviar la notificación de cambio por whatsapp al 094373344, detallando artículo que desea cambiar, talle y color No nos hacemos responsables por los daños ocasionados en los paquetes enviados.
                                </p>
                            </section>

                            <section className='paragraph'>
                                <h4>Cancelaciones y devoluciones:</h4>
                                <p className='text'>
                                    Las devoluciones se realizarán únicamente en caso de comprar un artículo disponible en la web pero que físicamente no se encuentre en stock. Ante una eventual cancelación de tu compra, la devolución se realizará de acuerdo con el método de pago utilizado.
                                </p> 
                            </section>
                        </div>
                    </div>
                </section>
                
                <div className='row-btn'>
                    <Link to="/" className='btn-volver'>
                        Volver
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Help;
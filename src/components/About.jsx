import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/css/About.css';

const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className='section-full'>
            <div className='container'>
                <div className='row'>
                    <div>
                        <h2 className='title'>¿Quiénes somos?</h2>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <p className='text'>
                            Suma es una plataforma e-commerce creada en 2022 en Uruguay, dedicada a la venta de indumentaria infantil proveniente de diferentes países.
                        </p>
                        <p className='text'>
                            Cada prenda es pensada con mucho amor, tiempo y dedicación.
                        </p>
                        <p className='text'>
                            Hoy en día contamos con más de cinco marcas de gran trayectoria y queremos seguir creciendo para brindarles la mejor variedad sin tener que moverse de su casa.
                        </p>
                        <p className='text'>
                            Apuntamos a un excelente servicio de entrega y devolución ya que lo más importante es generar un  gran vínculo de confianza y satisfacción con nuestros clientes.
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

export default About;
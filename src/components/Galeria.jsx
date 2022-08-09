import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/css/Galeria.css'
import Producto from './Producto'

export default function Galeria({ productos }) {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <>
            <section className='section-full galeria'>
                <div className='galeria__productos'>
                    {productos.map((producto, index) => {
                        return (
                            <Producto key={index} nombre={producto.nombre} url={producto.url} />
                        )
                    })}
                </div>

                <Link to="/" className='btn-volver'>
                    Volver
                </Link>
            </section>
        </>
    )
}




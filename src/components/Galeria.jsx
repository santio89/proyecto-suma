import { Link } from 'react-router-dom'
import '../styles/css/Galeria.css'
import Producto from './Producto'

export default function Galeria({ productos }) {


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




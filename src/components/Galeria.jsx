import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/css/Galeria.css'
import Producto from './Producto'
import ClipLoader from "react-spinners/ClipLoader";

export default function Galeria({ productos, titulo }) {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <>
            <section className='section-full galeria'>
                <h2 className='galeria__title'>{titulo}</h2>
                {productos.length === 0 && <ClipLoader color="var(--color-primero)"/>}
                <div className='galeria__productos'>
                    {productos.map((producto, index) => {
                        return (
                            <Producto key={index} nombre={producto.nombre} url={producto.url} descripcion={producto.descripcion} />
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




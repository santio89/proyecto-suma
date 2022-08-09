import '../styles/css/Producto.css'

export default function Producto({nombre, url}) {
    return (
        <div className='producto'>
            <div className='producto__imgContainer'><img alt={`img-${nombre}`} src={url}></img></div>
            <p className='producto__info'>{nombre}</p>
        </div>
    )
}

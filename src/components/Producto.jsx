import { useRef } from 'react';
import '../styles/css/Producto.css'

export default function Producto({ nombre, url }) {
    const imgModal = useRef(null);

    const modalCloseClick = (e) => { if (e.target === imgModal.current) { window.removeEventListener("click", modalCloseClick); imgModal.current.close() } };
    const modalCloseScroll = () => { window.removeEventListener("scroll", modalCloseScroll); imgModal.current.close() }

    return (
        <div className='producto'>
            <button className='producto__imgContainer' onClick={() => {
                imgModal.current.showModal();
                window.addEventListener("click", modalCloseClick);
                window.addEventListener("scroll", modalCloseScroll)
            }}><img alt={`img-${nombre}`} src={url} loading="lazy"></img></button>
            <i className="bi bi-arrows-angle-expand producto__expand"></i>
            <p className='producto__info'>{nombre}</p>
            <dialog className='producto__imgModal' ref={imgModal}>
                <button onClick={() => { imgModal.current.close() }}>X</button>
                <img alt={`img-${nombre}`} src={url} loading="lazy"></img>
            </dialog>
        </div>
    )
}
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

            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="currentColor" className="producto__expand" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z" />
            </svg>
            <p className='producto__info'>{nombre}</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="currentColor" className="producto__rotate" viewBox="0 0 16 16">
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
            </svg>
            <dialog className='producto__imgModal' ref={imgModal}>
                <button onClick={() => { imgModal.current.close() }}>X</button>
                <img alt={`img-${nombre}`} src={url} loading="lazy"></img>
            </dialog>
        </div>
    )
}
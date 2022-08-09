import { useEffect, useState } from 'react'
import Galeria from './Galeria'


export default function Bebes() {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        /* aca podria ir un fetch para traer los productos de algun lado */
        setProductos([{ nombre: "test nombre", url: "https://picsum.photos/800/800"}, { nombre: "test nombre", url: "https://picsum.photos/800/800"}, { nombre: "test nombre", url: "https://picsum.photos/800/800"}, { nombre: "test nombre", url: "https://picsum.photos/800/800"}, { nombre: "test nombre", url: "https://picsum.photos/800/800"}, { nombre: "test nombre", url: "https://picsum.photos/800/800"}, { nombre: "test nombre", url: "https://picsum.photos/800/800"}, { nombre: "test nombre", url: "https://picsum.photos/800/800"}, { nombre: "test nombre", url: "https://picsum.photos/800/800"}, { nombre: "test nombre", url: "https://picsum.photos/800/800"}, { nombre: "test nombre", url: "https://picsum.photos/800/800"}, { nombre: "test nombre", url: "https://picsum.photos/800/800"}]);
    }, [])

    return (
        <Galeria productos={productos} />
    )
}

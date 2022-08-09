import { useEffect, useState } from 'react'
import Galeria from './Galeria'


export default function PrimeraPuesta() {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        /* aca podria ir un fetch para traer los productos de algun lado */
        setProductos([{ nombre: "test nombre", url: "https://picsum.photos/700/700"}, { nombre: "test nombre", url: "https://picsum.photos/700/700"}, { nombre: "test nombre", url: "https://picsum.photos/700/700"}, { nombre: "test nombre", url: "https://picsum.photos/700/700"}, { nombre: "test nombre", url: "https://picsum.photos/700/700"}, { nombre: "test nombre", url: "https://picsum.photos/700/700"}, { nombre: "test nombre", url: "https://picsum.photos/700/700"}, { nombre: "test nombre", url: "https://picsum.photos/700/700"}, { nombre: "test nombre", url: "https://picsum.photos/700/700"}, { nombre: "test nombre", url: "https://picsum.photos/700/700"}, { nombre: "test nombre", url: "https://picsum.photos/700/700"}, { nombre: "test nombre", url: "https://picsum.photos/700/700"}, { nombre: "test nombre", url: "https://picsum.photos/700/700"}, { nombre: "test nombre", url: "https://picsum.photos/700/700"}, { nombre: "test nombre", url: "https://picsum.photos/700/700"}, { nombre: "test nombre", url: "https://picsum.photos/700/700"}, { nombre: "test nombre", url: "https://picsum.photos/700/700"}, { nombre: "test nombre", url: "https://picsum.photos/700/700"}, { nombre: "test nombre", url: "https://picsum.photos/700/700"}, { nombre: "test nombre", url: "https://picsum.photos/700/700"}, { nombre: "test nombre", url: "https://picsum.photos/700/700"}, { nombre: "test nombre", url: "https://picsum.photos/700/700"}, { nombre: "test nombre", url: "https://picsum.photos/700/700"}, { nombre: "test nombre", url: "https://picsum.photos/700/700"}]);

    }, [])

    return (
        <Galeria productos={productos} />
    )
}

import { useEffect, useState } from 'react'
import Galeria from './Galeria'


export default function Nenes() {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        /* aca podria ir un fetch para traer los productos de algun lado */
        setProductos([{ nombre: "test nombre", url: "https://picsum.photos/900/900"}, { nombre: "test nombre", url: "https://picsum.photos/900/900"}, { nombre: "test nombre", url: "https://picsum.photos/900/900"}, { nombre: "test nombre", url: "https://picsum.photos/900/900"}, { nombre: "test nombre", url: "https://picsum.photos/900/900"}, { nombre: "test nombre", url: "https://picsum.photos/900/900"}, { nombre: "test nombre", url: "https://picsum.photos/900/900"}, { nombre: "test nombre", url: "https://picsum.photos/900/900"}, { nombre: "test nombre", url: "https://picsum.photos/900/900"}, { nombre: "test nombre", url: "https://picsum.photos/900/900"}, { nombre: "test nombre", url: "https://picsum.photos/900/900"}, { nombre: "test nombre", url: "https://picsum.photos/900/900"}]);
    }, [])

    return (
        <Galeria productos={productos} titulo={"Niños"} />
    )
}

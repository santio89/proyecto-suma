import { useEffect, useState } from 'react'
import Galeria from './Galeria'


export default function Bebes() {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        fetch("./assets/products/bebes.json").then(res => res.json()).then(prods => {
            setTimeout(()=>{
                setProductos(prods.bebes)
            }, 400)
        }).catch(e=>console.log("error fetching data: ", e))
    }, [])

    return (
        <Galeria productos={productos} titulo={"Bebés"} />
    )
}

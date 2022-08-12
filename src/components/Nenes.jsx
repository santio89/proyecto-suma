import { useEffect, useState } from 'react'
import Galeria from './Galeria'


export default function Nenes() {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        fetch("./assets/products/nenes.json").then(res => res.json()).then(prods => {
            setTimeout(()=>{
                setProductos(prods.nenes)
            }, 400)
        }).catch(e=>console.log("error fetching data: ", e))
    }, [])

    return (
        <Galeria productos={productos} titulo={"Niños"} />
    )
}

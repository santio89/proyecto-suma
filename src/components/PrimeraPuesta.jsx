import { useEffect, useState } from 'react'
import Galeria from './Galeria'


export default function PrimeraPuesta() {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        fetch("./assets/products/primeraPuesta.json").then(res => res.json()).then(prods => {
            setTimeout(()=>{
                setProductos(prods.primeraPuesta)
            }, 400)
        }).catch(e=>console.log("error fetching data: ", e))
    }, [])

    return (
        <Galeria productos={productos} titulo={"Primera puesta"} />
    )
}

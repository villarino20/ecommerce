import {useState} from "react"
import { IconButton } from "@material-ui/core"
import { Button } from "@material-ui/core"

const ItemCount = ({ stock , initial = 0 , onAdd }) => {

    const [contador,setContador] = useState(initial)

    const aumentarContador = () => {
        if(contador < 10){
            setContador(contador + 1)
        }
    }

    const restarContador = () => {
        if(contador > 0){
            setContador(contador - 1)
        }
    }

    const confirmar = () => {
        if(stock > 0){
            onAdd(contador)
        }
    }

    return (
        <>
            <p>Contador Actual : {contador}</p>
            <IconButton onClick={aumentarContador} color="primary">+</IconButton>
            <Button onClick={confirmar}>confirmar</Button>
            <IconButton onClick={restarContador} color="secondary">-</IconButton>
        </>
    )

}

export default ItemCount
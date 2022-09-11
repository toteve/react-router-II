/* Componente2.jsx */

// importamos el contexto que requerimos consumir
import MyContext from "./MyContext"

// importamos useContext para consumir el contexto
import { useContext } from "react"

const Component2 = () => {
    // obtenemos la variable y su funcion de seteo del contexto creado, con destructuring
    const { data } = useContext(MyContext)

    // el return actualiza el estado
    return ( <h1>Cantidad de Clicks: {data}</h1> ) 
}

export default Component2;
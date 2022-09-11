/* Componente1.jsx */

// importamos el contexto que requerimos consumir
import MyContext from "./MyContext"

// importamos useContext para consumir el contexto
import { useContext } from "react"

const Component1 = () => {
    // obtenemos la variable y su funcion de seteo del contexto creado, con destructuring
    const { data, setData } = useContext(MyContext)

    // el return actualiza el estado
    return (
        <button onClick={(e) => setData(data + 1)}> Aumentar </button>
    );
}


export default Component1;
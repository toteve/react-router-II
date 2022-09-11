// creamos un contexto desde un archivo separado y lo importaremos donde se necesite

// importamos componente requerido para crer un contexto
import { createContext } from "react"

// creamos una variable ejecutando una instancia de createContext con objeto vacio
const MyContext = createContext({})

// exportamos el contexto
export default MyContext
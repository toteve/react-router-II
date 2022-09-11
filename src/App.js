// importamos el contexto general que esta creado 
import MyContext from "./MyContext"
// importamos el useState
import { useState } from "react"

// importamos el par de componentes que estan en la raiz del proyecto
import Component1 from "./Component1"
import Component2 from "./Component2"


function App() {
  // declaramos el estado local del componente y su funcion de seteo
  const [data, setData] = useState(0)
  // compartimos el estado local y su funcion de seteo
  const sharedState = {data, setData}

  return (
    <>
       {/* Definimos el provider de MyContext para envolver los componentes que van a consumir el contexto y el valor es igual al estado y funcion compartida */}
      <MyContext.Provider value={sharedState}>
        <Component1 />
        <Component2 />
      </MyContext.Provider>
    </>
  )
}

export default App;


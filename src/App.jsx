// importar css de App.js
import "./app.css"

// importar componentes del react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importar el componente Navbar
import Navbar from "./Navbar";
import Home from "./Home"
import Personajes from "./Personajes"



function App() {

  return (
    <>
      {/* Definimos el BrowserRouter y envolvemos el componente NavBar */}
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personajes/:id" element={<Personajes />} />
        </Routes>
      </ BrowserRouter>
    </>
  )
}

export default App;


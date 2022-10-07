import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Home() {
    const [id, setId] = useState("");
    const navigate = useNavigate();


    const irAPersonajes = () => {
        navigate(`/personajes/${id}`);
    };

    
    return (
        <div className="mt-5">
            <h1>React Router II</h1>
            <input
                type="number"
                value={id}
                onChange={({ target }) => setId(target.value)}
            />
            <button onClick={irAPersonajes}>buscar</button>
        </div>
    );
}
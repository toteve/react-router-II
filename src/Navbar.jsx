// importar componente NavLink
import { NavLink } from "react-router-dom";


export default function Navbar() {
    return (
        <div>
            <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)} end to="/" >
                Home
            </NavLink>
            {" - "}
            <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)}  to="/personajes">
                Personajes
            </NavLink>
        </div>
    );
}
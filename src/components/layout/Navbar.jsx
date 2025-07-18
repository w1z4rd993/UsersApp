import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";

/**
 * Componente de barra de navegación para la aplicación de usuarios.
 * 
 * Este componente se encarga de renderizar la barra de navegación
 * principal de la aplicación, con dos secciones:
 * - La sección izquierda, que contiene links para navegar entre
 *   las páginas de la aplicación.
 * - La sección derecha, que contiene el nombre del usuario
 *   autenticado y un botón para cerrar la sesión.
 * 
 * @returns {JSX.Element} Un JSX.Element que representa la barra de
 *   navegación principal de la aplicación.
 */
export const Navbar = () => {

    const { login, handlerLogout } = useContext(AuthContext);
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand">UsersApp</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/users">
                                    Usuarios
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/users/register">
                                    Registrar usuarios
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavLogout">
                        <span className="nav-item nav-link text-primary mx-3">
                            {login.user?.username}
                        </span>
                        <button
                            onClick={handlerLogout}
                            className="btn btn-outline-success">
                            Logout
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
}
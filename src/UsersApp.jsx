import { useReducer } from "react";
import { LoginPage } from "./auth/pages/LoginPage";
import { loginReducer } from "./auth/pages/reducers/LoginReducer";
import Swal from "sweetalert2";
import { UsersPage } from "./pages/UsersPage";
import { Navbar } from "./components/layout/Navbar";

// Inicializa el estado de login en función del valor de la clave 'login'
// en el sessionStorage. Si no hay valor, se asume que el usuario no está autenticado.
const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {
    isAuth: false,
    user: undefined
}

/**
 * Componente principal de la aplicación de usuarios.
 * 
 * Este componente maneja el estado de login del usuario y
 * muestra la página de login o la página de usuarios dependiendo
 * del estado de login.
 * 
 * @returns {JSX.Element} Un JSX.Element que representa la
 *   aplicación de usuarios.
 */
export const UsersApp = () => {

    const [login, dispatch] = useReducer(loginReducer, initialLogin);

    /**
     * Maneja el login del usuario.
     * 
     * Verifica si el usuario y password son correctos, y
     * si lo son, cambia el estado de login a true.
     * Si no lo son, muestra un mensaje de error.
     * @param {{ username: string, password: string }} data - El objeto con
     *   los datos del usuario y password.
     */
    const handlerLogin = ({ username, password }) => {

        if (username === 'admin' && password === '12345') {
            const user = { username: 'admin' }
            dispatch({
                type: 'login',
                payload: user
            });
            // Guarda el estado de login en el sessionStorage
            sessionStorage.setItem('login', JSON.stringify({
                isAuth: true,
                user
            }));

        } else {
            Swal.fire('Error Login', 'Username o password inválidos', 'error');
        }

    }

    const handlerLogout = () => {
        dispatch({
            type: 'logout'
        });
        sessionStorage.removeItem('login');
    }
    return (
        <>
            {
                login.isAuth
                    ? (
                        <>
                            <Navbar login={login} handlerLogout={handlerLogout} />
                            <UsersPage />
                        </>
                    )
                    : <LoginPage handlerLogin={handlerLogin} />
            }
        </>
    );
}
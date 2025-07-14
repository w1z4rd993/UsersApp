import { useReducer } from "react";
import { LoginPage } from "./auth/pages/LoginPage";
import { loginReducer } from "./auth/pages/reducers/LoginReducer";
import Swal from "sweetalert2";
import { UsersPage } from "./pages/UsersPage";

const initialLogin = {
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
            })
        } else {
            Swal.fire('Error Login', 'Username o password inválidos', 'error');
        }

    }
    return (
        <>
            {
                login.isAuth
                    ? <UsersPage />
                    : <LoginPage handlerLogin={handlerLogin} />
            }
        </>
    );
}
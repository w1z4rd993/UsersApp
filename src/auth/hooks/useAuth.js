import { useReducer } from "react";
import { loginReducer } from "../reducers/loginReducer";
import Swal from "sweetalert2";

// Inicializa el estado de login en función del valor de la clave 'login'
// en el sessionStorage. Si no hay valor, se asume que el usuario no está autenticado.
const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {
    isAuth: false,
    user: undefined
}

/**
 * Hook para manejar el estado de autenticación del usuario.
 * 
 * Retorna un objeto con las siguientes propiedades:
 * - login: El estado de autenticación del usuario.
 * - handlerLogin: Función para manejar el login del usuario.
 * - handlerLogout: Función para manejar el logout del usuario.
 * 
 * @returns {{ login: Object, handlerLogin: Function, handlerLogout: Function }}
 */
export const useAuth = () => {

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

    /**
     * Maneja el logout del usuario.
     * 
     * Cambia el estado de login a false y elimina el valor 'login'
     * del sessionStorage.
     */
    const handlerLogout = () => {
        dispatch({
            type: 'logout'
        });
        sessionStorage.removeItem('login');
    }
    return {
        login,
        handlerLogin,
        handlerLogout
    }
}
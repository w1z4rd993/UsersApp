import { useReducer } from "react";
import { loginReducer } from "../reducers/loginReducer";
import Swal from "sweetalert2";
import { loginUser } from "../services/authService";
import { useNavigate } from "react-router-dom";

// Inicializa el estado de login en función del valor de la clave 'login'
// en el sessionStorage. Si no hay valor, se asume que el usuario no está autenticado.
const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {
    isAuth: false,
    user: undefined
}

/**
 * Hook para manejar el estado de autenticación del usuario.
 * @returns {{ login, handlerLogin, handlerLogout }}
 */
export const useAuth = () => {

    const [login, dispatch] = useReducer(loginReducer, initialLogin);

    const navigate = useNavigate();


    /**
     * Maneja el login del usuario.
     * Verifica si el usuario y password son correctos.
     * @param {{ username: string, password: string }} data - El objeto con
     *   los datos del usuario y password.
     */
    const handlerLogin = ({ username, password }) => {
        const isLogin = loginUser({ username, password });
        if (isLogin) {
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
            navigate("/users");
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
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";

const initialLoginForm = { username: '', password: '' }


/**
 * Componente para la página de login.
 * Se encarga de manejar el estado de autenticación del usuario.
 * @returns {JSX.Element} Un JSX.Element que representa la página de login.
 */
export const LoginPage = () => {

    const { handlerLogin } = useContext(AuthContext);

    const [loginForm, setLoginForm] = useState(initialLoginForm);

    const { username, password } = loginForm;

    // Actualiza el estado del formulario de login con el nuevo valor del campo modificado
    const onInputChange = ({ target }) => {
        const { name, value } = target;

        setLoginForm({
            ...loginForm,
            [name]: value,
        })
    }

    /**
     * Procesa el envío del formulario de login.
     * 
     * Verifica que los campos estén completos y correctos.
     * Muestra un mensaje de éxito o error según el resultado.
     * @param {Object} event - Evento de envío del formulario.
     */
    const onSubmit = (event) => {
        event.preventDefault();
        if (!username || !password) {
            Swal.fire('Error de validación', 'Username y password requeridos', 'error');
        }
        handlerLogin({ username, password });
        setLoginForm(initialLoginForm);
    }

    return (
        <div className="modal" style={{ display: 'block' }} tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Login page</h5>
                    </div>
                    <form onSubmit={onSubmit}>
                        <div className="modal-body">
                            <input
                                className="form-control my-3 w-75"
                                placeholder="Username"
                                name="username"
                                value={username}
                                onChange={onInputChange}
                            />
                            <input
                                className="form-control my-3 w-75"
                                placeholder="Password"
                                name="password"
                                type="password"
                                value={password}
                                onChange={onInputChange}
                            />
                        </div>
                        <div className="modal-footer">
                            <button
                                className="btn btn-primary"
                                type="submit">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
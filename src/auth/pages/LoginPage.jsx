import { useState } from "react";
import Swal from "sweetalert2";

const initialLoginForm = { username: '', password: '' }

/**
 * Componente de página de inicio de sesión.
 * 
 * Este componente representa una página de inicio de sesión, donde los usuarios
 * pueden ingresar su nombre de usuario y contraseña para autenticarse.
 * Proporciona campos de entrada para el nombre de usuario y la contraseña,
 * así como un botón para enviar el formulario.
 * Si las credenciales son correctas, se muestra un mensaje de éxito,
 * en caso contrario, se muestra un mensaje de error.
 * 
 * @returns {JSX.Element} Un JSX.Element que representa la página de inicio de sesión.
 */

export const LoginPage = () => {

    const [loginForm, setLoginForm] = useState(initialLoginForm);

    const { username, password } = loginForm;

    /**
     * Maneja el cambio de entrada en los campos del formulario de login.
     * 
     * Actualiza el estado `loginForm` con el nuevo valor del campo 
     * correspondiente al nombre del campo modificado.
     * @param {Object} target - El objeto de evento del input modificado.
     * @param {string} target.name - El nombre del campo de entrada.
     * @param {string} target.value - El nuevo valor del campo de entrada.
     */
    const onInputChange = ({ target }) => {
        const { name, value } = target;

        setLoginForm({
            ...loginForm,
            [name]: value,
        })
    }

    /**
     * Maneja el submit del formulario de login.
     * 
     * Valida que los campos del formulario est n completos y
     * verifica que el usuario y password sean correctos.
     * Si el usuario y password son correctos, notifica al usuario
     * con un mensaje de  xito y resetea el formulario.
     * De lo contrario, notifica al usuario con un mensaje de error.
     * @param {Object} event - El objeto de evento del formulario.
     */
    const onSubmit = (event) => {
        event.preventDefault();
        if (!username || !password) {
            Swal.fire('Error de validación', 'Username y password requeridos', 'error');
        }

        if (username === 'admin' && password === '12345') {
            
        } else {
            Swal.fire('Error Login', 'Username o password inválidos', 'error');
        }

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
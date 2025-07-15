import { useEffect, useState } from "react";
import Swal from "sweetalert2";

/**
 * Componente para el formulario de usuario.
 * 
 * Este componente devuelve un JSX.Element que 
 * representa el formulario de usuario.
 * 
 * @returns {JSX.Element} Un JSX.Element que representa 
 * el formulario de usuario.
 */
export const UserForm = ({ userSelected, handlerAddUser, initialUserForm, handlerCloseForm }) => {

    const [userForm, setUserForm] = useState(initialUserForm);

    const { id, username, password, email } = userForm;

    useEffect(() => {
        setUserForm({
            ...userSelected,
            password: ''
        });
    }, [userSelected]);


    /**
     * Maneja el cambio de entrada en los campos del formulario de usuario.
     * Actualiza el estado `userForm` con el nuevo valor del campo 
     * correspondiente al nombre del campo modificado.
     * @param {Object} target - El objeto de evento del input modificado.
     * @param {string} target.name - El nombre del campo de entrada.
     * @param {string} target.value - El nuevo valor del campo de entrada.
     */
    const onInputChange = ({ target }) => {

        const { name, value } = target;
        setUserForm({
            ...userForm,
            [name]: value,
        })
    }

    /**
     * Maneja el submit del formulario de usuario.
     * 
     * Valida que los campos del formulario est n completos y
     * llama a la funci n handlerAddUser() con el usuario
     * construido en userForm. Luego, resetea el estado
     * userForm con el valor de initialUserForm.
     * @param {Object} event - El objeto de evento del formulario.
     */
    const onSubmit = (event) => {
        event.preventDefault();

        if (!username || (!password && id === 0) || !email) {

            Swal.fire({
                title: "Error de validación",
                text: "Debes completar todos los campos del formulario",
                icon: "error"
            });
            return;
        }
        handlerAddUser(userForm);
        setUserForm(initialUserForm);
    }

    /**
     * Maneja el cierre del formulario de usuario.
     * 
     * Esta función llama a handlerCloseForm para cerrar el formulario
     * y reinicia el estado userForm con el valor de initialUserForm.
     */
    const onCloseForm = () => {
        handlerCloseForm();
        setUserForm(initialUserForm);
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                className='form-control my-3 w-75%'
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange} />

            {id > 0 || <input
                className='form-control my-3 w-75%'
                placeholder="Password"
                type="password"
                name="password"
                value={password}
                onChange={onInputChange} />}

            <input
                className='form-control my-3 w-75%'
                placeholder="Email"
                name="email"
                value={email}
                onChange={onInputChange} />
            <input
                type="hidden"
                name="id"
                value={id} />
            <button
                className="btn btn-primary"
                type="submit">
                {id > 0 ? 'Editar' : 'Crear'}
            </button>

            {!handlerCloseForm || <button
                className="btn btn-primary mx-2" type="button"
                onClick={() => onCloseForm()}>
                Cerrar
            </button>}
        </form>
    );
}
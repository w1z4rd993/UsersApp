import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { UserContext } from "../context/UserContext";

/**
 * Formulario de usuario.
 * @returns {JSX.Element}
 */
export const UserForm = ({ userSelected, handlerCloseForm }) => {

    const { initialUserForm, handlerAddUser, errors } = useContext(UserContext);

    const [userForm, setUserForm] = useState(initialUserForm);

    const { id, username, password, email } = userForm;

    useEffect(() => {
        setUserForm({
            ...userSelected,
            password: ''
        });
    }, [userSelected]);


    /**
     * Actualiza el estado `userForm` con el nuevo valor del campo
     * correspondiente al nombre del campo modificado.
     * @param {Object} target - El objeto de evento del input modificado.
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
     * @param {Object} event - El objeto de evento del formulario.
     */
    const onSubmit = (event) => {
        event.preventDefault();
        handlerAddUser(userForm);
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
            <p className="text-danger">{errors?.username}</p>

            {id > 0 || <input
                className='form-control my-3 w-75%'
                placeholder="Password"
                type="password"
                name="password"
                value={password}
                onChange={onInputChange} />}
            <p className="text-danger">{errors?.password}</p>

            <input
                className='form-control my-3 w-75%'
                placeholder="Email"
                name="email"
                value={email}
                onChange={onInputChange} />
            <p className="text-danger">{errors?.email}</p>
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
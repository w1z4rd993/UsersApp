import { useState } from "react";

/**
 * Componente para el formulario de usuario.
 * 
 * Este componente devuelve un JSX.Element que 
 * representa el formulario de usuario.
 * 
 * @returns {JSX.Element} Un JSX.Element que representa 
 * el formulario de usuario.
 */
export const UserForm = ({ handlerAddUser , initialUserForm}) => {

    const [userForm, setUserForm] = useState(initialUserForm);

    const { username, password, email } = userForm;


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

    const onSubmit = (event) => {
        event.preventDefault();

        if (!username || !password || !email) {
            alert('Complete los campos del formulario');
            return;
        }
        handlerAddUser(userForm);
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
            <input
                className='form-control my-3 w-75%'
                placeholder="Password"
                type="password"
                name="password"
                value={password}
                onChange={onInputChange} />
            <input
                className='form-control my-3 w-75%'
                placeholder="Email"
                name="email"
                value={email}
                onChange={onInputChange} />

            <button
                className="btn btn-primary"
                type="submit">
                Crear
            </button>
        </form>
    );
}
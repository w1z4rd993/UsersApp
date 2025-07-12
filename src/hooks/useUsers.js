import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";

/*
 * Objeto que representa el estado inicial de la lista de usuarios.
 */
const initialUsers = [
    {
        id: 1,
        username: 'isaias',
        password: '123456',
        email: 'isaias123@gmail.com'
    }
]

/* 
 * Valores por defecto del useState para userForm.
 * Estos valores son los que se utilizan cuando se crea un nuevo
 * usuario o se edita uno existente. 
*/
const initialUserForm = {
    id: 0,
    username: '',
    password: '',
    email: ''
}

/**
 * Hook para manejar la lista de usuarios.
 * 
 * Este hook devuelve un objeto con los siguientes valores:
 * - users: El estado actual de la lista de usuarios.
 * - userSelected: El usuario seleccionado actualmente.
 * - initialUserForm: El formulario de usuario vac o.
 * - handlerAddUser: Funci n para agregar un nuevo usuario.
 * - handlerRemoveUser: Funci n para eliminar un usuario.
 * - handlerUserSelectedForm: Funci n para actualizar el usuario
 *   seleccionado en el formulario de edici n.
 * @returns {Object} Un objeto con los valores mencionados.
 */
export const useUsers = () => {
    const [users, dispatch] = useReducer(usersReducer, initialUsers);

    const [userSelected, setUserSelected] = useState(initialUserForm);

    /**
   * Maneja el formulario de registro de usuarios.
   * 
   * Esta función se encarga de agregar un nuevo usuario
   * a la lista de usuarios.
   * @param {Object} user - El usuario que se va a agregar.
   */
    const handlerAddUser = (user) => {

        let type;

        if (user.id === 0) {
            type = 'addUser';
        } else {
            type = 'updateUser'
        }
        dispatch({
            type,
            payload: user,
        });
    }

    /**
     * Maneja el eliminar un usuario de la lista.
     * 
     * Esta función se encarga de eliminar un usuario
     * de la lista de usuarios.
     * @param {number} id - El ID del usuario que se va a eliminar.
     */
    const handlerRemoveUser = (id) => {
        dispatch({
            type: 'removeUser',
            payload: id
        });
    }

    /**
     * Maneja el formulario de edición de usuarios.
     * 
     * Esta función se encarga de actualizar el estado
     * del usuario seleccionado en el formulario de edici n.
     * @param {Object} user - El usuario que se va a editar.
     */
    const handlerUserSelectedForm = (user) => {
        setUserSelected({ ...user });
    }

    return {
        users,
        userSelected,
        initialUserForm,
        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectedForm
    };
}
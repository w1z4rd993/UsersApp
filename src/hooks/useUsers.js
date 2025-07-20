import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { findAll, remove, save, update } from "../services/userService";

// Objeto que representa el estado inicial de la lista de usuarios.
const initialUsers = [];

// Valores iniciales para userForm.
const initialUserForm = {
    id: 0,
    username: '',
    password: '',
    email: ''
}


/**
 * Hook para la gestión del estado de usuarios en la aplicación.
 * Retorna un objeto con las propiedades para operaciones CRUD.
 */
export const useUsers = () => {
    const [users, dispatch] = useReducer(usersReducer, initialUsers);
    const [userSelected, setUserSelected] = useState(initialUserForm);
    const [visibleForm, setVisibleForm] = useState(false);
    const navigate = useNavigate();

    /**
     * Obtiene la lista de usuarios y actualiza el estado.
     */
    const getUsers = async () => {
        const result = await findAll();
        dispatch({
            type: 'loadingUsers',
            payload: result.data,
        })
    }

    /**
     * Agrega un nuevo usuario a la lista.
     * @param {Object} user - Usuario a agregar.
     */
    const handlerAddUser = async (user) => {

        let response;
        if (user.id === 0) {
            response = await save(user);
        } else {
            response = await update(user);
        }


        dispatch({
            type: (user.id === 0) ? 'addUser' : 'updateUser',
            payload: response.data,
        });

        Swal.fire({
            title: (user.id === 0) ? "Usuario creado" : "Usuario actualizado",
            text: (user.id === 0) ? "El usuario ha sido creado con éxito!" : "El usuario ha sido actualizado con éxito",
            icon: "success"
        });
        handlerCloseForm();
        navigate("/users");
    }

    /**
     * Elimina un usuario de la lista.
     * @param {number} id - El ID del usuario que se va a eliminar.
     */
    const handlerRemoveUser = (id) => {

        Swal.fire({
            title: "¿Estás seguro?",
            text: "El usuario será eliminado!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, eliminar!",
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {

                remove(id);
                dispatch({
                    type: 'removeUser',
                    payload: id
                });

                Swal.fire({
                    title: "Usuario eliminado!",
                    text: "El usuario ha sido eliminado con éxito!",
                    icon: "success"
                });
            }
        });
    }

    /**
     * Edita un usuario en la lista.
     * @param {Object} user - Usuario a editar.
     */
    const handlerUserSelectedForm = (user) => {
        setUserSelected({ ...user });
        setVisibleForm(true);
    }

    /**
     * Abre el formulario de edición de usuarios
     */
    const handlerOpenForm = () => {
        setVisibleForm(true);
    }

    /**
     * Cierra el formulario de edición de usuarios
     */
    const handlerCloseForm = () => {
        setVisibleForm(false);
        setUserSelected(initialUserForm);
    }
    return {
        users,
        userSelected,
        initialUserForm,
        visibleForm,
        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectedForm,
        handlerOpenForm,
        handlerCloseForm,
        getUsers
    };
}
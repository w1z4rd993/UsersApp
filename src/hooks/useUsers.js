import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { findAll, remove, save, update } from "../services/userService";

/*
 * Objeto que representa el estado inicial de la lista de usuarios.
 */
const initialUsers = [];

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
 * Hook personalizado para la gestión del estado de usuarios
 * en la aplicación, incluyendo operaciones CRUD (Crear, Leer, Actualizar, Eliminar).
 * 
 * Retorna un objeto con las siguientes propiedades:
 * - users: La lista de usuarios.
 * - userSelected: El usuario seleccionado.
 * - initialUserForm: El objeto que representa el estado
 *   inicial del formulario de edición de usuarios.
 * - visibleForm: Un booleano que indica si el formulario
 *   de edición de usuarios está visible o no.
 * - handlerAddUser: Función para agregar un nuevo usuario
 *   a la lista de usuarios.
 * - handlerRemoveUser: Función para eliminar un usuario
 *   de la lista de usuarios.
 * - handlerUserSelectedForm: Función para actualizar el estado
 *   del usuario seleccionado en el formulario de edición.
 * - handlerOpenForm: Función para mostrar el formulario de edición
 *   de usuarios.
 * - handlerCloseForm: Función para ocultar el formulario de edición
 *   de usuarios.
 */
export const useUsers = () => {
    const [users, dispatch] = useReducer(usersReducer, initialUsers);
    const [userSelected, setUserSelected] = useState(initialUserForm);
    const [visibleForm, setVisibleForm] = useState(false);
    const navigate = useNavigate();

    /**
     * Realiza una petición GET a la API para obtener la lista de todos los usuarios.
     * 
     * Esta función utiliza el servicio findAll() para obtener la lista de usuarios
     * y actualiza el estado de la lista de usuarios en el reducer.
     * 
     * @returns {Promise<void>} Una promesa que se resuelve cuando se completa
     * la petición.
     * 
     * @throws {Error} Lanza un error en caso de que no se pueda realizar la petición.
     */
    const getUsers = async () => {
        const result = await findAll();
        dispatch({
            type: 'loadingUsers',
            payload: result.data,
        })
    }

    /**
   * Maneja el formulario de registro de usuarios.
   * 
   * Esta función se encarga de agregar un nuevo usuario
   * a la lista de usuarios.
   * @param {Object} user - El usuario que se va a agregar.
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
     * Maneja el eliminar un usuario de la lista.
     * 
     * Esta función se encarga de eliminar un usuario
     * de la lista de usuarios.
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
     * Maneja el formulario de edición de usuarios.
     * 
     * Esta función se encarga de actualizar el estado
     * del usuario seleccionado en el formulario de edici n.
     * @param {Object} user - El usuario que se va a editar.
     */
    const handlerUserSelectedForm = (user) => {
        setUserSelected({ ...user });
        setVisibleForm(true);
    }

    /**
     * Abre el formulario de edición de usuarios.
     * 
     * Esta función se encarga de mostrar el formulario de edición
     * de usuarios.
     */
    const handlerOpenForm = () => {
        setVisibleForm(true);
    }

    /**
     * Cierra el formulario de edición de usuarios.
     * 
     * Esta función se encarga de ocultar el formulario de edición
     * de usuarios.
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
import { useReducer } from "react";
import { UserForm } from "./components/UserForm";
import { UsersList } from "./components/UsersList";
import { usersReducer } from "./reducers/usersReducer";



const initialUsers = [
    {
        id: 1,
        username: 'isaias',
        password: '123456',
        email: 'isaias123@gmail.com'
    }
]

/**
 * Componente principal de la aplicación.
 * 
 * Este componente contiene un formulario para registrar
 * usuarios y una lista para visualizarlos.
 * 
 * @returns {JSX.Element} Un JSX.Element que representa el componente.
 */
export const UsersApp = () => {

    const [users, dispatch] = useReducer(usersReducer, initialUsers);

    /**
     * Maneja el formulario de registro de usuarios.
     * 
     * Esta función se encarga de agregar un nuevo usuario
     * a la lista de usuarios.
     * @param {Object} user - El usuario que se va a agregar.
     */
    const handlerAddUser = (user) => {
        dispatch({
            type: 'addUser',
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
    return (
        <div className="container my-4">
            <h2>Users App</h2>

            <div className="row">

                <div className="col">
                    <UserForm handlerAddUser={handlerAddUser} />
                </div>

                <div className="col">
                    <UsersList users={users} handlerRemoveUser={handlerRemoveUser} />
                </div>

            </div>
        </div>
    );
}

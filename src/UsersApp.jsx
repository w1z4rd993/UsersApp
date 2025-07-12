import { useReducer, useState } from "react";
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

// Valores por defecto del useState para userForm
const initialUserForm = {
    id: 0,
    username: '',
    password: '',
    email: ''
}

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
        } else{
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

    const handlerUserSelectedForm = (user) => {
        setUserSelected({ ...user });
    }

    return (
        <div className="container my-4">
            <h2>Users App</h2>
            <div className="row">
                <div className="col">
                    <UserForm
                        initialUserForm={initialUserForm}
                        handlerAddUser={handlerAddUser}
                        userSelected={userSelected}
                    />
                </div>
                <div className="col">
                    {users.length === 0
                        ? <div className="alert alert-warning">No hay usuarios en el sistema</div>
                        : <UsersList
                            users={users}
                            handlerUserSelectedForm={handlerUserSelectedForm}
                            handlerRemoveUser={handlerRemoveUser}
                        />}

                </div>
            </div>
        </div>
    );
}

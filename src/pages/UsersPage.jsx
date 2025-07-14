import { UsersList } from "../components/UsersList"
import { useUsers } from "../hooks/useUsers"
import { UserModalForm } from "../components/UserModalForm"


/**
 * Componente para mostrar la lista de usuarios.
 * 
 * Muestra un botón para crear un nuevo usuario y un listado de usuarios.
 * Si el usuario hace clic en el botón, se abre un formulario para
 * crear o editar un usuario. Si el usuario hace clic en el botón
 * "Eliminar" al lado del usuario, se elimina el usuario.
 * 
 * @returns {JSX.Element} Un JSX.Element que representa la p gina
 * de la lista de usuarios.
 */
export const UsersPage = () => {
    const { users,
        userSelected,
        initialUserForm,
        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectedForm,
        visibleForm,
        handlerOpenForm,
        handlerCloseForm
    } = useUsers();

    return (
        <>
            {!visibleForm ||
                <UserModalForm
                    initialUserForm={initialUserForm}
                    handlerAddUser={handlerAddUser}
                    userSelected={userSelected}
                    handlerCloseForm={handlerCloseForm}
                />}
            <div className="container my-4">
                <h2>Users App</h2>
                <div className="row">

                    <div className="col">
                        {visibleForm || <button
                            className="btn btn-primary my-2" type="button"
                            onClick={handlerOpenForm}>
                            Nuevo usuario
                        </button>}

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
        </>
    );
}
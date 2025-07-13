import { UserForm } from "./components/UserForm";
import { UsersList } from "./components/UsersList";
import { useUsers } from './hooks/useUsers'

/**
 * Componente principal de la aplicación.
 * 
 * Este componente contiene un formulario para registrar
 * usuarios y una lista para visualizarlos.
 * 
 * @returns {JSX.Element} Un JSX.Element que representa el componente.
 */
export const UsersApp = () => {

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
            {!visibleForm || <div className="abrir-modal animacion fadeIn">
                <div className="modal" style={ {display: "block"}} tabIndex="-1">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">
                                    {userSelected.id > 0 ? 'Editar' : 'Crear'} Modal Usuarios
                                </h5>
                            </div>
                            <div className="modal-body">
                                <UserForm
                                    initialUserForm={initialUserForm}
                                    handlerAddUser={handlerAddUser}
                                    userSelected={userSelected}
                                    handlerCloseForm={handlerCloseForm}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>}

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
import { UsersList } from "../components/UsersList"
import { UserModalForm } from "../components/UserModalForm"
import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";


/**
 * Página para mostrar la lista de usuarios.
 * @returns {JSX.Element}
 */
export const UsersPage = () => {

    // Obtengo el contexto de usuarios.
    const { users, visibleForm, handlerOpenForm, getUsers } = useContext(UserContext);


    useEffect(() => {
        getUsers();
    }, []);

    return (
        <>
            {!visibleForm ||
                <UserModalForm />}
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
                            : <UsersList />}
                    </div>
                </div>
            </div>
        </>
    );
}
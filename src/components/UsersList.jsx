import { UserRow } from "./UserRow";

/**
 * Componente para mostrar un listado de usuarios.
 * 
 * Este componente muestra un listado de usuarios en una tabla.
 * 
 * @returns {JSX.Element} Un JSX.Element que representa el componente.
 */
export const UsersList = ({ handlerUserSelectedForm, handlerRemoveUser, users = [] }) => {
    return (
        <table className="table table-hover table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Update</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(({ id, username, email }) => (
                        <UserRow
                            key={id}
                            id={id}
                            username={username}
                            email={email}
                            handlerRemoveUser={handlerRemoveUser}
                            handlerUserSelectedForm={handlerUserSelectedForm}

                        />
                    ))
                }
            </tbody>
        </table>
    );
}
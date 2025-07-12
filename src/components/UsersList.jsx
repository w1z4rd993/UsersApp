import { UserRow } from "./UserRow";

/**
 * Componente para mostrar un listado de usuarios.
 * 
 * Este componente muestra un listado de usuarios en una tabla.
 * 
 * @returns {JSX.Element} Un JSX.Element que representa el componente.
 */
export const UsersList = ({ handlerRemoveUser, users = [] }) => {
    return (
        <table className="table table-hover table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>username</th>
                    <th>email</th>
                    <th>update</th>
                    <th>remove</th>
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
                        />
                    ))
                }
            </tbody>
        </table>
    );
}
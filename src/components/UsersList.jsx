import { useContext } from "react";
import { UserRow } from "./UserRow";
import { UserContext } from "../context/UserContext";

/**
 * Componente para mostrar un listado de usuarios.
 * 
 * Este componente muestra un listado de usuarios en una tabla.
 * 
 * @returns {JSX.Element} Un JSX.Element que representa el componente.
 */
export const UsersList = () => {

    const { users } = useContext(UserContext);
    return (
        <table className="table table-hover table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Update</th>
                    <th>Update route</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(({ id, username, email }) => (
                        <UserRow key={id} id={id} username={username} email={email} />
                    ))
                }
            </tbody>
        </table>
    );
}
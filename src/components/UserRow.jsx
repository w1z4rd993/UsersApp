import { useContext } from "react";
import { UserContext } from "../context/UserContext";

/**
 * Componente para mostrar una fila de usuario en una tabla.
 * 
 * @param {{id: number, username: string, email: string}} props 
 * @returns {JSX.Element}
 */
export const UserRow = ({ id, username, email }) => {

    const { handlerUserSelectedForm, handlerRemoveUser } = useContext(UserContext);

    return (
        <tr key={id}>
            <td>{id}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td>
                <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={() => handlerUserSelectedForm({
                        id,
                        username,
                        email
                    })}
                >
                    Update
                </button>
            </td>
            <td>
                <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => handlerRemoveUser(id)}
                >
                    Remove
                </button>
            </td>
        </tr>
    );
}
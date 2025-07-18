import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";

/**
 * Componente para mostrar una fila de usuario en una tabla.
 * 
 * Este componente muestra la información del usuario y proporciona
 * opciones para actualizar o eliminar el usuario.
 * 
 * @param {Object} props - Las propiedades del componente.
 * @param {number} props.id - El ID del usuario.
 * @param {string} props.username - El nombre de usuario.
 * @param {string} props.email - El correo electrónico del usuario.
 * @returns {JSX.Element} Un JSX.Element que representa una fila de usuario.
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
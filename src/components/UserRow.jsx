
/**
 * Componente para mostrar una fila de usuario en una tabla.
 * Este componente representa una fila en el listado de usuarios,
 * mostrando el id, nombre de usuario y correo electrónico, junto
 * con botones para actualizar o eliminar el usuario.
 * 
 * @param {Object} props - Las propiedades del componente.
 * @param {number} props.id - El ID del usuario.
 * @param {string} props.username - El nombre de usuario.
 * @param {string} props.email - El correo electrónico del usuario.
 * 
 * @returns {JSX.Element} Un JSX.Element que representa una fila de usuario.
 */
export const UserRow = ({ handlerUserSelectedForm, handlerRemoveUser, id, username, email }) => {

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
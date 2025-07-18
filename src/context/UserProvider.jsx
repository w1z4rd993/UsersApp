import { UserContext } from "./UserContext";
import { useUsers } from "../hooks/useUsers";

/**
 * Componente proveedor de contexto para gestionar el estado de usuarios.
 * 
 * Este componente utiliza el hook `useUsers` para obtener y manejar
 * el estado relacionado con la lista de usuarios, el usuario seleccionado,
 * y las funcionalidades para agregar, eliminar, y editar usuarios.
 * Proporciona el contexto `UserContext` con los valores y funciones
 * necesarias para gestionar usuarios en la aplicación.
 * 
 * @param {Object} props - Las propiedades del componente.
 * @param {JSX.Element} props.children - Los componentes hijos que
 *   serán envueltos por el proveedor de contexto.
 * @returns {JSX.Element} Un JSX.Element que representa el proveedor
 *   de contexto para los usuarios.
 */
export const UserProvider = ({ children }) => {

    const {
        users,
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
        <UserContext.Provider value={
            {
                users,
                userSelected,
                initialUserForm,
                handlerAddUser,
                handlerRemoveUser,
                handlerUserSelectedForm,
                visibleForm,
                handlerOpenForm,
                handlerCloseForm
            }
        }>
            {children}
        </UserContext.Provider>
    );
}
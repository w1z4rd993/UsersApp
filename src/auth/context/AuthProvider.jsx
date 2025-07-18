import { AuthContext } from "./AuthContext";
import { useAuth } from "../hooks/useAuth";

/**
 * Proveedor de contexto de autenticaci n para la aplicaci n.
 * 
 * Utiliza el hook `useAuth` para obtener y manejar el estado de autenticaci n del usuario
 * y las funciones para manejar el login y logout del usuario. Luego, provee el contexto `AuthContext`
 * con los valores y funciones necesarias para gestionar la autenticación en la aplicación.
 * 
 * @param {{ children: JSX.Element }} props - Las propiedades del componente.
 * @returns {JSX.Element} Un JSX.Element que representa el proveedor de contexto de autenticación para la aplicación.
 */
export const Authprovider = ({ children }) => {
    const { login, handlerLogin, handlerLogout } = useAuth();

    return (
        <AuthContext.Provider value={
            {
                login, handlerLogin, handlerLogout
            }
        }>
            {children}
        </AuthContext.Provider>
    );
}
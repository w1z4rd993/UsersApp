import { Routes, Route, Navigate } from "react-router-dom";
import { UsersPage } from "../pages/UsersPage";
import { Navbar } from "../components/layout/Navbar";
import { RegisterPage } from "../pages/RegisterPage";
import { useUsers } from "../hooks/useUsers";

/**
 * Componente principal de las rutas de la aplicación de usuarios.
 * 
 * Este componente se encarga de renderizar la barra de navegación
 * y las rutas para la p gina de inicio y la página de usuarios.
 * 
 * @param {{ login: Object, handlerLogout: Function }} props - Las propiedades
 *   del componente:
 *   - login: El estado de autenticación del usuario.
 *   - handlerLogout: Función para manejar el cierre de sesión.
 * @returns {JSX.Element} Un JSX.Element que representa las rutas de la
 *   aplicación de usuarios.
 */
export const UserRoutes = ({ login, handlerLogout }) => {

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
            <Navbar login={login} handlerLogout={handlerLogout} />

            <Routes>

                <Route path="users" element={<UsersPage
                    users={users}
                    userSelected={userSelected}
                    initialUserForm={initialUserForm}
                    handlerAddUser={handlerAddUser}
                    handlerRemoveUser={handlerRemoveUser}
                    handlerUserSelectedForm={handlerUserSelectedForm}
                    visibleForm={visibleForm}
                    handlerOpenForm={handlerOpenForm}
                    handlerCloseForm={handlerCloseForm}
                />} />

                <Route path="users/register" element={<RegisterPage
                    handlerAddUser={handlerAddUser}
                    initialUserForm={initialUserForm} />} />
                <Route path="/" element={<Navigate to={"/users"} />} />

            </Routes>
        </>
    );
}
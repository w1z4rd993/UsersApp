import { Routes, Route, Navigate } from "react-router-dom";
import { UsersPage } from "../pages/UsersPage";
import { Navbar } from "../components/layout/Navbar";
import { RegisterPage } from "../pages/RegisterPage";
import { UserProvider } from "../context/UserProvider";


/**
 * Componente principal de las rutas de la aplicación de usuarios.
 * 
 * Este componente se encarga de renderizar la barra de navegación
 * y las rutas para la p gina de inicio y la página de usuarios.
 * 
 * @returns {JSX.Element} Un JSX.Element que representa las rutas de la
 *   aplicación de usuarios.
 */
export const UserRoutes = () => {
    return (
        <>
            <UserProvider>
                <Navbar />
                <Routes>
                    <Route path="users" element={<UsersPage />} />
                    <Route path="users/register" element={<RegisterPage />} />
                    <Route path="users/edit/:id" element={<RegisterPage />} />
                    <Route path="/" element={<Navigate to={"/users"} />} />
                </Routes>
            </UserProvider>
        </>
    );
}
import { LoginPage } from "./auth/pages/LoginPage";
import { Navigate, Route, Routes } from "react-router-dom";
import { UserRoutes } from "./routes/UserRoutes";
import { useContext } from "react";
import { AuthContext } from "./auth/context/AuthContext";


/**
 * Componente principal de la aplicación de usuarios.
 * Muestra las rutas de usuario si el usuario está autenticado,
 * o la página de inicio de sesión si no lo está.
 * @returns {JSX.Element} Un JSX.Element que representa las rutas de
 * la aplicación.
 */
export const UsersApp = () => {

    const { login } = useContext(AuthContext);
    return (
        <Routes>
            {
                login.isAuth
                    ? (
                        <Route path="/*" element={<UserRoutes />} />
                    )
                    : <>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/*" element={<Navigate to={"/login"} />} />
                    </>
            }
        </Routes>
    );
}
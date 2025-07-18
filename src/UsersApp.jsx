import { LoginPage } from "./auth/pages/LoginPage";
import { Navigate, Route, Routes } from "react-router-dom";
import { UserRoutes } from "./routes/UserRoutes";
import { useContext } from "react";
import { AuthContext } from "./auth/context/AuthContext";


/**
 * Componente principal de la aplicación de usuarios.

 * Este componente se encarga de gestionar las rutas de la aplicación
 * basadas en el estado de autenticación del usuario. Si el usuario
 * está autenticado, se mostrarán las rutas de usuario. Si no lo está,
 * se redirigirá al usuario a la página de inicio de sesión.
 * 
 * @returns {JSX.Element} Un JSX.Element que representa las rutas de
 * la aplicación de acuerdo al estado de autenticación.
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
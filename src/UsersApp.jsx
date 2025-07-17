import { LoginPage } from "./auth/pages/LoginPage";
import { useAuth } from "./auth/hooks/useAuth";
import { Navigate, Route, Routes } from "react-router-dom";
import { UserRoutes } from "./routes/UserRoutes";

/**
 * Componente principal de la aplicación de usuarios.
 * 
 * Este componente maneja el estado de login del usuario y
 * muestra la página de login o la página de usuarios dependiendo
 * del estado de login.
 * 
 * @returns {JSX.Element} Un JSX.Element que representa la
 *   aplicación de usuarios.
 */
export const UsersApp = () => {

    const { login, handlerLogin, handlerLogout } = useAuth();
    return (
        <Routes>
            {
                login.isAuth
                    ? (
                        <Route path="/*" element={<UserRoutes
                            login={login}
                            handlerLogout={handlerLogout} />} />
                    )
                    : <>
                        <Route path="/login"
                            element={<LoginPage
                                handlerLogin={handlerLogin} />} />
                        <Route path="/*" element={<Navigate to={"/login"} />} />
                    </>
            }
        </Routes>
    );
}
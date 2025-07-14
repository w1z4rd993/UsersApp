import { LoginPage } from "./auth/pages/LoginPage";
import { UsersPage } from "./pages/UsersPage";
import { Navbar } from "./components/layout/Navbar";
import { useAuth } from "./auth/hooks/useAuth";

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

    const {login , handlerLogin, handlerLogout} = useAuth();
    return (
        <>
            {
                login.isAuth
                    ? (
                        <>
                            <Navbar login={login} handlerLogout={handlerLogout} />
                            <UsersPage />
                        </>
                    )
                    : <LoginPage handlerLogin={handlerLogin} />
            }
        </>
    );
}
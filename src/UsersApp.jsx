import { UserForm } from "./components/UserForm";
import { UsersList } from "./components/UsersList";

/**
 * Componente principal de la aplicación.
 * 
 * Este componente contiene un formulario para registrar
 * usuarios y una lista para visualizarlos.
 * 
 * @returns {JSX.Element} Un JSX.Element que representa el componente.
 */
export const UsersApp = () => {

    const initialUsers = [
        {
            id: 1,
            username: 'isaias',
            password: '123456',
            email: 'isaias123@gmail.com'
        }
    ]
    return (
        <div className="container my-4">
            <h2>Users App</h2>

            <div className="row">

                <div className="col">
                    <UserForm />
                </div>

                <div className="col">
                    <UsersList users={initialUsers} />
                </div>

            </div>
        </div>
    );
}

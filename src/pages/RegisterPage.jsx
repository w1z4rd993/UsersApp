import { useEffect, useState } from "react";
import { UserForm } from "../components/UserForm";
import { useParams } from "react-router-dom";

/**
 * Componente de página de registro de usuarios.
 * 
 * Este componente representa una p gina para registrar o editar un usuario.
 * Recibe las siguientes propiedades:
 * - users: La lista de usuarios.
 * - handlerAddUser: La funci n que se encarga de agregar o editar un usuario en la lista de usuarios.
 * - initialUserForm: El objeto que representa el estado
 *   inicial del formulario de edici n de usuarios.
 * 
 * @returns {JSX.Element} Un JSX.Element que representa la p gina de registro de usuarios.
 */
export const RegisterPage = ({ users = [], handlerAddUser, initialUserForm }) => {

    const [userSelected, setUserSelected] = useState(initialUserForm);

    const { id } = useParams();

    useEffect(() => {

        if (id) {
            const user = users.find(u => u.id == id) || initialUserForm;
            setUserSelected(user);
        }
    }, [id]);


    return (
        <div className="container my-4">
            <h4>{userSelected.id > 0 ? 'Editar' : 'Registrar'} Usuario</h4>
            <div className="row">
                <div className="col">
                    <UserForm
                        userSelected={userSelected}
                        handlerAddUser={handlerAddUser}
                        initialUserForm={initialUserForm}
                    />
                </div>
            </div>
        </div>
    );
}
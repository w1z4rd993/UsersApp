import { useContext } from "react";
import { UserForm } from "./UserForm";
import { UserContext } from "../context/UserContext";


/**
 * Componente modal para crear o editar un usuario.
 * 
 * Este componente utiliza el contexto `UserContext` para obtener
 * el usuario seleccionado y la funci n para cerrar el formulario.
 * Muestra un formulario para crear o editar el usuario, dependiendo
 * del valor de `userSelected.id`. Si es mayor que 0, es una edición,
 * en caso contrario es una creación.
 * 
 * @returns {JSX.Element} Un JSX.Element que representa el formulario
 *   modal para crear o editar un usuario.
 */
export const UserModalForm = () => {
    const { userSelected, handlerCloseForm } = useContext(UserContext);
    return (
        <div className="abrir-modal animacion fadeIn">
            <div className="modal" style={{ display: "block" }} tabIndex="-1">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                {userSelected.id > 0 ? 'Editar' : 'Crear'} Modal Usuarios
                            </h5>
                        </div>
                        <div className="modal-body">
                            <UserForm
                                userSelected={userSelected}
                                handlerCloseForm={handlerCloseForm}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
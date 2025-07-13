import { UserForm } from "./UserForm";

/**
 * Componente que representa un formulario para crear o editar un usuario.
 * 
 * Muestra un formulario para crear o editar un usuario, dependiendo
 * del valor de userSelected.id. El formulario se muestra en una ventana
 * modal.
 * @param {Object} props - Las propiedades del componente.
 * @param {Object} props.initialUserForm - El objeto que representa el estado
 *   inicial del formulario de edición de usuarios.
 * @param {Function} props.handlerAddUser - La función que se encarga de
 *   agregar o editar un usuario en la lista de usuarios.
 * @param {Object} props.userSelected - El usuario seleccionado.
 * @param {Function} props.handlerCloseForm - La función que se encarga de
 *   cerrar el formulario de edición de usuarios.
 * @returns {JSX.Element} Un JSX.Element que representa el formulario de edición
 * de usuarios en una ventana modal.
 */
export const UserModalForm = ({ initialUserForm, handlerAddUser, userSelected, handlerCloseForm }) => {
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
                                initialUserForm={initialUserForm}
                                handlerAddUser={handlerAddUser}
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
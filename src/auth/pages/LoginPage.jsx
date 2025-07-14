/**
 * Componente que representa la página de login.
 * 
 * Este componente muestra una ventana modal con un formulario para
 * que el usuario ingrese su nombre de usuario y contrase a. El
 * formulario tiene dos campos de entrada:
 * 
 * - `username`: El nombre de usuario del usuario.
 * - `password`: La contraseña del usuario.
 * 
 * El formulario tiene un botón de envío que se encarga de
 * enviar la información del formulario al servidor.
 * 
 * @returns {JSX.Element} Un JSX.Element que representa la página de login.
 */
export const LoginPage = () => {
    return (
        <div className="modal" style={{ display: 'block' }} tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Login page</h5>
                    </div>
                    <form>
                        <div className="modal-body">
                            <input
                                className="form-control my-3 w-75"
                                placeholder="Username"
                                name="username"
                            />

                            <input
                                className="form-control my-3 w-75"
                                placeholder="Password"
                                name="password"
                                type="password"
                            />
                        </div>
                        <div className="modal-footer">
                            <button
                                className="btn btn-primary"
                                type="submit">
                                Login
                            </button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

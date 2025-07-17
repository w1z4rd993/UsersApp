/**
 * Reducer que maneja el estado de autenticación del usuario.
 * 
 * El estado de autenticación se representa como un objeto con dos propiedades:
 * - isAuth: booleano que indica si el usuario est  autenticado o no.
 * - user: objeto con los datos del usuario autenticado (o undefined si no está autenticado).
 * 
 * El reducer maneja dos tipos de acciones:
 * - 'login': actualiza el estado con los datos del usuario autenticado.
 * - 'logout': actualiza el estado a false.
 * 
 * @param {Object} state - El estado actual del reducer.
 * @param {Object} action - La acci n que se est  manejando.
 * @returns {Object} El nuevo estado del reducer.
 */
export const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case 'login':
            return {
                isAuth: true,
                user: action.payload
            };

        case 'logout':
            return {
                isAuth: false
            };
        default:
            return state;
    }
}
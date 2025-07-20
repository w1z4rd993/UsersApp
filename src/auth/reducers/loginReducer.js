/**
 * Reducer que maneja el estado de autenticación del usuario.
 * @param {Object} state - Estado actual.
 * @param {Object} action - Acción que se está  manejando.
 * @returns {Object} Nuevo estado.
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
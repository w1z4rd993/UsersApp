/**
 * Verifica si el usuario y password son correctos.
 * 
 * @param {{ username: string, password: string }} data - El objeto con
 *   los datos del usuario y password.
 * @returns {boolean} True si el usuario y password son correctos.
 */
export const loginUser = ({ username, password }) => {
    return (username === 'admin' && password === '12345');
}
import axios from "axios"

const BASE_URL = 'http://localhost:8080/users'

/**
 * Obtiene la lista de usuarios.
 * @returns {Promise<AxiosResponse<any>>}
 */
export const findAll = async () => {

    try {
        const response = await axios.get(BASE_URL);
        return response;

    } catch (error) {
        console.error(error);
    }
    return null;
}

/**
 * Guarda un nuevo usuario en la base de datos.
 * 
 * @param {{ username: string, email: string, password: string }} user - El objeto con
 *   los datos del usuario a guardar.
 * @returns {Promise<AxiosResponse<any>>}
 */
export const save = async ({ username, email, password }) => {
    try {
        return await axios.post(BASE_URL, {
            username,
            email,
            password
        });
    } catch (error) {

        throw error;
    }
}

/**
 * Actualiza un usuario por su ID.
 * @param {{ id: number, username: string, email: string }} user
 * @returns {Promise<AxiosResponse<any>>}
 */
export const update = async ({ id, username, email }) => {
    try {
        return await axios.put(`${BASE_URL}/${id}`, { username, email });
    } catch (error) {

        throw error;
    }
}

/**
 * Elimina un usuario por su ID.
 * @param {number} id - El ID del usuario a eliminar.
 */
export const remove = async (id) => {
    try {
        await axios.delete(`${BASE_URL}/${id}`);
    } catch (error) {
        console.error(error);
    }
}
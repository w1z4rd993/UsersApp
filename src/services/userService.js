import axios from "axios"

const BASE_URL = 'http://localhost:8080/users'

/**
 * Realiza una petición GET a la API para obtener la lista de todos los usuarios.
 * 
 * @returns {Promise<AxiosResponse<any>>} Una promesa que se resuelve con el objeto
 * response de axios que contiene los usuarios.
 * 
 * @throws {Error} Lanza un error en caso de que no se pueda realizar la petición.
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
 * Realiza una petición POST a la API para guardar un usuario.
 * 
 * @param {{ username: string, email: string, password: string }} user - El objeto con
 *   los datos del usuario a guardar.
 * 
 * @returns {Promise<AxiosResponse<any>>} Una promesa que se resuelve con el objeto
 * response de axios que contiene el usuario guardado.
 * 
 * @throws {Error} Lanza un error en caso de que no se pueda realizar la petición.
 */
export const save = async ({ username, email, password }) => {
    try {
        return await axios.post(BASE_URL, {
            username,
            email,
            password
        });
    } catch (error) {
        console.error(error);
    }
    return undefined;
}

/**
 * Actualiza un usuario por su ID.
 * 
 * Realiza una petición PUT a la API para actualizar un usuario
 * por su ID.
 * 
 * @param {{ id: number, username: string, email: string }} user - El usuario a actualizar con sus props id, username y email.
 * 
 * @returns {Promise<AxiosResponse<any>>} Una promesa que se resuelve con el objeto
 * response de axios que contiene el usuario actualizado.
 * 
 * @throws {Error} Lanza un error en caso de que no se pueda realizar la petición.
 */
export const update = async ({ id, username, email }) => {
    try {
        return await axios.put(`${BASE_URL}/${id}`, { username, email });
    } catch (error) {
        console.error(error);
    }
    return undefined;
}

/**
 * Elimina un usuario por su ID.
 * 
 * Realiza una petici n DELETE a la API para eliminar un usuario
 * por su ID.
 * 
 * @param {number} id - El ID del usuario a eliminar.
 * 
 * @throws {Error} Lanza un error en caso de que no se pueda realizar la petición.
 */
export const remove = async (id) => {
    try {
        await axios.delete(`${BASE_URL}/${id}`);
    } catch (error) {
        console.error(error);
    }
}
import axios from "axios"

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
        const response = await axios.get('http://localhost:8080/users');
        return response;

    } catch (error) {
        console.log(error);
    }

    return null;
}

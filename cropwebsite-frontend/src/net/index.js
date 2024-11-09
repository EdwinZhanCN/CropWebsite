import axios from "axios";

const defaultError = ()=> console.log('Please contact to the administrator')
const defaultFailure = (message)=> console.log(message)

const AZURE_API_KEY = import.meta.env.VITE_AZURE_API_KEY;
// This function sends a post request to the backend server
/*
 * @param {string} url - the URL of the backend server
 * @param {object} data - the data to be sent to the backend server
 * @returns {Promise} - a promise that resolves with the server response data or rejects with an error
 */
async function post(url, data, resolve=defaultError, reject=defaultFailure) {
    try {
        const response = await axios.post(url, data, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            withCredentials: true
        });

        const { data: responseData } = response; // Extract data from response
        if (responseData.success) {
            resolve(responseData); // Return the data if successful
        } else {
             reject(Error(responseData.message)); // Throw an error with the message if not successful
        }
    } catch (error) {
        console.error('Error posting data: ', error);
    }
}

/*
 * @param {string} url - the URL of the backend server
 * @returns {Promise} - a promise that resolves with the server response data or rejects with an error
 */
async function get(url, resolve=defaultError, reject=defaultFailure) {
    try {
        const response = await axios.get(url, {
            withCredentials: true,
            headers: {
                'Ocp-Apim-Subscription-Key': AZURE_API_KEY
            }
        });
        const { data } = response;
        if (data.success) {
            resolve(data.data);
        } else {
            reject(new Error(data.message));
        }
    } catch (error) {
        console.error('Error fetching data: ', error);
    }
}


export { get, post }
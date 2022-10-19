import axios from 'axios'

export async function upcertUserUsage(email) {
    const putPath = `/api/user/email/${email}`
    try {
        const response = await axios.put(putPath);
        console.log('response:  ', response)
        return response.data;
    } catch (error) {
        console.log(error);
    }
}    
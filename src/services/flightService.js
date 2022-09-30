import axios from 'axios'

export async function getFlights(departingCity, flightNumber, departingDate) {
    const getPath = `/api/flights/departingCity/${departingCity}/flightNumber/${flightNumber}/departingDate/${departingDate}`
    try {
        const response = await axios.get(getPath);
        console.log('response:  ', response)
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
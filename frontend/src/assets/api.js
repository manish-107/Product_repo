import axios from 'axios';
const url = 'http://localhost:3000/api/v1/'

const fetchProducts = async () => {
    const response = await axios.get(`${url}products`)
    return response.data.users
}

export { fetchProducts }




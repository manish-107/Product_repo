import axios from 'axios';
const url = 'http://localhost:3000/api/v1'

const fetchProducts = async () => {
    const response = await axios.get(`${url}/products`)
    return response.data.users
}

const postProducts = async (postData) => {
    try {
        console.log(postData);
        const postres = await axios.post(`${url}/addProduct`, postData)
        console.log(postres);
    } catch (error) {
        console.log(error);
    }
}

export { fetchProducts, postProducts }
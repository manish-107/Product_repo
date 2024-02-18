import axios from 'axios';
const url = 'http://localhost:3000/api/v1'

const fetchProducts = async () => {
    const response = await axios.get(`${url}/products`)
    return response.data.users
}

const fetchPage = async (pageNumber) => {
    try {
        const res = await axios.get(`${url}/products/page`, {
            params: {
                page: pageNumber
            }
        });
        return res.data; // Return the fetched data
    } catch (error) {
        console.error('Error:', error);
        throw error; // Rethrow the error to be handled by the caller
    }
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

export { fetchProducts, postProducts, fetchPage }
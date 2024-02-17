import axios from 'axios';
const url = 'http://localhost:3000/api/v1'

const fetchProducts = async () => {
    const response = await axios.get(`${url}/products`)
    return response.data.users
}

const fetchPage = async () => {
    const pageNumber = 2;
    try {
        const res = await axios.get(`${url}/products/page`, {
            params: {
                page: pageNumber
            }
        });
        console.log(res.data);
    } catch (error) {
        console.error('Error:', error);
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
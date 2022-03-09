import axios from 'axios'

const ProductsApi = axios.create({
    baseURL: 'https://fakestoreapi.com/',
    timeout: 1000,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type':'application/json'
    }
});


export default {
    getProducts() {
        return ProductsApi.get('/products')
    },
    
}
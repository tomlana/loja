import axios from 'axios';

const api_marca = axios.create({
    baseURL: 'http://localhost:8000/api/marca'
});

export default api_marca;
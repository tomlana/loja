import axios from 'axios';

const api_categoria = axios.create({
    baseURL: 'http://localhost:8000/api/categorias'
});

export default api_categoria;
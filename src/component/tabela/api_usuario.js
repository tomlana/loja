import axios from 'axios';

const api_usuario = axios.create({
    baseURL: 'http://localhost:8000/api/usuario'
});

export default api_usuario;
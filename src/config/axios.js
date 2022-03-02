import axios from "axios";

const clienteAxios = axios.create({
    baseURL: 'http://localhost:4000/usuarios'
});

export default clienteAxios;
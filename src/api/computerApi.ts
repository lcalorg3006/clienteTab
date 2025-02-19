import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.208.12.1:5000/api/computers', 
});

export default api;

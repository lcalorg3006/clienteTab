import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api/computers',
});

export default api;
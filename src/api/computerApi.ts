import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.139:5000/api/computers', 
});

export default api;

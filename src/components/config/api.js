import axios from 'axios';

const api = axios.create({
  baseURL: 'https://blog.coursify.me/',
});

export default api;

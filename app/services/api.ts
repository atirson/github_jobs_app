import axios from 'axios';

const api = axios.create({
  baseURL: 'https://github-jobs-api-krakend.herokuapp.com',
});

export default api;

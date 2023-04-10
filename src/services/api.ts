import axios from 'axios';

const api = axios.create({
  baseURL: ' https://n63pwmv4el.execute-api.us-east-1.amazonaws.com/',
});

export default api;

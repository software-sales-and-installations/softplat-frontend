import axios from 'axios';

const instance = axios.create({
  baseURL: 'backendurl',
  headers: { 'token': 'sometoken' },
});

export default instance;

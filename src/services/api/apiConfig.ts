import axios from 'axios';

export const BASE_URL = 'http://softplat.acceleratorpracticum.ru';

const instance = axios.create({
  baseURL: 'backendurl',
  headers: { 'token': 'sometoken' },
});

export default instance;

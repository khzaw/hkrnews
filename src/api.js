import axios from 'axios';
import { API_HOST } from './constants';

const instance = axios.create({
  baseURL: API_HOST
});

export default instance;

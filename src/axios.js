import axios from 'axios'
import {API_baseUrl} from './Constants/constant'

const instance = axios.create({
    baseURL: API_baseUrl
  });

export default instance;
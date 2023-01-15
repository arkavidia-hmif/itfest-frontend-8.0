/**
 * Default axios instance
 */

import axios from 'axios';
import config from '../config';

const services = axios.create({
  baseURL: config.API_URL,
});

export default services;

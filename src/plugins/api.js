import axios from 'axios';
import { userState } from '../recoil/atoms/auth';
import { getRecoil } from 'recoil-nexus';

const { MY_IP } = process.env;

const api = axios.create({
  baseURL: `http://${MY_IP}:19003/api/`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
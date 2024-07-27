import { serverUrl } from '@/constants/StorageConfig';
import axios from 'axios';

const api = axios.create({
    baseURL: serverUrl,
    withCredentials: true,
});

function setToken(token: string) {
    api.interceptors.request.use(async (config) => {
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    }, error => {
        return Promise.reject(error);
    });
}

export {
    setToken
}

export default api;

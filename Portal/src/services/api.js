import axios from 'axios';

const API = axios.create({
  baseURL: '/api'
});

const getToken = () => localStorage.getItem('token');

API.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const register = (payload) => API.post('/auth/register', payload);
export const login = (payload) => API.post('/auth/login', payload);
export const getProfile = () => API.get('/auth/me');
export const forgotPassword = (payload) => API.post('/auth/forgot-password', payload);
export const resetPassword = (token, payload) => API.patch(`/auth/reset-password/${token}`, payload);
export const updatePassword = (payload) => API.patch('/auth/update-password', payload);

export default API;

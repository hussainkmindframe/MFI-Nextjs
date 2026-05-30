/**
 * Authentication Service
 * Handles all auth-related API calls
 */

import apiClient from './apiClient';

export const authService = {
  login: (email, password) =>
    apiClient.post('/auth/login', { email, password }),

  getMe: () =>
    apiClient.get('/auth/me'),

  logout: () =>
    apiClient.post('/auth/logout'),

  setToken: (token) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('authToken', token);
      // Set cookie for middleware
      document.cookie = `authToken=${token}; path=/; max-age=86400`;
    }
  },

  
  getToken: () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('authToken');
    }
    return null;
  },


  removeToken: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('authToken');
      // Remove cookie
      document.cookie = 'authToken=; path=/; max-age=0';
    }
  },


  isAuthenticated: () => {
    if (typeof window !== 'undefined') {
      return !!localStorage.getItem('authToken');
    }
    return false;
  },
};


export default authService;

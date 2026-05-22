/**
 * Contact Service
 * API calls for contact management
 */

import apiClient from './apiClient';

const contactService = {
  /**
   * Fetch all contacts with pagination and filters
   */
  getAllContacts: async (page = 1, limit = 10, status = '', search = '') => {
    try {
      const params = new URLSearchParams();
      params.append('page', page);
      params.append('limit', limit);
      if (status) params.append('status', status);
      if (search) params.append('search', search);
      
      const response = await apiClient.get(`/contacts?${params.toString()}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Get single contact by ID
   */
  getContactById: async (id) => {
    try {
      const response = await apiClient.get(`/contact/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Update contact status
   */
  updateContactStatus: async (id, status) => {
    try {
      const response = await apiClient.put(`/contact/${id}/status`, { status });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Delete contact
   */
  deleteContact: async (id) => {
    try {
      const response = await apiClient.delete(`/contact/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },


  /**
 * Submit service/TV page contact form
 */
submitServiceContactForm: async (formData) => {
  try {
    const response = await apiClient.post('/contact/service', formData);
    return response.data;
  } catch (error) {
    throw error;
  }
},



submitTelevisionContactForm: async (formData) => {
  try {
    const response = await apiClient.post('/contact/television', formData);
    return response.data;
  } catch (error) {
    throw error;
  }
},


  /**
   * Submit quick contact form
   */
  submitQuickContactForm: async (formData) => {
    try {
      const response = await apiClient.post('/contact/quick', formData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};





export default contactService;
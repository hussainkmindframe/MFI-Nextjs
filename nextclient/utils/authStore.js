/**
 * Auth Store (Zustand)
 * Manages authentication state globally
 * Persists login across page refreshes
 * Auto-logout after 24 hours
 */

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import authService from '@/services/authService';

const AUTO_LOGOUT_TIME = 24 * 60 * 60 * 1000; // 24 hours

export const useAuthStore = create(
  persist(
    (set, get) => ({
      admin: null,
      loading: false,
      error: null,
      isAuthenticated: false,
      authCheckComplete: false,
      loginTimestamp: null,
      autoLogoutTimer: null,

      login: async (email, password) => {
        set({ loading: true, error: null });
        try {
          const response = await authService.login(email, password);
          const { token, admin } = response.data;

          authService.setToken(token);
          
          const now = Date.now();
          set({
            admin,
            isAuthenticated: true,
            loading: false,
            loginTimestamp: now,
          });

          // Set auto-logout timer
          get().setAutoLogoutTimer();

          return response.data;
        } catch (error) {
          const errorMsg = error.response?.data?.message || 'Login failed';
          set({ error: errorMsg, loading: false });
          throw error;
        }
      },

      logout: async () => {
        try {
          await authService.logout();
        } catch (error) {
          console.error('Logout error:', error);
        } finally {
          authService.removeToken();
          
          // Clear auto-logout timer
          const { autoLogoutTimer } = get();
          if (autoLogoutTimer) clearTimeout(autoLogoutTimer);
          
          set({
            admin: null,
            isAuthenticated: false,
            loginTimestamp: null,
            autoLogoutTimer: null,
          });
        }
      },

checkAuth: async () => {
  set({ loading: true });

  // SSR safe check
  if (typeof window === 'undefined') {
    set({ loading: false, authCheckComplete: true });
    return;
  }

  // Zustand persist se already state hai toh seedha verify karo
  const { admin, loginTimestamp, isAuthenticated } = get();
  const token = localStorage.getItem('authToken');

  if (!token || !isAuthenticated || !admin) {
    set({ admin: null, isAuthenticated: false, authCheckComplete: true, loading: false });
    return;
  }

  // 24 hour check
  const now = Date.now();
  if (loginTimestamp && now - loginTimestamp > AUTO_LOGOUT_TIME) {
    get().logout();
    return;
  }

  try {
    const response = await authService.getMe();
    set({
      admin: response.data.admin,
      isAuthenticated: true,
      authCheckComplete: true,
      loading: false,
    });
    get().setAutoLogoutTimer();
  } catch (error) {
    console.error('Auth check error:', error);
    authService.removeToken();
    set({
      admin: null,
      isAuthenticated: false,
      authCheckComplete: true,
      loading: false,
    });
  }
},
    
        setAutoLogoutTimer: () => {
        const { autoLogoutTimer, loginTimestamp } = get();
        
        // Clear existing timer
        if (autoLogoutTimer) clearTimeout(autoLogoutTimer);
        
        if (!loginTimestamp) return;
        
        const now = Date.now();
        const timeRemaining = AUTO_LOGOUT_TIME - (now - loginTimestamp);
        
        if (timeRemaining <= 0) {
          get().logout();
          return;
        }

        const timer = setTimeout(() => {
          console.log('Auto-logging out after 24 hours');
          get().logout();
        }, timeRemaining);

        set({ autoLogoutTimer: timer });
      },

      clearError: () => set({ error: null }),
    }),
    {
      name: 'auth-store', // localStorage key
      partialize: (state) => ({
        admin: state.admin,
        isAuthenticated: state.isAuthenticated,
        loginTimestamp: state.loginTimestamp,
      }),
    }
  )
);

export default useAuthStore;

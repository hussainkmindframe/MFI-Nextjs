'use client';

/**
 * AuthInitializer Component
 * Checks authentication on app load/refresh
 * Ensures token is validated server-side on page refresh
 */

import { useEffect } from 'react';
import { useAuthStore } from '@/utils/authStore';

export default function AuthInitializer({ children }) {
  const { checkAuth } = useAuthStore();

  useEffect(() => {
    // Check auth status on app load/refresh
    checkAuth();
  }, [checkAuth]);

  return children;
}

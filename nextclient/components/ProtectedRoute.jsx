'use client'

/**
 * ProtectedRoute Component
 * Ensures only authenticated admins can access routes
 */

import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/utils/authStore';
import { useEffect } from 'react';
import Loading from './Loading';

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, authCheckComplete } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (authCheckComplete && !isAuthenticated) {
      router.push('/admin/login');
    }
  }, [authCheckComplete, isAuthenticated, router]);

  // If auth check is not complete, show loading
  if (!authCheckComplete) {
    return <Loading />;
  }

  // If not authenticated, show loading while redirecting
  if (!isAuthenticated) {
    return <Loading />;
  }

  // Only render children if authenticated
  return children;
}


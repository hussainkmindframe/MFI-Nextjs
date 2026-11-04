'use client'

/**
 * Loading Component
 */

export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-secondary border-t-accent rounded-full animate-spin"></div>
      </div>
    </div>
  );
}




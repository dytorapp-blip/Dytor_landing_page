'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function RedirectPage() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const roomCode = searchParams.get('room');
    const role = searchParams.get('role') || 'viewer';
    
    if (roomCode) {
      // Redirect to the main Dytor web app room dashboard
      const redirectUrl = `https://dytor.netlify.app/room/${roomCode}?role=${role}`;
      window.location.replace(redirectUrl);
    } else {
      // Redirect to home if no room code
      window.location.replace('https://dytor.netlify.app/');
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-400 mx-auto mb-4"></div>
        <div className="text-white text-xl mb-4">Redirecting to Dytor Room...</div>
        <div className="text-gray-400">Please wait...</div>
      </div>
    </div>
  );
}

'use client';

import { useParams, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

// Simple redirect component
const RoomRedirect = ({ roomCode, role }: { roomCode: string; role: string }) => {
  useEffect(() => {
    // Redirect to the main Dytor web app with the room parameters
    const redirectUrl = `https://dytor.netlify.app/room/${roomCode}?role=${role}`;
    window.location.href = redirectUrl;
  }, [roomCode, role]);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-400 mx-auto mb-4"></div>
        <div className="text-white text-xl mb-4">Redirecting to Dytor Room...</div>
        <div className="text-gray-400">Room: {roomCode} • Role: {role}</div>
      </div>
    </div>
  );
};

export default function RoomPage() {
  const params = useParams();
  const searchParams = useSearchParams();

  const roomCode = params?.code as string;
  const role = searchParams?.get('role') || 'viewer';

  // Validate room code format
  if (!roomCode || roomCode.length !== 6) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-400 text-xl mb-4">Invalid Room Code</div>
          <div className="text-gray-400">Room codes must be 6 characters long</div>
        </div>
      </div>
    );
  }

  // Validate role
  const validRoles = ['admin', 'speaker', 'viewer'];
  if (!validRoles.includes(role)) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-400 text-xl mb-4">Invalid Role</div>
          <div className="text-gray-400">Valid roles: admin, speaker, viewer</div>
        </div>
      </div>
    );
  }

  return <RoomRedirect roomCode={roomCode} role={role} />;
}

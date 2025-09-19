'use client';

import { useParams, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

// Room interface component
const RoomInterface = ({ roomCode, role }: { roomCode: string; role: string }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [roomData, setRoomData] = useState(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // This will connect to the room server
    connectToRoom(roomCode, role);
  }, [roomCode, role]);

  const connectToRoom = async (code: string, userRole: string) => {
    try {
      // Connect to the desktop app's room server
      const wsUrl = `ws://localhost:3002/ws`;
      const ws = new WebSocket(wsUrl);
      
      ws.onopen = () => {
        console.log('Connected to room server');
        setIsConnected(true);
        
        // Register as user in the room
        ws.send(JSON.stringify({
          type: 'JOIN_ROOM',
          roomCode: code,
          clientType: 'user',
          clientInfo: {
            name: `${userRole} User`,
            role: userRole,
            id: Date.now().toString()
          }
        }));
      };

      ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        console.log('Received room data:', data);
        setRoomData(data);
      };

      ws.onerror = (error) => {
        console.error('WebSocket error:', error);
        setError('Failed to connect to room. Make sure the desktop app is running.');
      };

      ws.onclose = () => {
        setIsConnected(false);
      };

    } catch (error) {
      console.error('Connection error:', error);
      setError('Failed to connect to room server.');
    }
  };

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-6 max-w-md mx-4">
          <h2 className="text-red-400 text-lg font-semibold mb-2">Connection Error</h2>
          <p className="text-red-300 text-sm mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors"
          >
            Retry Connection
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold">Dytor Room</h1>
            <p className="text-gray-400">Room Code: {roomCode}</p>
            <p className="text-gray-400">Role: {role}</p>
          </div>
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${isConnected ? 'bg-green-400' : 'bg-red-400'}`} />
            <span className="text-sm text-gray-400">
              {isConnected ? 'Connected' : 'Connecting...'}
            </span>
          </div>
        </div>

        <div className="grid gap-6">
          {/* Timer Display */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Timer</h2>
            <div className="text-center">
              <div className="text-6xl font-mono text-green-400 mb-4">
                {roomData?.timer?.display || '00:00'}
              </div>
              <div className="text-gray-400">
                {roomData?.timer?.status || 'Ready'}
              </div>
            </div>
          </div>

          {/* Message Display */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Message</h2>
            <div className="text-center">
              <p className="text-xl text-blue-400">
                {roomData?.message || 'No message'}
              </p>
            </div>
          </div>

          {/* Role-specific controls */}
          {role === 'admin' && (
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-4">Admin Controls</h2>
              <div className="grid grid-cols-2 gap-4">
                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition-colors">
                  Start Timer
                </button>
                <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded transition-colors">
                  Pause Timer
                </button>
                <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors">
                  Stop Timer
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors">
                  Send Message
                </button>
              </div>
            </div>
          )}

          {role === 'speaker' && (
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-4">Speaker View</h2>
              <p className="text-gray-400">
                You can see the timer and messages. This is similar to the display screen in the desktop app.
              </p>
            </div>
          )}

          {role === 'viewer' && (
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-4">Viewer Mode</h2>
              <p className="text-gray-400">
                You can only see the timer and time-up messages. No control access.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function RoomPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isValidating, setIsValidating] = useState(true);

  const roomCode = params?.code as string;
  const role = searchParams?.get('role') || 'viewer';

  useEffect(() => {
    // Validate room code format
    if (!roomCode || roomCode.length !== 6) {
      router.push('/');
      return;
    }

    // Validate role
    const validRoles = ['admin', 'speaker', 'viewer'];
    if (!validRoles.includes(role)) {
      router.push('/');
      return;
    }

    setIsValidating(false);
  }, [roomCode, role, router]);

  if (isValidating) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-400 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading room...</p>
        </div>
      </div>
    );
  }

  return <RoomInterface roomCode={roomCode} role={role} />;
}

// API Configuration for shared backend
const API_CONFIG = {
  // Development/Local configuration
  development: {
    websocket: {
      url: 'ws://localhost:3001/ws',
      protocol: 'ws'
    },
    api: {
      baseUrl: 'http://localhost:3001',
      endpoints: {
        remoteInfo: '/api/remote-info',
        auth: '/api/auth'
      }
    },
    room: {
      websocket: 'ws://localhost:3002/ws',
      api: 'http://localhost:3002'
    }
  },
  
  // Production/Online configuration
  production: {
    websocket: {
      url: 'wss://dytor-room-server-production.up.railway.app/ws',
      protocol: 'wss'
    },
    api: {
      baseUrl: 'https://dytor-room-server-production.up.railway.app',
      endpoints: {
        remoteInfo: '/api/remote-info',
        auth: '/api/auth'
      }
    },
    room: {
      websocket: 'wss://dytor-room-server-production.up.railway.app/ws',
      api: 'https://dytor-room-server-production.up.railway.app'
    }
  }
};

// Determine environment
const getEnvironment = () => {
  // Check if we're running in production
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    
    // If running on localhost or 127.0.0.1, use development config
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
      return 'development';
    }
    
    // Otherwise use production config
    return 'production';
  }
  
  // For server-side, default to development
  return 'development';
};

// Get current configuration
export const getApiConfig = () => {
  const env = getEnvironment();
  return API_CONFIG[env];
};

// Helper functions for easy access
export const getWebSocketUrl = () => {
  return getApiConfig().websocket.url;
};

export const getApiBaseUrl = () => {
  return getApiConfig().api.baseUrl;
};

export const getApiEndpoint = (endpoint) => {
  const config = getApiConfig();
  return `${config.api.baseUrl}${config.api.endpoints[endpoint]}`;
};

export const getRoomWebSocketUrl = () => {
  return getApiConfig().room.websocket;
};

export const getRoomApiUrl = () => {
  return getApiConfig().room.api;
};

// Export the config for debugging
export default getApiConfig;


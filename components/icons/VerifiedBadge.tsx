import React from 'react';

const VerifiedBadge = ({ className }: { className?: string }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 627" className={className}>
      <path fill="#4285F4" d="M512 313.5c0 137.5-111.5 249-249 249S14 451 14 313.5 125.5 64.5 263 64.5s249 111.5 249 249z"/>
      <path fill="#fff" d="M382.3 231.1L236.7 376.7c-4.7 4.7-12.3 4.7-17 0l-75.6-75.6c-4.7-4.7-4.7-12.3 0-17l17-17c4.7-4.7 12.3-4.7 17 0l49.6 49.6 128.6-128.6c4.7-4.7 12.3-4.7 17 0l17 17c4.7 4.7 4.7 12.3 0 17z"/>
    </svg>
  );
};

export default VerifiedBadge;

import React from 'react';

const LoadingSpinner = ({ size = 'md', text = 'Loading...' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-3 p-4">
      <div 
        className={`${sizeClasses[size]} animate-spin rounded-full border-4 border-blue-200 border-t-blue-600`}
        style={{ animation: 'spin 1s linear infinite' }}
      ></div>
      {text && (
        <p className="text-sm text-gray-600 animate-pulse font-medium">{text}</p>
      )}
    </div>
  );
};

export default LoadingSpinner; 
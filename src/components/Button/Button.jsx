import React from 'react';

function Button({ className = '', value, ...props }) {
  return (
    <div>
      {value && (
        <button
          className={`p-2 rounded-lg bg-blue-500 text-white ${className}`}
          {...props}
        >
          {value}
        </button>
      )}
    </div>
  );
}

export default Button;

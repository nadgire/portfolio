// src/components/Modal.js
import React from 'react';

const Alert = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center relative">
        <button className="absolute top-0 right-2 text-3xl cursor-pointer" onClick={onClose} value="">
          ×
        </button>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Alert;

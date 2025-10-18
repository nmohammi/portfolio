'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle, X } from 'lucide-react';

interface NotificationProps {
  show: boolean;
  onClose: () => void;
  type: 'success' | 'error';
  title: string;
  message: string;
}

export const Notification: React.FC<NotificationProps> = ({ 
  show, 
  onClose, 
  type, 
  title, 
  message 
}) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000); // Auto-close after 5 seconds
      
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="fixed top-4 right-4 z-50 max-w-md">
      <div className={`rounded-xl shadow-2xl border-l-4 p-6 transform transition-all duration-300 ease-in-out ${
        type === 'success' 
          ? 'bg-green-50 border-green-500 text-green-800' 
          : 'bg-red-50 border-red-500 text-red-800'
      } ${show ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
        <div className="flex items-start">
          <div className="flex-shrink-0">
            {type === 'success' ? (
              <CheckCircle className="h-6 w-6 text-green-500" />
            ) : (
              <X className="h-6 w-6 text-red-500" />
            )}
          </div>
          <div className="ml-3 flex-1">
            <h3 className="text-lg font-semibold mb-1">{title}</h3>
            <p className="text-sm leading-relaxed">{message}</p>
          </div>
          <div className="ml-4 flex-shrink-0">
            <button
              onClick={onClose}
              className={`rounded-md p-1 hover:bg-opacity-20 transition-colors ${
                type === 'success' ? 'hover:bg-green-600' : 'hover:bg-red-600'
              }`}
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
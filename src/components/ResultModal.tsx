import React from 'react';
import { ConversionComparison } from './ConversionComparison';

interface ResultModalProps {
  isOpen: boolean;
  onClose: () => void;
  directConversion: number;
  indirectConversion: number;
  resultMessage: string;
}

export function ResultModal({ 
  isOpen, 
  onClose, 
  directConversion, 
  indirectConversion, 
  resultMessage 
}: ResultModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-purple-600 p-8 rounded-lg shadow-xl max-w-md w-full">
        <h2 className="text-2xl font-bold text-white mb-4">Conversion Results</h2>
        
        <ConversionComparison 
          directConversion={directConversion} 
          indirectConversion={indirectConversion} 
        />
        
        <p className="text-white font-semibold my-6">{resultMessage}</p>
        
        <button
          onClick={onClose}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
}
import React from 'react';

interface ResultsDisplayProps {
  directConversion: number;
  indirectConversion: number;
  message: string;
}

export function ResultsDisplay({ directConversion, indirectConversion, message }: ResultsDisplayProps) {
  return (
    <div className="mt-8 p-4 bg-gray-50 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Results:</h2>
      <div className="space-y-2">
        <p className={directConversion < indirectConversion ? 'text-green-600' : 'text-gray-600'}>
          Direct MMK: {directConversion.toLocaleString()} MMK
        </p>
        <p className={indirectConversion < directConversion ? 'text-green-600' : 'text-gray-600'}>
          Indirect MMK: {indirectConversion.toLocaleString()} MMK
        </p>
        <p className="font-medium text-indigo-600 mt-2">
          {message}
        </p>
      </div>
    </div>
  );
}
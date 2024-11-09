import React from 'react';

interface ConversionComparisonProps {
  directConversion: number;
  indirectConversion: number;
}

export function ConversionComparison({ directConversion, indirectConversion }: ConversionComparisonProps) {
  const difference = Math.abs(directConversion - indirectConversion);
  const savingsPercentage = ((Math.max(directConversion, indirectConversion) - Math.min(directConversion, indirectConversion)) / Math.max(directConversion, indirectConversion) * 100);
  
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <h3 className="text-xl font-bold mb-4 text-gray-800">Conversion Comparison</h3>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Direct Conversion:</span>
          <span className={`font-bold ${directConversion <= indirectConversion ? 'text-green-600' : 'text-red-600'}`}>
            {directConversion.toLocaleString()} MMK
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Indirect Conversion:</span>
          <span className={`font-bold ${indirectConversion <= directConversion ? 'text-green-600' : 'text-red-600'}`}>
            {indirectConversion.toLocaleString()} MMK
          </span>
        </div>
        
        <div className="border-t pt-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Difference:</span>
            <span className="font-bold text-purple-600">
              {difference.toLocaleString()} MMK
            </span>
          </div>
          
          <div className="flex justify-between items-center mt-2">
            <span className="text-gray-600">Savings:</span>
            <span className="font-bold text-purple-600">
              {savingsPercentage.toFixed(2)}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
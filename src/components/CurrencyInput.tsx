import React from 'react';

interface CurrencyInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export function CurrencyInput({ label, value, onChange }: CurrencyInputProps) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        step="any"
        min="0"
      />
    </div>
  );
}
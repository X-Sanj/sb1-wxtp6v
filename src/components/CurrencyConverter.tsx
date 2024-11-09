import React, { useState } from 'react';

const CurrencyConverter = () => {
  const [rates, setRates] = useState({
    mmkToVnd: '',
    mmkToThb: '',
    thbToVnd: '',
    vndAmount: ''
  });
  
  const [results, setResults] = useState({
    directConversion: 0,
    indirectConversion: 0,
    message: ''
  });
  
  const [showResults, setShowResults] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRates(prev => ({
      ...prev,
      [name]: value.replace(/[^0-9.]/g, '')
    }));
  };

  const calculateConversion = () => {
    const mmkToVnd = parseFloat(rates.mmkToVnd);
    const mmkToThb = parseFloat(rates.mmkToThb);
    const thbToVnd = parseFloat(rates.thbToVnd);
    const vndAmount = parseFloat(rates.vndAmount);

    if (!mmkToVnd || !mmkToThb || !thbToVnd || !vndAmount) {
      alert('Please enter valid numerical values');
      return;
    }

    const directConversion = vndAmount / mmkToVnd;
    const mmkPerThb = 100000 / mmkToThb;
    const thbRequired = vndAmount / thbToVnd;
    const indirectConversion = thbRequired * mmkPerThb;

    setResults({
      directConversion,
      indirectConversion,
      message: directConversion < indirectConversion ? 
        'Direct conversion is cheaper' : 
        'Indirect conversion is cheaper'
    });
    setShowResults(true);
  };

  const resetFields = () => {
    setRates({
      mmkToVnd: '',
      mmkToThb: '',
      thbToVnd: '',
      vndAmount: ''
    });
    setResults({
      directConversion: 0,
      indirectConversion: 0,
      message: ''
    });
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-indigo-600 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <h1 className="text-3xl font-bold text-indigo-600 mb-8 text-center">
                  VND to MMK Currency Converter
                </h1>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">MMK to VND Rate</label>
                    <input
                      type="text"
                      name="mmkToVnd"
                      value={rates.mmkToVnd}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700">MMK to THB Rate</label>
                    <input
                      type="text"
                      name="mmkToThb"
                      value={rates.mmkToThb}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700">THB to VND Rate</label>
                    <input
                      type="text"
                      name="thbToVnd"
                      value={rates.thbToVnd}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Amount of VND</label>
                    <input
                      type="text"
                      name="vndAmount"
                      value={rates.vndAmount}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div className="flex space-x-4 mt-8">
                  <button
                    onClick={calculateConversion}
                    className="flex-1 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
                  >
                    Calculate
                  </button>
                  <button
                    onClick={resetFields}
                    className="flex-1 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
                  >
                    Reset
                  </button>
                </div>

                {showResults && (
                  <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                    <h2 className="text-xl font-semibold mb-4">Results:</h2>
                    <p className={`mb-2 ${results.directConversion <= results.indirectConversion ? 'text-green-600' : 'text-red-600'}`}>
                      Direct MMK required: {results.directConversion.toFixed(2)}
                    </p>
                    <p className={`mb-2 ${results.indirectConversion <= results.directConversion ? 'text-green-600' : 'text-red-600'}`}>
                      Indirect MMK required: {results.indirectConversion.toFixed(2)}
                    </p>
                    <p className="font-medium text-indigo-600">{results.message}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
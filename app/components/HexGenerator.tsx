'use client';

import { useState } from 'react';
import { generateHexFormatted } from '@/lib/hex';

export default function HexGenerator() {
  const [length, setLength] = useState(32); // hex characters
  const [uppercase, setUppercase] = useState(false);
  const [hex, setHex] = useState('');
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    const h = generateHexFormatted(length, uppercase);
    setHex(h);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-4 rounded-lg bg-gray-800 text-white">
      <h2 className="text-2xl font-bold mb-4 text-center">Hex / PSK Generator</h2>

      <div className="flex items-center mb-4">
        <label htmlFor="hexLength" className="mr-2">Hex length:</label>
        <input
          type="range"
          id="hexLength"
          min={2}
          max={128}
          step={1}
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
        />
        <span className="ml-4 w-12 text-right font-mono">{length} ch</span>
      </div>

      <div className="flex items-center gap-4 mb-4">
        <label htmlFor="uppercase" className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            id="uppercase"
            checked={uppercase}
            onChange={() => setUppercase(!uppercase)}
            className="form-checkbox h-5 w-5 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
          />
          <span className="ml-2">Uppercase</span>
        </label>
        <div className="text-sm text-gray-400">Bytes: <span className="font-mono">{Math.ceil(length / 2)}</span></div>
      </div>

      <button
        onClick={handleGenerate}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
      >
        Generate Hex
      </button>

      {hex && (
        <div className="mt-4 p-4 bg-gray-700 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold">Generated Hex:</h3>
            <button
              onClick={handleCopy}
              className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-1 px-2 rounded transition duration-300"
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <p className="text-lg break-all font-mono">{hex}</p>
          <p className="text-sm mt-2 text-gray-400">Tip: This is cryptographically secure using the browsers crypto API.</p>
        </div>
      )}
    </div>
  );
}

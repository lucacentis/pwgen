'use client';

import { useState } from 'react';
import { generatePassword, calculateEntropy } from '@/lib/password';

export default function PasswordGenerator() {
  const [length, setLength] = useState(12);
  const [useUppercase, setUseUppercase] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(true);
  const [password, setPassword] = useState('');
  const [entropy, setEntropy] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleGeneratePassword = () => {
    const newPassword = generatePassword(length, useUppercase, useNumbers, useSymbols);
    setPassword(newPassword);
    const charsetSize = 26 + (useUppercase ? 26 : 0) + (useNumbers ? 10 : 0) + (useSymbols ? 26 : 0);
    setEntropy(calculateEntropy(length, charsetSize));
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-4 rounded-lg bg-gray-800 text-white">
      <h2 className="text-2xl font-bold mb-4 text-center">Password Generator</h2>
      <div className="flex items-center mb-4">
        <label htmlFor="length" className="mr-2">Length:</label>
        <input
          type="range"
          id="length"
          min="8"
          max="40"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
        />
        <span className="ml-4 w-8 text-center">{length}</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
        <label htmlFor="uppercase" className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            id="uppercase"
            checked={useUppercase}
            onChange={() => setUseUppercase(!useUppercase)}
            className="form-checkbox h-5 w-5 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
          />
          <span className="ml-2">Uppercase</span>
        </label>
        <label htmlFor="numbers" className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            id="numbers"
            checked={useNumbers}
            onChange={() => setUseNumbers(!useNumbers)}
            className="form-checkbox h-5 w-5 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
          />
          <span className="ml-2">Numbers</span>
        </label>
        <label htmlFor="symbols" className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            id="symbols"
            checked={useSymbols}
            onChange={() => setUseSymbols(!useSymbols)}
            className="form-checkbox h-5 w-5 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
          />
          <span className="ml-2">Symbols</span>
        </label>
      </div>
      <button
        onClick={handleGeneratePassword}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
      >
        Generate Password
      </button>
      {password && (
        <div className="mt-4 p-4 bg-gray-700 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold">Generated Password:</h3>
            <button
              onClick={handleCopyToClipboard}
              className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-1 px-2 rounded transition duration-300"
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <p className="text-lg break-all font-mono">
            {password.split('').map((ch, i) => {
              if (/\d/.test(ch)) {
                return (
                  <span key={i} className="text-blue-400">
                    {ch}
                  </span>
                );
              }

              if (/[A-Za-z]/.test(ch)) {
                return (
                  <span key={i} className="text-white">
                    {ch}
                  </span>
                );
              }

              return (
                <span key={i} className="text-red-400">
                  {ch}
                </span>
              );
            })}
          </p>
          <p className="text-sm mt-2 text-gray-400">Entropy: {entropy.toFixed(2)} bits</p>
        </div>
      )}
    </div>
  );
}

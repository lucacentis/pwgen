'use client';

import { useState } from 'react';
import { generatePassphrase, calculateEntropy } from '@/lib/passphrase';

export default function PassphraseGenerator() {
  const [numWords, setNumWords] = useState(4);
  const [separator, setSeparator] = useState('-');
  const [passphrase, setPassphrase] = useState('');
  const [copied, setCopied] = useState(false);
  const [addRandomNumber, setAddRandomNumber] = useState(true);
  const [entropy, setEntropy] = useState(0);

  const handleGeneratePassphrase = () => {
    const newPassphrase = generatePassphrase(numWords, separator, addRandomNumber);
    setPassphrase(newPassphrase);
    setEntropy(calculateEntropy(numWords, addRandomNumber));
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(passphrase);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-4 rounded-lg bg-gray-800 text-white">
      <h2 className="text-2xl font-bold mb-4 text-center">Passphrase Generator</h2>
      <div className="flex items-center mb-4">
        <label htmlFor="numWords" className="mr-2">Words:</label>
        <input
          type="range"
          id="numWords"
          min="3"
          max="10"
          value={numWords}
          onChange={(e) => setNumWords(Number(e.target.value))}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
        />
        <span className="ml-4 w-8 text-center">{numWords}</span>
      </div>
      <div className="flex flex-col gap-4 mb-4">
        <div className="flex items-center">
          <label htmlFor="separator" className="mr-2">Separator:</label>
          <select
            id="separator"
            value={separator}
            onChange={(e) => setSeparator(e.target.value)}
            className="p-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="-">Hyphen</option>
            <option value=".">Dot</option>
            <option value=",">Comma</option>
            <option value="_">Underscore</option>
          </select>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="addRandomNumber"
            checked={addRandomNumber}
            onChange={() => setAddRandomNumber(!addRandomNumber)}
            className="form-checkbox h-5 w-5 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
          />
          <label htmlFor="addRandomNumber" className="ml-2 cursor-pointer">Include Numbers</label>
        </div>
      </div>
      <button
        onClick={handleGeneratePassphrase}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
      >
        Generate Passphrase
      </button>
      {passphrase && (
        <div className="mt-4 p-4 bg-gray-700 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold">Generated Passphrase:</h3>
            <button
              onClick={handleCopyToClipboard}
              className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-1 px-2 rounded transition duration-300"
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <p className="text-lg break-all font-mono">
            {passphrase.split('').map((ch, i) => {
              if (/\d/.test(ch)) {
                return (
                  <span key={i} className="text-blue-400">
                    {ch}
                  </span>
                );
              }

              if (/\s/.test(ch) || /[A-Za-z]/.test(ch)) {
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

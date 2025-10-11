"use client";
import { useState } from 'react';
import PasswordGenerator from './components/PasswordGenerator';
import PassphraseGenerator from './components/PassphraseGenerator';

export default function Page() {
  const [generatorType, setGeneratorType] = useState('password'); // 'password' or 'passphrase'

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 md:p-12 lg:p-24 bg-gray-900 text-white">
      <div className="w-full max-w-lg mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Password and Passphrase Generator</h1>
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setGeneratorType('password')}
            className={`px-4 py-2 rounded-l-lg ${generatorType === 'password' ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'}`}
          >
            Password
          </button>
          <button
            onClick={() => setGeneratorType('passphrase')}
            className={`px-4 py-2 rounded-r-lg ${generatorType === 'passphrase' ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'}`}
          >
            Passphrase
          </button>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          {generatorType === 'password' ? <PasswordGenerator /> : <PassphraseGenerator />}
        </div>
      </div>
    </main>
  );
}
"use client";
import PasswordGenerator from './components/PasswordGenerator';
import PassphraseGenerator from './components/PassphraseGenerator';
import HexGenerator from './components/HexGenerator';
import { parseAsString, useQueryState } from 'nuqs';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  const [generatorType] = useQueryState(
    'type',
    parseAsString.withDefault('password').withOptions({ history: 'push' })
  );

  const handleTypeChange = (newType: string) => {
    router.push(`/?type=${newType}`);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 md:p-12 lg:p-24 bg-gray-900 text-white">
      <div className="w-full max-w-lg mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Simple & Secure Generator</h1>
        <div className="flex justify-center mb-8">
          <button
            onClick={() => handleTypeChange('password')}
            className={`px-4 py-2 rounded-l-lg ${generatorType === 'password' ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'}`}
          >
            Password
          </button>
          <button
            onClick={() => handleTypeChange('passphrase')}
            className={`px-4 py-2 ${generatorType === 'passphrase' ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'}`}
          >
            Passphrase
          </button>
          <button
            onClick={() => handleTypeChange('hex')}
            className={`px-4 py-2 rounded-r-lg ${generatorType === 'hex' ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'}`}
          >
            Hex
          </button>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          {generatorType === 'password' ? (
            <PasswordGenerator />
          ) : generatorType === 'passphrase' ? (
            <PassphraseGenerator />
          ) : (
            <HexGenerator />
          )}
        </div>
      </div>
    </main>
  );
}
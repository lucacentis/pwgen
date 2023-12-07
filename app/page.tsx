"use client";
import { useState } from 'react';

export default function Home() {
  const [length, setLength] = useState(12);
  const [useUppercase, setUseUppercase] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(true);
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    const charset = 'abcdefghijkmnopqrstuvwxyz'; // abcdefghijklmnopqrstuvwxyz
    const uppercaseCharset = 'ABCDEFGHJKLMNPQRSTUVWXYZ'; // ABCDEFGHIJKLMNOPQRSTUVWXYZ
    const numberCharset = '123456789'; // 0123456789
    const symbolCharset = '!@#$%&*()+[]{}.<>?'; // !@#$%^&*()_+[]{}|;:,.<>?

    let finalCharset = charset;

    if (useUppercase) finalCharset += uppercaseCharset;
    if (useNumbers) finalCharset += numberCharset;
    if (useSymbols) finalCharset += symbolCharset;

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * finalCharset.length);
      generatedPassword += finalCharset[randomIndex];
    }
    
    setPassword(generatedPassword);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:text-left">
          <h1 className="text-4xl font-bold mb-8">Password Generator</h1>
          <label className="mb-4">
            Length:
            <input
              type="range"
              min="8"
              max="40"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="ml-2 p-2 border border-gray-300 rounded"
            />
            <span className="ml-2">{length}</span>
          </label>
          <br />
          <label className="mb-4">
            Include Uppercase:
            <input
              type="checkbox"
              checked={useUppercase}
              onChange={() => setUseUppercase(!useUppercase)}
              className="ml-2"
            />
          </label>
          <br />
          <label className="mb-4">
            Include Numbers:
            <input
              type="checkbox"
              checked={useNumbers}
              onChange={() => setUseNumbers(!useNumbers)}
              className="ml-2"
            />
          </label>
          <br />
          <label className="mb-4">
            Include Symbols:
            <input
              type="checkbox"
              checked={useSymbols}
              onChange={() => setUseSymbols(!useSymbols)}
              className="ml-2"
            />
          </label>
          <br />
          <button onClick={generatePassword} className="bg-blue-500 text-white px-4 py-2 rounded">
            Generate Password
          </button>
          <br />
          {password && (
            <div className="mt-4">
              <h2 className="text-2xl font-semibold">Generated Password:</h2>
              <p className="text-xl">{password}</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

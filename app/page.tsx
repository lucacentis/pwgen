"use client";
import { useState } from 'react';

export default function Page() {
  const [lengthPassword, setLengthPassword] = useState(12);
  const [lengthPassphrase, setLengthPassphrase] = useState(4);
  const [useUppercase, setUseUppercase] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(true);
  const [password, setPassword] = useState('');
  const [passphrase, setPassphrase] = useState('');
  const [generatorType, setGeneratorType] = useState(true); // true = password, false = passphrase

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
    for (let i = 0; i < lengthPassword; i++) {
      const randomIndex = Math.floor(Math.random() * finalCharset.length);
      generatedPassword += finalCharset[randomIndex];
    }
    
    setPassword(generatedPassword);
  };

  const generatePassphrase = () => {
    const words = [
      'apple',
      'banana',
      'cherry',
      'dragonfruit',
      'elderberry',
      'fig',
      'grape',
      'honeydew',
      'imbe',
      'jackfruit',
      'kiwi',
      'lemon',
      'mango',
      'nectarine',
      'orange',
      'pear',
      'quince',
      'raspberry',
      'strawberry',
      'tangerine',
      'ugli',
      'vanilla',
      'watermelon',
      'xigua',
      'yuzu',
      'zucchini',
    ];

    let generatedPassphrase = '';
    for (let i = 0; i < lengthPassphrase; i++) {
      const randomIndex = Math.floor(Math.random() * words.length);
      generatedPassphrase += words[randomIndex];
      
      if (i !== lengthPassphrase - 1) {
        generatedPassphrase += '-';
      }
    }
    
    setPassphrase(generatedPassphrase);
  }

  const handleToggleGenerator = () => {
    setGeneratorType(!generatorType);
    setPassword('');
    setPassphrase('');
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:text-left">
          <button onClick={handleToggleGenerator} className="bg-green-500 hover:bg-green-700 text-white font-bold mt-4 mb-20 px-4 py-2 rounded">
            Toggle Generator
          </button>
          <br />
          {generatorType ? (
            <div>
              <h1 className="text-4xl font-bold mb-8">Password Generator</h1>
              <p className="text-xl mb-4">
                Generate a random password with the options below.
              </p>
              <br />
              <label className="mb-4">
                Length:
                <input
                  type="range"
                  min="8"
                  max="40"
                  value={lengthPassword}
                  onChange={(e) => setLengthPassword(Number(e.target.value))}
                  className="ml-2 p-2 border border-gray-300 rounded"
                />
                <span className="ml-2">{lengthPassword}</span>
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
              <button onClick={generatePassword} className="bg-green-500 hover:bg-green-700 text-white font-bold mt-4 px-4 py-2 rounded">
                Generate Password
              </button>
              <button onClick={() => navigator.clipboard.writeText(password)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold ml-4 px-4 py-2 rounded">
                Copy to Clipboard
              </button>
              <button onClick={() => setPassword('')} className="bg-red-500 hover:bg-red-700 text-white font-bold ml-4 px-4 py-2 rounded">
                Clear
              </button>
              <br />

              {password && (
                <div className="mt-4">
                  <h2 className="text-2xl font-semibold">Generated Password:</h2>
                  <p className="text-xl">{password}</p>
                </div>
              )}
            </div>
          ) : (
            <div>
              <h1 className="text-4xl font-bold mb-8">Passphrase Generator</h1>
              <p className="text-xl mb-4">
                Generate a random passphrase with the options below.
              </p>
              <br />
              <label className="mb-4">
                Length:
                <input
                  type="range"
                  min="4"
                  max="10"
                  value={lengthPassphrase}
                  onChange={(e) => setLengthPassphrase(Number(e.target.value))}
                  className="ml-2 p-2 border border-gray-300 rounded"
                />
                <span className="ml-2">{lengthPassphrase}</span>
              </label>
              <br />
              <button onClick={generatePassphrase} className="bg-green-500 hover:bg-green-700 text-white font-bold mt-4 px-4 py-2 rounded">
                Generate Passphrase
              </button>
              <button onClick={() => navigator.clipboard.writeText(passphrase)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold ml-4 px-4 py-2 rounded">
                Copy to Clipboard
              </button>
              <button onClick={() => setPassphrase('')} className="bg-red-500 hover:bg-red-700 text-white font-bold ml-4 px-4 py-2 rounded">
                Clear
              </button>
              <br />

              {passphrase && (
                <div className="mt-4">
                  <h2 className="text-2xl font-semibold">Generated Passphrase:</h2>
                  <p className="text-xl">{passphrase}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

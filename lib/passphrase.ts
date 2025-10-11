import { wordlist } from './wordlist';

export const generatePassphrase = (
  numWords: number,
  separator: string,
  addRandomNumber: boolean
): string => {
  let passphrase = '';
  const crypto = window.crypto;
  const randomValues = new Uint32Array(numWords);
  crypto.getRandomValues(randomValues);

  for (let i = 0; i < numWords; i++) {
    passphrase += wordlist[randomValues[i] % wordlist.length];
    if (addRandomNumber) {
      const randomNum = new Uint32Array(1);
      crypto.getRandomValues(randomNum);
      passphrase += randomNum[0] % 10;
    }
    if (i < numWords - 1) {
      passphrase += separator;
    }
  }

  return passphrase;
};

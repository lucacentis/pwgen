
export const generatePassword = (
  length: number,
  useUppercase: boolean,
  useNumbers: boolean,
  useSymbols: boolean
): string => {
  const lowercaseCharset = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseCharset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numberCharset = '0123456789';
  const symbolCharset = '!@#$%^&*()_+-=[]{}|;:,.<>?';

  let charset = lowercaseCharset;
  let password = '';

  const crypto = window.crypto;

  if (useUppercase) {
    charset += uppercaseCharset;
    const randomValues = new Uint32Array(1);
    crypto.getRandomValues(randomValues);
    password += uppercaseCharset[randomValues[0] % uppercaseCharset.length];
  }
  if (useNumbers) {
    charset += numberCharset;
    const randomValues = new Uint32Array(1);
    crypto.getRandomValues(randomValues);
    password += numberCharset[randomValues[0] % numberCharset.length];
  }
  if (useSymbols) {
    charset += symbolCharset;
    const randomValues = new Uint32Array(1);
    crypto.getRandomValues(randomValues);
    password += symbolCharset[randomValues[0] % symbolCharset.length];
  }

  const remainingLength = length - password.length;
  const randomValues = new Uint32Array(remainingLength);
  crypto.getRandomValues(randomValues);

  for (let i = 0; i < remainingLength; i++) {
    password += charset[randomValues[i] % charset.length];
  }

  // Shuffle the password to ensure randomness
  const passwordArray = password.split('');
  for (let i = passwordArray.length - 1; i > 0; i--) {
    const randomValues = new Uint32Array(1);
    crypto.getRandomValues(randomValues);
    const j = randomValues[0] % (i + 1);
    [passwordArray[i], passwordArray[j]] = [passwordArray[j], passwordArray[i]];
  }

  return passwordArray.join('');
};

export const calculateEntropy = (length: number, charsetSize: number): number => {
  return Math.log2(Math.pow(charsetSize, length));
};

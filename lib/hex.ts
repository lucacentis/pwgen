export const generateHex = (hexLength: number): string => {
  // Ensure hexLength is a non-negative integer
  const length = Math.max(0, Math.floor(hexLength));
  if (length === 0) return '';

  // Number of bytes required to produce the requested hex chars
  const bytes = Math.ceil(length / 2);
  const arr = new Uint8Array(bytes);
  const crypto = window.crypto;
  crypto.getRandomValues(arr);

  let hex = '';
  for (let i = 0; i < arr.length; i++) {
    hex += arr[i].toString(16).padStart(2, '0');
  }

  // Trim to the requested hex length (in case of odd lengths)
  return hex.slice(0, length);
};

// Convenience wrapper that returns uppercase hex when requested
export const generateHexFormatted = (hexLength: number, uppercase = false): string => {
  const h = generateHex(hexLength);
  return uppercase ? h.toUpperCase() : h;
};

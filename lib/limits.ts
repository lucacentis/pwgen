export const PASSWORD_LENGTH = {
  min: 8,
  max: 40,
  default: 12,
} as const;

export const PASSPHRASE_WORDS = {
  min: 3,
  max: 10,
  default: 4,
} as const;

export const HEX_LENGTH = {
  min: 2,
  max: 128,
  default: 32,
} as const;

export const clampInteger = (
  value: number,
  min: number,
  max: number,
  fallback: number
): number => {
  if (!Number.isFinite(value)) return fallback;

  return Math.min(max, Math.max(min, Math.floor(value)));
};

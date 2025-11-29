# pwgen - Password, Passphrase & Hex Generator

A small, secure, and modern generator for passwords, passphrases and hex strings built with Next.js and TypeScript.

## Features

### Password Generator

- Password generator with customizable length (8–40) and character sets (uppercase, numbers, symbols).
- Passphrase generator using an EFF-style wordlist with configurable word count and separators.
- Hex string generator with configurable length and optional uppercase output.
- Cryptographically secure randomness using `window.crypto`.
- Entropy calculation for generated passwords and passphrases.
- UI highlights: digits render in blue and symbols in red to aid visual scanning.

## Quick Start

To run the application locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/lucacentis/pwgen.git
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
    ```bash
    npm run dev
    ```
4. Open your browser and navigate to `http://localhost:3000`.

## Technologies

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

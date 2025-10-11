# pwgen - Password and Passphrase Generator

A simple, secure, and modern password and passphrase generator built with Next.js and TypeScript.

## Features

### Password Generator
- **Customizable Length:** Generate passwords from 8 to 40 characters long.
- **Character Sets:** Include uppercase letters, numbers, and symbols.
- **Cryptographically Secure:** Uses `window.crypto` for secure random number generation.
- **Password Strength:** Calculates and displays the entropy of the generated password.

### Passphrase Generator
- **Customizable Length:** Generate passphrases from 3 to 10 words long.
- **EFF Wordlist:** Uses the EFF long wordlist for generating passphrases.
- **Customizable Separator:** Choose between four separators: hyphen, dot, comma, and underscore.
- **Include Numbers:** Option to add a random number (0-9) after each word.
- **Cryptographically Secure:** Uses `window.crypto` for secure random word selection.

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/pwgen.git
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

## Technologies Used

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

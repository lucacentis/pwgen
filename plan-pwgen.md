# Password and Passphrase Generator Rebuild Plan

## 1. Project Setup
- [x] Create `lib` directory for generation logic.
- [x] Create `lib/password.ts` for password generation logic.
- [x] Create `lib/passphrase.ts` for passphrase generation logic.
- [x] Fetch and store the EFF long wordlist.

## 2. Core Logic Implementation
- [x] Implement cryptographically secure password generation in `lib/password.ts`.
  - [x] Use `window.crypto.getRandomValues()`.
  - [x] Function to generate password based on length and character sets.
  - [x] Ensure character set inclusion.
  - [x] Function to calculate password entropy.
- [x] Implement passphrase generation in `lib/passphrase.ts`.
  - [x] Load and use the EFF wordlist.
  - [x] Use `window.crypto.getRandomValues()` to select words.
  - [x] Function to generate passphrase with a specified number of words and separator.

## 3. UI Overhaul (`app/page.tsx`)
- [x] Redesign the main component with a dark theme and improved layout.
- [x] Create separate components for the password and passphrase generators.
- [x] Integrate the new generation logic from the `lib` modules.
- [x] Add controls for password length, character sets, and number of passphrase words.
- [x] Display the generated password/passphrase.
- [x] Implement a "copy to clipboard" button with user feedback.
- [x] Display a password strength indicator.

## 4. Final Touches
- [x] Review and refactor the code for clarity and performance.
- [x] Add comments where necessary.
- [x] Verify that all functionality works as expected.
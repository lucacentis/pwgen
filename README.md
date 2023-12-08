# Password Generator
This project is a simple password generator built with React. It allows users to generate a random password based on selected criteria.
## Features
- Generate a random password with a length between 8 and 40 characters.
- Option to include uppercase letters in the password.
- Option to include numbers in the password.
- Option to include symbols in the password.
## How to Use
1. Clone this repository.
2. Install the dependencies with ``npm install``.
3. Start the development server with ``npm run dev``.
4. Open your web browser to ``http://localhost:3000``.
5. Use the form to select your password criteria and click "Generate Password".
## Code Overview
The main component is ``Home``. It uses React's useState hook to manage state for the password length, and whether to include uppercase letters, numbers, and symbols. The ``generatePassword`` function creates a string of possible characters based on the state, then generates a random password of the specified length. The password is displayed on the page.
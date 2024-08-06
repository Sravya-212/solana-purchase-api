# Solana Purchase API

This project is a Node.js and Express API that allows users to purchase Solana using UPI or card payments in INR or USD.
This `README.md` covers the main aspects of my project, including installation, usage, API endpoints, project structure, and development guidelines.


## Features

- Buy Solana using UPI or card
- Supports payments in INR and USD
- Uses ES6 modules
- Simple and extensible codebase

## Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x)

## Installation-----------

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/solana-purchase-api.git
   cd solana-purchase-api
Install the dependencies:

npm install


Usage----------
Start the server:

node index.js

The server will be running on http://localhost:3000.

API Endpoints-------------
Buy Solana:
URL: `/api/buy-solana`
Method: `POST`
Headers:
`Content-Type: application/json`
Body Parameters:
`paymentMethod` (string): Payment method (e.g., UPI, Card)
`amount` (number): Amount to be paid
`currency` (string): Currency (INR or USD)


Request Example-----------------
// code for postman to send the POST requet
POST /api/buy-solana
Content-Type: application/json

{
  "paymentMethod": "UPI",
  "amount": 1000,
  "currency": "INR"
}

Response Example-----------------

{
  "message": "Payment successful, Solana purchased",
  "transactionId": "abc123def456"
}


Project Structure--------

solana-purchase-api/
├── node_modules/
├── routes/
│   └── purchaseRoutes.js
├── utils/
│   └── paymentProcessor.js
├── .gitignore
├── index.js
├── package.json
└── README.md


Development------------
ESLint and Prettier:
This project uses ESLint and Prettier for linting and code formatting.

1. Install ESLint and Prettier:
npm install eslint prettier eslint-plugin-prettier eslint-config-prettier --save-dev

2. Create .eslintrc.json:
{
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:prettier/recommended"
  ],
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto"
      }
    ]
  }
}

3. Create .prettierrc:
{
  "singleQuote": true,
  "semi": false
}

4. Add VS Code settings:

Create or update your .vscode/settings.json:
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "prettier.requireConfig": true
}


# Crypto Wallet API

A Node.js API service for generating Bitcoin wallet information from a mnemonic phrase using Express.js and various cryptocurrency libraries.

## Features

- Generates Bitcoin address, private key, and WIF key from a given mnemonic.
- Follows BIP44 path for Bitcoin derivation.
- Built with Express.js for a robust API structure.
- Secure and optimized using industry-standard libraries.
 

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/crypto-wallet-api.git
    cd crypto-wallet-api
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file with the following content:
    ```plaintext
    PORT=3000
    ```

4. Start the server:
    ```bash
    node app.js
    ```

## Usage

Use Postman or any API client to test the endpoint:

- **URL**: `http://localhost:3000/api/wallet/create`
- **Method**: POST
- **Body**:
    ```json
    {
        "mnemonic": "replace swamp motion employ inch amused ritual clown liberty remove orbit budget"
    }
    ```

## Example Response

```json
{
    "address": "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
    "path": "m/44'/0'/0'/0/0",
    "privateKey": "0c28fca386c7a2279d215eede366f6eb15a3cc9ef9b38530d9a3adf0af6c310d",
    "WIF": "5HueCGU8rMjxEXxiPuD5BDu26TmVQjqpsfsbyT3sK4I5w4Q3QD6"
}
```

# Testing

To run jest tests 
npm test


# Contributing

Contributions are welcome! Please follow these steps to contribute:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes.
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature-branch).
Open a pull request.

# License 

This project is licensed under the MIT License.

# Contact

If you have any questions or suggestions, feel free to open an issue or contact me directly.


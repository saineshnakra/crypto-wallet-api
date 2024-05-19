const bip39 = require("bip39");
const bitcoin = require("bitcoinjs-lib");
const HDKey = require("hdkey");
const CoinKey = require("coinkey");

const generateWalletInfo = (mnemonic) => {
  const seed = bip39.mnemonicToSeedSync(mnemonic);

  // Create an HD wallet key from the seed
  const hdKey = HDKey.fromMasterSeed(Buffer.from(seed, "hex"));

  // Define the BIP44 path for Bitcoin (m/44'/0'/0'/0/0)
  const path = "m/44'/0'/0'/0/0";

  // Derive a child key from the HD key using the defined path
  const child = hdKey.derive(path);

  // Create a CoinKey from the derived child private key and specify the Bitcoin network
  const coinKey = new CoinKey(child.privateKey, bitcoin.networks.bitcoin);

  // Prepare an object with address, path, private key, and Wallet Import Format (WIF) key
  const info = {
    address: coinKey.publicAddress, // Bitcoin public address
    path, // BIP44 path
    privateKey: coinKey.privateKey.toString("hex"), // Private key in hexadecimal
    WIF: coinKey.privateWif, // Wallet Import Format (WIF) private key
  };

  return info;
};

module.exports = { generateWalletInfo };

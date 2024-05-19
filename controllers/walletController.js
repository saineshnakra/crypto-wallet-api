const { generateWalletInfo } = require("../services/walletService");

const createWallet = (req, res) => {
  const { mnemonic } = req.body;
  
  if (!mnemonic) {
    return res.status(400).json({ error: "Mnemonic is required" });
  }

  try {
    const walletInfo = generateWalletInfo(mnemonic);
    return res.json(walletInfo);
  } catch (error) {
    return res.status(500).json({ error: "Error generating wallet info" });
  }
};

module.exports = { createWallet };

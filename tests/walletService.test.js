const { generateWalletInfo } = require("../services/walletService");

describe("Wallet Service", () => {
  test("should generate wallet info from mnemonic", () => {
    const mnemonic =
      "replace swamp motion employ inch amused ritual clown liberty remove orbit budget";
    const walletInfo = generateWalletInfo(mnemonic);

    expect(walletInfo).toHaveProperty("address");
    expect(walletInfo).toHaveProperty("path");
    expect(walletInfo).toHaveProperty("privateKey");
    expect(walletInfo).toHaveProperty("WIF");

    expect(walletInfo.address).toBe("1KDAsrVmvSeDAs8P2nqSFRhABhNfu1aM9T");
    expect(walletInfo.path).toBe("m/44'/0'/0'/0/0");
    expect(walletInfo.privateKey).toBe(
      "254fbbc7e390f88539d832daa4d03db502648666581417dcdecfae3a2ae23175"
    );
    expect(walletInfo.WIF).toBe(
      "KxUEqsUXePmjrVP5SHvWykpJU4oM7S4bnTvsQSZnU5TAvD9wWzon"
    );
  });
});

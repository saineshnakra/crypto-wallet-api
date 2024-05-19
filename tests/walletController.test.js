const request = require("supertest");
const express = require("express");
const walletRoutes = require("../routes/walletRoutes");

const app = express();
app.use(express.json());
app.use("/api/wallet", walletRoutes);

describe("Wallet Controller", () => {
  test("POST /api/wallet/create should generate wallet info", async () => {
    const response = await request(app).post("/api/wallet/create").send({
      mnemonic:
        "replace swamp motion employ inch amused ritual clown liberty remove orbit budget",
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("address");
    expect(response.body).toHaveProperty("path");
    expect(response.body).toHaveProperty("privateKey");
    expect(response.body).toHaveProperty("WIF");

    expect(response.body.address).toBe("1KDAsrVmvSeDAs8P2nqSFRhABhNfu1aM9T");
    expect(response.body.path).toBe("m/44'/0'/0'/0/0");
    expect(response.body.privateKey).toBe(
      "254fbbc7e390f88539d832daa4d03db502648666581417dcdecfae3a2ae23175"
    );
    expect(response.body.WIF).toBe(
      "KxUEqsUXePmjrVP5SHvWykpJU4oM7S4bnTvsQSZnU5TAvD9wWzon"
    );
  });

  test("POST /api/wallet/create should return error if mnemonic is missing", async () => {
    const response = await request(app).post("/api/wallet/create").send({});

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("error");
    expect(response.body.error).toBe("Mnemonic is required");
  });
});

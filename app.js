const express = require("express");
const dotenv = require("dotenv");
const walletRoutes = require("./routes/walletRoutes");

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/wallet", walletRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

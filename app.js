import express, { json } from "express";
import { config } from "dotenv";
import walletRoutes from "./routes/walletRoutes";

config();

const app = express();

app.use(json());

app.use("/api/wallet", walletRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

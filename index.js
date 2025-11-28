import express from "express";
import { getAvgPrice, getKline, getOrderBook, getTickers } from "./controllers/binanceAPIController.mjs";
import cors from "cors"
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors());
app.get("/", (req, res) => {
  res.send("Welcome to the Express.js Tutorial");
});
app.get("/kline/:symbol", getKline);
app.get("/orderbook/:symbol", getOrderBook);
app.get("/avgprice/:symbol", getAvgPrice);
app.get("/tickers", getTickers);

// Start the server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

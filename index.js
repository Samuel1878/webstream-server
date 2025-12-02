import express from "express";
import { getAggTrade, getAvgPrice, getGlobalMarketData, getInfoOfEachCoin, getKline, getLinksOfEachCoin, getOrderBook, getTickers } from "./controllers/binanceAPIController.mjs";
import cors from "cors"
const app = express();
const HOST = "www.auno.site";
const PORT = 3000
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors());
app.get("/", (req, res) => {
  res.send("Welcome to the Binance API Proxy Server");
});
app.get("/kline/:symbol", getKline);
app.get("/orderbook/:symbol", getOrderBook);
app.get("/avgprice/:symbol", getAvgPrice);
app.get("/tickers", getTickers);
app.get("/global", getGlobalMarketData);
app.get("/aggtrade/:symbol",getAggTrade);
app.get("/info/:coin_id", getLinksOfEachCoin);
app.get("/price/:coin_id", getInfoOfEachCoin);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});

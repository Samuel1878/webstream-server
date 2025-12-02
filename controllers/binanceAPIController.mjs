import axios from "axios";

export const getKline = async(req, res,next) => {
 
  try {
     const { interval } = req.query;
     // const date = new Date("2025-01-01").getTime()
     console.log(interval);
     const response = await axios.get(
       "https://api.binance.com/api/v3/uiKlines",
       {
         params: {
           interval: interval,
           symbol: req.params.symbol,
           // startTime:date,
           // endTime : new Date().getTime()
         },
       }
     );
     if (response.status === 200) {
       res.json(response.data);
       return;
     } else {
       res.json([]);
     }
  } catch (error) {
     res.json([]);
     console.log(error)
  }
 
};
export const getOrderBook = async (req, res , next) => {
  const response = await axios.get("https://api.binance.com/api/v3/depth", {
    params:{
      symbol:req.params.symbol,
      limit:36
    }
  });
  if (response.status===200){
    res.json(response.data);
    return
  } else {
    res.json([])
  }
}
export const getAggTrade = async (req, res, next) => {
try{  const response = await axios.get(
    "https://api.binance.com/api/v3/aggTrades",
    {
      params: {
        symbol: req.params.symbol,
        limit: 19,
      },
    }
  );
  if (response.status === 200) {
    res.json(response.data);
    return;
  } else {
    res.json([]);
  }}catch(e){
    console.log(e);
    res.json([])
  }
};
export const getTickers = async (req, res, next) => {
  const response = await axios.get(
    "https://api.binance.com/api/v3/ticker/24hr",
    {
      params: {
        symbol: req.params.symbol,
        limit: 36,
      },
    }
  );
  if (response.status === 200) {
    res.json(response.data);
    return;
  } else {
    res.json([]);
  }
};
export const getAvgPrice = async (req, res, next) => {
  const response = await axios.get("https://api.binance.com/api/v3/avgPrice", {
    params: {
      symbol: req.params.symbol,
    },
  });
    if (response.status === 200) {
      res.json(response.data);
      return;
    } else {
      res.json([]);
    }
};

export const getGlobalMarketData = async (req, res, next) => {
  try {
    const response = await axios.get("https://api.coinpaprika.com/v1/global");
    if (response.status ===200){
      res.json(response.data);
      return
    }
    res.json(null);
    next()
  } catch (error) {
    console.log(error);
    res.json(null)
     next();
  }
}

export  const getInfoOfEachCoin = async (req, res, next) => {
  try {
    const response = await axios.get(
      `https://api.coinpaprika.com/v1/tickers/${req.params.coin_id}`
    );
    if (response.status === 200) {
      res.json(response.data);
      return;
    } else {
      res.json(null);
    }
  } catch (error) {
    console.log(error);
    res.json(null);
  }
}

export const getLinksOfEachCoin = async (req, res, next) => {
  try {
    const response = await axios.get(
      `https://api.coinpaprika.com/v1/coins/${req.params.coin_id}`
    );
    if (response.status === 200) {
      res.json(response.data);
      return;
    } else {
      res.json(null);
    }
  } catch (error) {
    console.log(error);
    res.json(null);
  }
}
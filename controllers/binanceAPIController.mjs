import axios from "axios";

export const getKline = async(req, res,next) => {
  const { interval } = req.query;
  // const date = new Date("2025-01-01").getTime()
  console.log(interval)
  const response =await axios.get("https://api.binance.com/api/v3/uiKlines", {
    params:{
      interval:interval,
      symbol:req.params.symbol,
      // startTime:date,
      // endTime : new Date().getTime()
    }
  })
  if (response.status === 200) {
    res.json(response.data);
    return;
  } else {
    res.json([]);
  }
  next()
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
  const response = await axios.get("https://api.binance.com/api/v3/depth", {
    params: {
      symbol: req.params.symbol,
      limit: 36,
    },
  });
  if (response.status === 200) {
    res.json(response.data);
    return;
  } else {
    res.json([]);
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
}

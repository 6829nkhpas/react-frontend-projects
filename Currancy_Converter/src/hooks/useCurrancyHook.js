import { useState, useEffect } from "react";

const useCurrancyHook = (currency) => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://v6.exchangerate-api.com/v6/7ffc7dc93eb00b36a5c4608f/latest/${currency}`
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [currency]);
  console.log(data);

  return data;
};
export default useCurrancyHook;

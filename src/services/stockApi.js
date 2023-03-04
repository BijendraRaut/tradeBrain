import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const stockApiHeaders = {
  ApiKey: "4DLZG7FFV4WE5TDU",
};

const createRequest = (url) => ({ url, headers: stockApiHeaders });

const base_url = "https://www.alphavantage.co";

export const stockApi = createApi({
  reducerPath: "stockApi",
  baseQuery: fetchBaseQuery({ base_url }),
  endpoints: (builder) => ({
    getStocks: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
  }),
});

// 1 API  - search result
export const serachApiCaller = async (searchQuery, ApiKey) => {
  console.log(searchQuery, "search query");
  let result = fetch(
    `${base_url}/query?function=SYMBOL_SEARCH&keywords=${searchQuery}&apikey=${ApiKey}`
  )
    .then((res) => {
      console.log("success", res);
      return res.json();
    })
    .catch((err) => {
      console.log("failed", err);
    });

  return result;
};
// 2 API - company data on click
export const fetchCompanyData = (companyName, ApiKey) => {
  let result = fetch(
    `${base_url}/query?function=OVERVIEW&symbol=${companyName}&apikey=${ApiKey}`
  )
    .then((res) => {
      console.log(res.json());
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });

  return result;
};

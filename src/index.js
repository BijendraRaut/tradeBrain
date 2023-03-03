import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./app/store";
import { BrowserRouter as Router } from "react-router-dom";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { stockApi } from "./services/stockApi";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <ApiProvider api={stockApi}>
          <App />
        </ApiProvider>
      </Provider>
    </Router>
  </React.StrictMode>
);

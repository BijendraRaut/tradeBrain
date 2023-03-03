import { Route, Link, Routes, Router } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
  Exchanges,
  Homepage,
  Market,
  Navbar,
  StockDetails,
  Cryptocurrencies,
} from "./components";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/exchanges" element={<Exchanges />} />
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route path="/market" element={<Market />} />
              <Route path="/stock/:stockId" element={<StockDetails />} />
            </Routes>
          </div>
        </Layout>

        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Trade Brain Stocks <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/market">Market</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;

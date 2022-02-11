import * as React from 'react';
import {Layout, Space, Typography} from "antd";
import {Routes, Route, Link} from "react-router-dom";

import "./App.scss";
import {Navbar, Homepage, Cryptocurrencies, CryptoDetails, Exchanges, News} from "./components";

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Homepage/>}/>
              <Route path="cryptocurrencies" element={<Cryptocurrencies/>}/>
              <Route path="crypto">
                <Route path=":coinId" element={<CryptoDetails/>}/>
              </Route>
              <Route path="exchanges" element={<Exchanges/>}/>
              <Route path="news" element={<News/>}/>

            </Routes>
          </div>
        </Layout>

        <div className="footer">
          <Typography.Title level={5} style={{color: "white", textAlign: "center"}}>
            Cryptoverse <br/>
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;

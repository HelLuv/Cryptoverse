import * as React from 'react';
import {Layout} from "antd";
import {
  Routes,
  Route
} from "react-router-dom";

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
              <Route path="/" element={<Homepage/>}>
                <Route path="cryptocurrencies" element={<Cryptocurrencies/>}/>
                <Route path="crypto">
                  <Route path=":coinId" element={<CryptoDetails/>}/>
                </Route>
                <Route path="exchanges" element={<Exchanges/>}/>
                <Route path="news" element={<News/>}/>
              </Route>
            </Routes>
          </div>
        </Layout>
      </div>
      <div className="footer">

      </div>
    </div>
  );
}

export default App;

import * as React from 'react';
import {Avatar, Button, Menu, Typography} from "antd";
import {Link} from "react-router-dom";
import {BulbOutlined, FundFilled, HomeOutlined, MoneyCollectOutlined} from "@ant-design/icons";

import icon from "../../images/cryptocurrency.png";
import KeyBuilder from "../../utils/KeyBuilder";

interface NavbarProps {

}

const Navbar: React.FC<NavbarProps> = ({}) => {

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" alt="logo-icon"/>
        <Typography.Title level={2} className="logo">
          <Link to="/">Cryptoverse</Link>
        </Typography.Title>
        {/*<Button className="menu-control-container">*/}

        {/*</Button>*/}
      </div>
      <Menu theme="dark">
        <Menu.Item icon={<HomeOutlined/>} key={KeyBuilder.build}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FundFilled/>} key={KeyBuilder.build}>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item icon={<MoneyCollectOutlined/>} key={KeyBuilder.build}>
          <Link to="/exchanges">Exchanges</Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined/>} key={KeyBuilder.build}>
          <Link to="/news">News</Link>
        </Menu.Item>
      </Menu>
    </div>
  )
};

export default React.memo<NavbarProps>(Navbar);
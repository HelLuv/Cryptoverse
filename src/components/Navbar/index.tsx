import * as React from 'react';
import {Avatar, Button, Menu, Typography} from "antd";
import {Link} from "react-router-dom";
import {BulbOutlined, FundFilled, HomeOutlined, MoneyCollectOutlined} from "@ant-design/icons";

import icon from "../../images/cryptocurrency.png";

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
        <Menu.Item icon={<HomeOutlined/>}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FundFilled/>}>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item icon={<MoneyCollectOutlined/>}>
          <Link to="/exchanges">Exchanges</Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined/>}>
          <Link to="/news">News</Link>
        </Menu.Item>
      </Menu>
    </div>
  )
};

export default React.memo<NavbarProps>(Navbar);
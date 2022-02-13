import * as React from 'react';
import {Avatar, Button, Menu, Typography} from "antd";
import {Link, useLocation} from "react-router-dom";
import {BulbOutlined, FundFilled, HomeOutlined, MenuOutlined, MoneyCollectOutlined} from "@ant-design/icons";
import {throttle} from "lodash";

import icon from "../../images/cryptocurrency.png";

interface NavbarProps {

}


const Navbar: React.FC<NavbarProps> = ({}) => {
  const [isActiveMenu, setIsActiveMenu] = React.useState<boolean>(false);
  const [screenSize, setScreenSize] = React.useState<number | null>(null);
  const [activeMenu, setActiveMenu] = React.useState("/");
  React.useEffect(() => {
    const handleResize = throttle(() => setScreenSize(window.innerWidth), 300);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  React.useEffect(() => {
    if (screenSize && screenSize < 801) {
      setIsActiveMenu(false)
    } else {
      setIsActiveMenu(true);
    }
  }, [screenSize])

  const currentPage = useLocation();

  React.useEffect(() => {
    setActiveMenu(currentPage?.pathname)
  }, [currentPage])

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" alt="logo-icon"/>
        <Typography.Title level={2} className="logo">
          <Link to="/">Cryptoverse</Link>
        </Typography.Title>
        <Button
          className="menu-control-container"
          onClick={() => setIsActiveMenu((prevState) => !prevState)}
        >
          <MenuOutlined/>
        </Button>
      </div>
      {isActiveMenu && <Menu theme="dark" activeKey={activeMenu} selectedKeys={[activeMenu]}>
          <Menu.Item icon={<HomeOutlined/>} key="/">
              <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item icon={<FundFilled/>} key="/cryptocurrencies">
              <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined/>} key="/exchanges">
              <Link to="/exchanges">Exchanges</Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined/>} key="/news">
              <Link to="/news">News</Link>
          </Menu.Item>
      </Menu>}
    </div>
  )
};

export default React.memo<NavbarProps>(Navbar);
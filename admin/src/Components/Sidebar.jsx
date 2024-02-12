import React from "react";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlined from "@mui/icons-material/PersonOutlined";
import StoreIcon from "@mui/icons-material/Store";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Sidebar = () => {

  const linkStyle = "hover:bg-gray-400 hover:text-white mt-2 text-base hover";
  

  return (
    <div className="sidebar border-r-2 shadow-xl h-[100vh] ">
      <hr />
      <div className="center pl-[10px]">
        <ul>
          <p className="title mt-2">MAIN</p>
          <li className={linkStyle}>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title mt-2">LISTS</p>
          <Link to="users" >
            <li className={linkStyle}>
              <PersonOutlined className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="products" >
            <li className={linkStyle}>
              <StoreIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <li className={linkStyle}>
            <CreditCardIcon className="icon" />
            <span>Orders</span>
          </li>
          <li className={linkStyle}>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title mt-2">USEFUL</p>
          <li className={linkStyle}>
            <InsertChartIcon className="icon" />
            <span>Stats</span>
          </li>
          <li className={linkStyle}>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title mt-2">SERVICE</p>
          <li className={linkStyle}>
            <PsychologyIcon className="icon" />
            <span>Logs</span>
          </li>
          <li className={linkStyle}>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title mt-2">USER</p>
          <li className={linkStyle}>
            <AccountCircleIcon className="icon" />
            <span>Profile</span>
          </li>
          <li className={linkStyle}>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;

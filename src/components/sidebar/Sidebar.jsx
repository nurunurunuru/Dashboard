import "./sidebar.scss";
import DashboardCustomizeTwoToneIcon from '@mui/icons-material/DashboardCustomizeTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import Inventory2TwoToneIcon from '@mui/icons-material/Inventory2TwoTone';
import LocalShippingTwoToneIcon from '@mui/icons-material/LocalShippingTwoTone';
import QueryStatsTwoToneIcon from '@mui/icons-material/QueryStatsTwoTone';
import CircleNotificationsTwoToneIcon from '@mui/icons-material/CircleNotificationsTwoTone';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import AccountBoxTwoToneIcon from '@mui/icons-material/AccountBoxTwoTone';
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
        <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Admin-Dashboard</span>
        </Link>
        </div>
        <div className='center'>
            <ul>
                <p className="title">MAIN</p>
            <li>
                <DashboardCustomizeTwoToneIcon className="icon"/>
                <span>Dashboard</span>
            </li>
            <p className="title">Lists</p>
            <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
                <AccountCircleTwoToneIcon className="icon"/>
                <span>Users</span>
            </li>
            </Link>
            <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
                <Inventory2TwoToneIcon className="icon"/>
                <span>Products</span>
            </li>
            </Link>
            <li>
            <CreditCardIcon className="icon" />
                <span>Orders</span>
            </li>
            <li>
                <LocalShippingTwoToneIcon className="icon"/>
                <span>Delivery</span>
            </li>
            <p className="title">USEFUL</p>
            <li>
                <QueryStatsTwoToneIcon className="icon"/>
                <span>Stats</span>
            </li>
            <li>
                <CircleNotificationsTwoToneIcon className="icon"/>
                <span>Notifications</span>
            </li>
            <p className="title">SERVICE</p>
            <li>
                <PsychologyOutlinedIcon className="icon"/>
                <span>Logs</span>
            </li>
            <li>
                <FavoriteTwoToneIcon className="icon"/>
                <span>System Health</span>
            </li>
            <li>
                <SettingsTwoToneIcon className="icon"/>
                <span>Settings</span>
            </li>
            <p className="title">USER</p>
            <li>
                <AccountBoxTwoToneIcon className="icon"/>
                <span>Profile</span>
            </li>
            <li>
                <ExitToAppIcon className="icon" />
                <span>Logout</span>
            </li>
            </ul>
         </div>
        <div className='bottom'>
            <div className="colorOption"
            onClick={() => dispatch({ type: "LIGHT" })}></div>
            <div className="colorOption"
            onClick={() => dispatch({ type: "DARK" })}></div>
        </div>
    </div>
  )
}

export default Sidebar
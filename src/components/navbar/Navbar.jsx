import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext, useState } from "react";


const Navbar = ({ onSearch = () => {} }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value); // This will always be a function now
  };

  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className='search'>
        <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <SearchOutlinedIcon/>
        </div>
        <div className="items">
          <div className="item">
           <LanguageOutlinedIcon/> 
           English
          </div>
          <div className="item">
           <DarkModeOutlinedIcon
           className="icon"
           onClick={() => dispatch({ type: "TOGGLE" })}/>
          </div>
          <div className="item">
           <FullscreenExitOutlinedIcon/>
          </div>
          <div className="item">
           <NotificationsNoneOutlinedIcon/>
           <div className="counter">1</div>
          </div>
          <div className="item">
           <ChatBubbleOutlineOutlinedIcon/>
           <div className="counter">1</div>
          </div>
          <div className="item">
           <ListOutlinedIcon/>
          </div>
          <div className="item">
           <img 
           src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
           alt="" 
           className="avatar"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
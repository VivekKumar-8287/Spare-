import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
    <div className="flex shadow-lg h-14 ">
      <div className="flex m-2 w-full justify-between ">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="font-bold text-xl">Phone Guru Admin</span>
        </Link>
      </div>
        <div className="flex border-2  bg-white items-center justify-center rounded-lg">
          <input type="text" placeholder="Search..." />
          <SearchIcon />
        </div>
        <div className="flex gap-x-2">
          <div className="item mr-3">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
            />
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="item relative">
            <NotificationsNoneOutlinedIcon className="icon " />
            <div className="counter absolute top-0 right-0 bg-red-500 w-4 h-4 rounded-xl flex justify-center items-center text-white">1</div>
          </div>
          <div className="item relative">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter absolute top-0 right-0 bg-red-500 w-4 h-4 rounded-xl flex justify-center items-center text-white">2</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="w-9 h-9 rounded-[50%]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
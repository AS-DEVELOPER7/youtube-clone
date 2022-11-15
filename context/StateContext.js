import React, { useContext, useEffect, useRef, useState } from "react";
import { createContext } from "react";
import {
  AiFillFire,
  AiFillHome,
  AiOutlineFire,
  AiOutlineHome,
} from "react-icons/ai";
import { SiMyanimelist } from "react-icons/si";
import {
  RiMovie2Line,
  RiMovie2Fill,
  RiSlideshow3Line,
  RiSlideshow3Fill,
} from "react-icons/ri";
import { IoBookSharp, IoLogoGameControllerB } from "react-icons/io";
import { MdOutlineSportsBasketball, MdSportsBasketball } from "react-icons/md";
import { BsBook, BsBookFill } from "react-icons/bs";

const Context = createContext();
const StateContext = ({ children }) => {
  // data
  const links = [
    {
      title: "Home",
      Link: `/`,
      OutlineIcon: AiOutlineHome,
      FillIcon: AiFillHome,
    },
    {
      title: "Trending",
      Link: `/Explore`,
      OutlineIcon: AiOutlineFire,
      FillIcon: AiFillFire,
    },
    {
      title: "Anime",
      Link: `/Explore`,
      OutlineIcon: SiMyanimelist,
      FillIcon: SiMyanimelist,
    },
    {
      title: "Movies",
      Link: `/Explore`,
      OutlineIcon: RiMovie2Line,
      FillIcon: RiMovie2Fill,
    },
    {
      title: "Games",
      Link: `/Explore`,
      OutlineIcon: IoLogoGameControllerB,
      FillIcon: IoLogoGameControllerB,
    },
    {
      title: "Sports",
      Link: `/Explore`,
      OutlineIcon: MdOutlineSportsBasketball,
      FillIcon: MdSportsBasketball,
    },
    {
      title: "Entertainment",
      Link: `/Explore`,
      OutlineIcon: RiSlideshow3Line,
      FillIcon: RiSlideshow3Fill,
    },
    {
      title: "Educational",
      Link: `/Explore`,
      OutlineIcon: BsBook,
      FillIcon: BsBookFill,
    },
  ];
  // variables
  const [autoSearchValue, setAutoSearchValue] = useState("");
  const [searchV, setSearchV] = useState("all");
  const [searchValue, setSearchValue] = useState("trending");
  const [videoId, setVideoId] = useState("");
  const [channelId, setChannelId] = useState("");
  const [selected, setSelected] = useState("Home");
  const [hide, setHide] = useState(false);
  const [filter, setFilter] = useState("");
  const [home, setHome] = useState(true);

  return (
    <Context.Provider
      value={{
        searchValue,
        setSearchValue,
        autoSearchValue,
        setAutoSearchValue,
        // autoComplete,
        videoId,
        setVideoId,
        channelId,
        setChannelId,
        links,
        selected,
        setSelected,
        hide,
        setHide,
        searchV,
        setSearchV,
        filter,
        setFilter,
        home,
        setHome,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default StateContext;

export const useStateContext = () => useContext(Context);

import React from "react";
import NavListItem from "../component/NavListItem";
import navListData from "../data/navListDate";
import "../pages/Header.css";
import Search from "../component/Search,";
import Logo from "../images/featured_channel.jpg";

export default function Header() {
  return (
    <header>
      <a href="" className="logo">
        <img src={Logo} alt="" />
      </a>
      <NavListItem />
      {/* <ul className="nav">
        {navListData.map((nav) => (
          <NavListItem key={nav._id} nav={nav} />
        ))}
      </ul> */}
      <Search />
      <button>
        <a href="#">Sign in</a>
      </button>
    </header>
  );
}

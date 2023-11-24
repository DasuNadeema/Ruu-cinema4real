import React from "react";
import "../component/NavListItem.css";

function NavListItem({ nav }) {
  return (
    <>
      <div className="nav">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Movies</a>
        </li>
        <li>
          <a href="#">Tv Shows</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </div>
    </>
  );
}

export default NavListItem;

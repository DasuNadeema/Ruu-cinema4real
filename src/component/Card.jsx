import React from "react";
import "../component/Card.css";
import gag1 from "../images/Mini/075f284bd2a54e4c9f554d37578986ed.webp";
import tag2 from "../images/Mini/MV5BNWQ5NGE2YjctYjc0Yi00Yzc1LTgxYTMtMTZiOTU2ZDRiODIwXkEyXkFqcGdeQXVyNjk1Njg5NTA@.webp";
import tag3 from "../images/Mini/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@.webp";
import tag4 from "../images/Mini/Tiger-3.jpg";
import tag5 from "../images/Mini/uuot1N5AgZ7xRCKgm4ZCwOhgIJu.jpg";
import tag6 from "../images/Mini/vBZ0qvaRxqEhZwl6LWmruJqWE8Z.jpg";
import tag7 from "../images/Mini/vN0rKik0oCSfFmMFoH7qicPhcHj.jpg";
import tag8 from "../images/Mini/xzlMB1nGJtMhr2GnecpHIh7XUZe.jpg";
import tag9 from "../images/Mini/img2.jpg";
import tag10 from "../images/Mini/img3.jpg";
import tag11 from "../images/Mini/img4.jpg";
import tag12 from "../images/Mini/img5.jpg";
import tag13 from "../images/Mini/157259.jpg";
import tag14 from "../images/Mini/inspector-avinash.jpg";
import tag15 from "../images/Mini/ruby-gillman-teenage-kraken.webp";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import InsidePage from "../pages/InsidePage";

function Card() {
  return (
    <div>
      <div className="categories">
        <ul>
          <li className="important">
            <a href="#">All</a>
          </li>
          <li>
            <a href="#">Hindi</a>
          </li>
          <li>
            <a href="#">Korean</a>
          </li>
          <li>
            <a href="#">English</a>
          </li>
          <li>
            <a href="#">Tamil</a>
          </li>
          <li>
            <a href="#">Other</a>
          </li>
        </ul>
      </div>
      <div className="for-you">
        <div className="box">
          <div className="box-img">
            <Link to="/InsidePage">
              <img src={gag1} alt="" />
            </Link>
          </div>
          <h3> John wick</h3>
          <span>120min | Action</span>
        </div>
        <div className="box">
          <div className="box-img">
            <img src={tag2} alt="" />
          </div>
          <h3>Blonde</h3>
          <span>120min | Action</span>
        </div>
        <div className="box">
          <div className="box-img">
            <img src={tag3} alt="" />
          </div>
          <h3>Thor</h3>
          <span>120min | Action</span>
        </div>
        <div className="box">
          <div className="box-img">
            <img src={tag4} alt="" />
          </div>
          <h3>Tiger-3</h3>
          <span>120min | Action</span>
        </div>
        <div className="box">
          <div className="box-img">
            <img src={tag5} alt="" />
          </div>
          <h3>Gen V</h3>
          <span>120min | Action</span>
        </div>
        <div className="box">
          <div className="box-img">
            <img src={tag6} alt="" />
          </div>
          <h3>The Creator</h3>
          <span>120min | Action</span>
        </div>{" "}
        <div className="box">
          <div className="box-img">
            <img src={tag7} alt="" />
          </div>
          <h3>The Law Cafe</h3>
          <span>120min | Action</span>
        </div>
        <div className="box">
          <div className="box-img">
            <img src={tag8} alt="" />
          </div>
          <h3>The Forbidden marriage</h3>
          <span>120min | Action</span>
        </div>
        <div className="box">
          <div className="box-img">
            <img src={tag9} alt="" />
          </div>
          <h3>Drishyam</h3>
          <span>120min | Action</span>
        </div>{" "}
        <div className="box">
          <div className="box-img">
            <img src={tag10} alt="" />
          </div>
          <h3>The Aquaman</h3>
          <span>120min | Action</span>
        </div>{" "}
        <div className="box">
          <div className="box-img">
            <img src={tag11} alt="" />
          </div>
          <h3>Monster</h3>
          <span>120min | Action</span>
        </div>{" "}
        <div className="box">
          <div className="box-img">
            <img src={tag12} alt="" />
          </div>
          <h3>Little Women</h3>
          <span>120min | Action</span>
        </div>{" "}
        <div className="box">
          <div className="box-img">
            <img src={tag13} alt="" />
          </div>
          <h3>Paw</h3>
          <span>120min | Action</span>
        </div>{" "}
        <div className="box">
          <div className="box-img">
            <img src={tag14} alt="" />
          </div>
          <h3>Inspector Avinash</h3>
          <span>120min | Action</span>
        </div>{" "}
        <div className="box">
          <div className="box-img">
            <img src={tag15} alt="" />
          </div>
          <h3>Teenage Kraken</h3>
          <span>120min | Action</span>
        </div>{" "}
        {/* <div className="box">
          <div className="box-img">
            <img src={tag8} alt="" />
          </div>
          <h3>The Forbidden marriage</h3>
          <span>120min | Action</span>
        </div> */}
      </div>
    </div>
  );
}

export default Card;

import React from "react";
import "../component/Movie.css";
import img1 from "../images/7448.png";
import img2 from "../images/1338709.png";
import img3 from "../images/714381.jpg";
import tag1 from "../images/Mini/The-Killing-Vote-2023.jpg";
import gag1 from "../images/Mini/ruby-gillman-teenage-kraken.webp";
import tag2 from "../images/Mini/inception_v_dd_ka_tt_2000x3000_300dpi_en.jpg";
import tag3 from "../images/Mini/oppenheimer-poster-560x880-639a268b12999-1.webp";
import tag4 from "../images/Mini/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@.webp";
import tag5 from "../images/Mini/157259.jpg";
import tag6 from "../images/Mini/Daedwood.jpg";

export default function Movie() {
  return (
    <>
      <div className="movie">
        {/* <img src={img3} alt="" className="m-img1" /> */}
        <img src={img2} alt="" className="m-img1" />
        <div className="m-text">
          <h4>John Wick</h4>
          <span>2012</span>
          <br />
          <span>Action/Adventure</span>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
            aliquid explicabo consectetur harum pariatur soluta aliquam, autem
            eum exercitationem dignissimos ipsum dolorum sequi tempore. Harum
            excepturi sit eos a quasi.
          </p>
          <br />

          <a className="a1" href="#">
            Watch <ion-icon name="play-circle-outline"></ion-icon>
          </a>
        </div>
        {/* <img src={img3} alt="" className="m-img2" /> */}
      </div>
      <div className="more-1row">
        <img src={gag1} alt="" className="mo-img" />
        <img src={tag2} alt="" className="mo-img" />
        <img src={tag3} alt="" className="mo-img" />
        <img src={tag4} alt="" className="mo-img" />
        <img src={tag5} alt="" className="mo-img" />
        <img src={tag6} alt="" className="mo-img" />
        <br />
      </div>
    </>
  );
}

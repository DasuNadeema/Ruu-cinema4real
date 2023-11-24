import React from "react";
import "../component/Movie.css";
import img1 from "../images/7448.png";
import img2 from "../images/1338709.png";
import img3 from "../images/714381.jpg";
import tag1 from "../images/Mini/The-Killing-Vote-2023.jpg";
import gag1 from "../images/Mini/Tiger-3.jpg";
import tag2 from "../images/Mini/bshCGAHZRldAfdxXDX3637PW9cR.jpg";
import tag3 from "../images/Mini/t3ZFXwFiyOobmE2GVEE5TrRdGAn.jpg";
import tag4 from "../images/Mini/uZJGMFgE1Q9xpncVAu1G3Vce4nP.jpg";
import tag5 from "../images/Mini/uuot1N5AgZ7xRCKgm4ZCwOhgIJu.jpg";
import tag6 from "../images/Mini/vBZ0qvaRxqEhZwl6LWmruJqWE8Z.jpg";
import tag7 from "../images/Mini/vN0rKik0oCSfFmMFoH7qicPhcHj.jpg";
import tag8 from "../images/Mini/xzlMB1nGJtMhr2GnecpHIh7XUZe.jpg";

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

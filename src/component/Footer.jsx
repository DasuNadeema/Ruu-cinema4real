import React from "react";
import "../component/Footer.css";
import banner from "../images/Mini/banner3.jpg";
import Logo from "../images/featured_channel.jpg";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="btn-footer">
          <div className="f-main">
            <div className="f-link">
              <a href="https://www.facebook.com/Ruucinemaofficia">
                <i class="bx bxl-facebook"></i>
              </a>
              <a href="https://youtube.com/c/RuuCinema">
                <i class="bx bxl-youtube"></i>
              </a>
              <a href="t.me/ruucinema">
                <i class="bx bxl-telegram"></i>
              </a>
              <a href="tiktok.com/@ruu_cinema?is_from_webapp=1&sender_device=pc">
                <i class="bx bxl-tiktok"></i>
              </a>
            </div>
            <div className="t-home">
              <a className="to-home" href="#">
                Back To Home
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="about">
          <img src={banner} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;

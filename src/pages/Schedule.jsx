import React from "react";
import "../pages/Schedule.css";
import Card from "./Card";

function Schedule() {
  return (
    <div>
      <section id="schedule" className="schedule">
        <div className="container-fluid">
          <div className="row">
            <h4 className="section-title">Movies for you</h4>
          </div>
          <div className="row"></div>
        </div>
        <Card />
      </section>
    </div>
  );
}

export default Schedule;

import React, { Component } from "react";
// import logo from './logo.svg';
// import HomeHero from "../../components/HomeHero/index"
import "./style.css";
// import profPic from "../../media/5.PNG"
import logo from "../../media/ihlogo.png";
import blackStar from "../../media/blackstar.png";
import heroImg from "../../media/background.jpg";
import clock from "../../media/blackclock.png";
import flag from "../../media/blackflag.png";
import dots from "../../media/dots.png";
// import arrow from "../../media/arrow.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faGlassMartini } from "@fortawesome/free-solid-svg-icons";

export default class HoursDirections extends Component {
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: "top",
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div className="hours-directions-component">
        
        <img className="hd-comp-dots" src={dots}></img>
        <div className="hd-parent">
          <h1>Come find us!</h1>
          <div className="hd-content">
            <div className="hd-block">
              <img width="50x" src={clock}></img>
              <p className="mb-2">Store Hours</p>
              {/* <br></br> */}
              <p>Monday - Sunday</p>
              <p>7am - 7pm</p>
            </div>
            <div className="hd-block">
              <a href="https://goo.gl/maps/Q55PSrh9HaNe8YuZ9">
              <img width="50px" src={flag}></img>
              <p className="mb-2">Find us at</p>
              {/* <br></br> */}
              <p>1818 Oberlin Rd #103 </p>
              <p>Raleigh, NC 27608</p>
            </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

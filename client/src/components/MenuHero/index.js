import React, { Component } from "react";
// import logo from './logo.svg';
// import HomeHero from "../../components/HomeHero/index"
import "./style.css";
// import profPic from "../../media/5.PNG"
import logo from "../../media/ihlogo.png";
import blackStar from "../../media/blackstar.png";
import heroImg from "../../media/latte.jpg";
import clock from "../../media/blackclock.png";
import flag from "../../media/blackflag.png";
import dots from "../../media/dots.png";
// import arrow from "../../media/arrow.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faGlassMartini } from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom"

export default class MenuHero extends Component {
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: "top"
    };
  }

  // navTo = link => {
  //   window.location.href = "/menu";
  // };


  render() {
    return (
      <div className="menu-hero-comp-parent">
        {/* <img className="hd-comp-dots" src={dots}></img> */}
        <div
          // onClick={this.navTo}
          className="menu-hero-comp"
          style={{
            backgroundImage: `url(${heroImg})`,
            // backgroundColor: `#F9F8F0`,
            opacity: `100%`,
            backgroundBlendMode: `multiply`,
            // backgroundPositionX: `35%`,
            backgroundPositionY: `70%`,
            backgroundSize: `cover`,
            backgroundRepeat: `no-repeat`,
            // backgroundAttachment: `fixed`,
            height: `400px`,
            position: "relative",
            // maxHeight: '-webkit-fill-available',
            display: `flex`,
            alignItems: `center`,
            position: `relative`,
            justifyContent: "flex-start",
            color: "white",
            // cursor: "pointer",
            borderRadius: '15px',
            padding:'50px'
            //   cover no-repeat center center fixed`
          }}
        >
          <div class="menu-hero-content">
          <h1>Check out what we're serving up!</h1>
          <Link to="/menu"><button>Full Menu</button></Link>
          </div>
        </div>
        <img className="lower-dots" src={dots}></img>
          {/* <img className="hd-comp-dots" src={dots}></img> */}
      </div>
    );
  }
}

import { Container, Nav, Button, Image, Row, Col } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import React, { Component } from "react";
// import logo from './logo.svg';
// import HomeHero from "../../components/HomeHero/index"
import "./style.css";
// import profPic from "../../media/5.PNG"
import logo from "../../media/ihlogo.png";
import blackStar from "../../media/blackstar.png";
import heroImg from "../../media/background.jpg";
import clock from "../../media/blackclock.png";
import latte from "../../media/new-latte-art-nws.png";
import dots from "../../media/dots.png";
import beans from "../../media/beans2.jpg";
// import arrow from "../../media/arrow.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faGlassMartini } from "@fortawesome/free-solid-svg-icons";

export default class HandRoasted extends Component {
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
      <div className="hand-roasted-component">
        <div
          className="roasted-hero-comp"
          style={{
            backgroundImage: `url(${beans})`,
            // backgroundColor: `#F9F8F0`,
            opacity: `100%`,
            backgroundBlendMode: `multiply`,
            backgroundPosition: `center`,
            backgroundSize: `cover`,
            backgroundRepeat: `no-repeat`,
            // backgroundAttachment: `fixed`,
            height: `100vh`,
            width: "100%",
            position: "relative",
            // maxHeight: '-webkit-fill-available',
            display: `flex`,
            alignItems: `center`,
            position: `relative`,
            justifyContent: "center",
            color: "white",
            //   cover no-repeat center center fixed`
          }}
        >
          <div className="hr-content">
            <img></img>
            {/* <p>Our</p> */}
            <p>Hand roasted</p>
            <p>small batch coffee</p>
            <button className="shop-btn-link">Coming Soon</button>
          </div>
        </div>
        <img className="hr-comp-dots" src={dots}></img>
      </div>
    );
  }
}

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
import beans from "../../media/beans.jpg";
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
           <img className="hd-comp-dots" src={dots}></img>
        <div className="hr-content">
        <div className="hr-text">
            <div className="hr-title">
                <img className="roasted-img" src={latte}></img>
                <h1>Hand Roasted
Small Batch Coffee</h1>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button class="shop-btn-link">Shop Coffee</button>
        </div>
        <div className="hr-image">
            <img className="bean-img" width="500px" src={beans}></img>
        </div>
        </div>
      </div>
    );
  }
}

import { Container, Nav, Button, Image, Row, Col } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import React, { Component } from "react";
// import logo from './logo.svg';
// import HomeHero from "../../components/HomeHero/index"
import "./style.css";
// import profPic from "../../media/5.PNG"
import bag from "../../media/coffee-bag.png"
import dots from "../../media/dots.png";
import beans from "../../media/beans2.jpg";
// import arrow from "../../media/arrow.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faGlassMartini } from "@fortawesome/free-solid-svg-icons";
import { LazyLoadComponent } from 'react-lazy-load-image-component';

export default class HandRoasted extends Component {
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: "top",
    };
  }


  render() {
    return (
      <div className="hand-roasted-component">
        {/* <LazyLoadComponent visibleByDefault> */}
        <div className="roasted-left"
          style={{
            backgroundImage: `url(${beans})`,
            // backgroundImage: `url('https://idlehour.s3.amazonaws.com/beans2.jpg')`,
            // backgroundColor: `#F9F8F0`,
            opacity: `100%`,
            backgroundBlendMode: `multiply`,
            backgroundPosition: `center`,
            backgroundSize: `cover`,
            backgroundRepeat: `no-repeat`,
            // backgroundAttachment: `fixed`,
            height: `100vh`,
            width: "50%",
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
        
         
        </div>
        <div className="roasted-right">
        <div className="hr-content">
            <img className="coffee-bag" src={bag}></img>
            <p>Hand roasted</p>
            <p>small batch coffee</p>
            <p>coming soon!</p>
            <hr className="hr-hr"></hr>
          </div>
        </div>
        {/* </LazyLoadComponent> */}
        <img className="hr-comp-dots" src={dots}></img>
      </div>
    );
  }
}

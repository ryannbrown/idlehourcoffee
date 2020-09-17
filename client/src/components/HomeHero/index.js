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
import flag from "../../media/blackflag.png";
import dots from "../../media/dots.png";
// import arrow from "../../media/arrow.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faGlassMartini } from "@fortawesome/free-solid-svg-icons";

export default class HomeHero extends Component {
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: "top"
    };
  }

  componentDidMount() {
    this.listener = document.addEventListener("scroll", e => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 120) {
        if (this.state.status !== "bgChanged") {
          this.setState({ status: "bgChanged" });
        }
      } else {
        if (this.state.status !== "top") {
          this.setState({ status: "top" });
        }
      }
    });
  }

  componentDidUpdate() {
    document.removeEventListener("scroll", this.listener);
  }

  render() {
    return (
          <div
            className="home-img"
            style={{
              backgroundImage: `url(${heroImg})`,
              // backgroundColor: `#F9F8F0`,
              opacity: `90%`,
              backgroundBlendMode: `multiply`,
              backgroundPosition: `center`,
              backgroundSize: `cover`,
              backgroundRepeat: `no-repeat`,
              // backgroundAttachment: `fixed`,
              height: `${this.props.height}`,
              maxHeight:'100vh',
              // maxHeight: '-webkit-fill-available',
              display: `flex`,
              alignItems: `center`,
              position: `relative`,
              zIndex:'50'
              //   cover no-repeat center center fixed`
            }}
          >
            <Image className="hero-logo" src={logo}></Image>
            <img className="hero-comp-dots" src={dots}></img>
          </div>
    );
  }
}

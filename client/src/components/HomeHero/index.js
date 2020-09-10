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
      <div className="inner">
        {/* <div className="cta-nav-btn">
          <a href="/contact">
          <button className="contact-btn-link">Contact us</button>
          </a>
        </div> */}

        <img className="nav-btn" src={blackStar}></img>
        <Row className="hero-row">
          {/* <Col md={3}></Col> */}

          <Col
            sm={12}
            md={12}
            className="home-img"
            style={{
              backgroundImage: `url(${heroImg})`,
              // backgroundColor: `#F9F8F0`,
              opacity: `90%`,
              backgroundBlendMode: `multiply`,
              backgroundPosition: `center`,
              backgroundSize: `cover`,
              backgroundRepeat: `no-repeat`,
              backgroundAttachment: `fixed`,
              height: `${this.props.height}`,
              // maxHeight: '-webkit-fill-available',
              display: `flex`,
              alignItems: `center`,
              position: `relative`
              //   cover no-repeat center center fixed`
            }}
          >
            <Image className="hero-logo" src={logo}></Image>
            <div className="hero-content">
              <div className="block hero-hours-block">
                <img width="100px" src={clock}></img>
                <p className="mb-2">Store Hours</p>
                {/* <br></br> */}
                <p>Monday - Sunday</p>
                <p>7am - 7pm</p>
              </div>
              <div className="block hero-directions-block">
                <img width="100px" src={flag}></img>
                <p className="mb-2">Find us at</p>
                {/* <br></br> */}
                <p>1818 Oberlin Rd #103 </p>
                <p>Raleigh, NC 27608</p>
              </div>
            </div>
            <div className="coming-soon">
              <p>Full site coming soon</p>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

import React, { Component } from "react";
// import logo from './logo.svg';
// import HomeHero from "../../components/HomeHero/index"
import "./style.css";
import heroImg from "../../media/chairs.jpg";
import Navigation from "../../components/Navigation/index";
import HoursDirections from "../../components/HoursDirections";
import team from "../../media/team-wide.png"
import Footer from "../../components/Footer";

// import starBackground from '../../media/star-background.png'

export default class About extends Component {
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {

    };
  }

  

  render() {

    // console.log(this.state);

    return (
      <div>
        <Navigation />
        <div className="menu-component">
          <div
            className="menu-hero"
            style={{
              backgroundImage: `url(${heroImg})`,
              // backgroundColor: `#F9F8F0`,
              opacity: `90%`,
              backgroundBlendMode: `multiply`,
              backgroundPositionY:`25%`,
              backgroundSize: `cover`,
              backgroundRepeat: `no-repeat`,
              // backgroundAttachment: `fixed`,
              // height: `16rem`,
              height: `50vh`,
              color: "white",
              justifyContent: "center",
              // maxHeight: '-webkit-fill-available',
              display: `flex`,
              alignItems: `center`,
              position: `relative`
              //   cover no-repeat center center fixed`
            }}
          >
            <h1>Visit</h1>
          </div>

<HoursDirections></HoursDirections>

<div className="visit-section">
  <h1>Our team</h1>
  <p>Methodical coffee roasters. Methodical coffee roasters. Methodical coffee roasters. Methodical coffee roasters. </p>
  <img src={team}></img>
</div>
        </div>
        {/* <Footer></Footer> */}
      </div>
    );
  }
}

import React, { Component } from "react";
// import logo from './logo.svg';
// import HomeHero from "../../components/HomeHero/index"
import "./style.css";
import heroImg from "../../media/chairs.jpg";
import Navigation from "../../components/Navigation/index";
import HoursDirections from "../../components/HoursDirections";
import team from "../../media/team-wide.png"
import Footer from "../../components/Footer";
import { Helmet } from "react-helmet";
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
               <Helmet>
                <meta charSet="utf-8" />
                <title>About | Idle Hour Coffee Roasters</title>
                <meta name="description" content="Boutique coffee shop located in Raleigh NC, serving delicious coffee and sandwiches. Free wifi and aesthetic work space. Open 7 am - 7 pm, 7 days a week." />
                {/* <link rel="canonical" href="http://www.idlehourcoffee.com/" /> */}
            </Helmet>
        <Navigation />
        <div className="menu-component">
          <div
            className="menu-hero"
            style={{
              backgroundImage: `url(${heroImg})`,
              // backgroundColor: `#F9F8F0`,
              opacity: `90%`,
              backgroundBlendMode: `multiply`,
              backgroundPositionY:`55%`,
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
  <p>It takes a hard working team to achieve quality in everything we do. A tailored coffee experience is something that we pride ourselves in.  Stop by anytime, we’d love to say hi! </p>
  <img src={team}></img>
</div>
        </div>
        {/* <Footer></Footer> */}
      </div>
    );
  }
}

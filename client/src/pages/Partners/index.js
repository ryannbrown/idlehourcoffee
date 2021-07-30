import React, { Component } from "react";
// import logo from './logo.svg';
// import HomeHero from "../../components/HomeHero/index"
import "./style.css";
import heroImg from "../../media/donut-tray.jpg";
import Navigation from "../../components/Navigation/index";

// import starBackground from '../../media/star-background.png'

export default class Partners extends Component {
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {

    };
  }

  componentDidMount() {
    const script = document.createElement("script");

    script.src = "https://cdn.lightwidget.com/widgets/lightwidget.js";
    script.async = true;

    document.body.appendChild(script);
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
              backgroundPosition: `center`,
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
            <h1>Our Partners</h1>
          </div>
          <div className="partners-section">
         <h1>Proudly Serving</h1>
         <p>Behind every great cup is group of great partners</p>
         <div className="partners-wrapper">
           <p>Partner</p>
           <p>Partner</p>
           <p>Partner</p>
           <p>Partner</p>
           <p>Partner</p>
           <p>Partner</p>
           <p>Partner</p>
           <p>Partner</p>
           <p>Partner</p>
         </div>

          </div>
        </div>
      </div>
    );
  }
}

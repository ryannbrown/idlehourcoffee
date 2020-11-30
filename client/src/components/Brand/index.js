import React, { Component } from "react";
// import logo from './logo.svg';
// import HomeHero from "../../components/HomeHero/index"
import "./style.css";
import idleIcons from "../../media/idleicons.png";
import leftArrow from "../../media/leftarrow.png";
import dots from "../../media/half-dots.png";
import clock from "../../media/Black-Comp-Icons/clock-icon-white-ALT.png";
import cup from "../../media/Black-Comp-Icons/cup-icon-white-ALT.png";
import flag from "../../media/Black-Comp-Icons/flag-icon-white-ALT.png";
import latte from "../../media/Black-Comp-Icons/latte-art-icon-white-ALT.png";
import star from "../../media/Black-Comp-Icons/star-icon-white-ALT.png";
import tamp from "../../media/Black-Comp-Icons/tamp-icon-white-ALT.png";
// import starBackground from '../../media/star-background.png'

export default class Brand extends Component {
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: "top",
      icons: []
    };
  }

  componentDidMount() {
    const icons = [
      {
        icon: star,
        name: "Star",
        description: "The beacon of mid-century charm"
      },
      {
        icon: cup,
        name: "Coffee cup",
        description: "The vessel of our business"
      },
      {
        icon: clock,
        name: "Clock",
        description: "No matter what time, coffee can always be had"
      },
      { icon: tamp, name: "Tamp", description: "The baristas tool of choice" },
      {
        icon: latte,
        name: "Latte art",
        description: "The signature of a well crafted beverage"
      },
      {
        icon: flag,
        name: "Vietnamese flag",
        description: "A symbol of our heritage"
      }
    ];

    this.setState({
      icons: icons
    });
  }

  render() {
    // console.log(this.state.icons);
    if (this.state.icons) {
      var showIcons = this.state.icons.map((item, i) => (
        <div key={i} className="brand-icon-container">
          <img className="brand-icon" width="150px" src={item.icon}></img>
          <p className="title-text">{item.name}</p>
          <p className="description-text">{item.description}</p>
        </div>
      ));
    }

    return (
      <div
        style={{
          backgroundColor: `#0E0E0E`,
          zIndex: "2000",
          // position: `fixed`,
          width: `100%`
          // height: `100vh`,
        }}
        className="brand-page"
      >
        <div className="brand-container">
          <img
            onClick={this.props.hideBrand}
            className="left-arrow"
            src={leftArrow}
          ></img>
          <img className="brand-main-icon" width="195px" src={idleIcons}></img>
          <p>Get to know the brand</p>
          <div className="brand-icon-box">{showIcons}</div>
          <div onClick={this.props.hideBrand} className="close-brand">
            <p>Back to home</p>
            <img className="dots-img-brand" src={dots}></img>
          </div>
        </div>
      </div>
    );
  }
}

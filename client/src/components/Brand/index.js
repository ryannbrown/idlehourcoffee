import { Container, Nav, Button, Image, Row, Col } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import React, { Component } from "react";
// import logo from './logo.svg';
// import HomeHero from "../../components/HomeHero/index"
import "./style.css";
import idleIcons from "../../media/idleicons.png";
import dots from "../../media/dots.png";
import clock from "../../media/clock-icon-white.png";
import cup from "../../media/cup-icon-white.png";
import flag from "../../media/flag-icon-white.png";
import latte from "../../media/latte-art-icon-white.png";
import star from "../../media/star-icon-white.png";
import tamp from "../../media/tamp-icon-white.png";
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
    console.log(this.state.icons);
    if (this.state.icons) {
      var showIcons = this.state.icons.map((item, i) => (
        <div className="brand-icon-container">
          <img className="brand-icon" width="150px" src={item.icon}></img>
          <p>{item.name}</p>
          <p>{item.description}</p>
        </div>
      ));
    }

    return (
      <div
        style={{
          backgroundColor: `black`,
          zIndex: "2000",
          // position: `fixed`,
          width: `100%`
          // height: `100vh`,
        }}
        className="brand-page"
      >
        <div className="brand-container">
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

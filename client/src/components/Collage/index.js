import { Container, Nav, Button, Image, Row, Col } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import React, { Component } from "react";
import "./style.css";
import col1 from "../../media/col1.jpg"
import col2 from "../../media/col2.jpg"
import col3 from "../../media/col3.jpg"
import col4 from "../../media/col4.jpg"
import dots from "../../media/dots.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faGlassMartini } from "@fortawesome/free-solid-svg-icons";

export default class Collage extends Component {
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: "top",
    };
  }

//   componentDidMount() {


//   }



  render() {

    const imgs = [
        {src: col1},
        {src: col2},
        {src: col3},
        {src: col4}
    ]

    var imgArray = imgs.map((item, i) => (
        <div className="collage-img" style={{backgroundImage:`url(${item.src})`}}></div>
    ));


    return (
      <div className="collage-component">
               <img className="hr-comp-dots" src={dots}></img>
        <div className="collage-wrapper">
            {imgArray}
        </div>
      </div>
    );
  }
}

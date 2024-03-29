
import {  Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
// import logo from './logo.svg';
import './style.css';
import blackStar from "../../media/star-icon-white.png"
import ScrollIntoView from 'react-scroll-into-view'
// import { Drawer } from '@material-ui/core';
// import TemporaryDrawer from '../Drawer/index'
export default class Navigation extends Component {

  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: "top",
      isMobile: false
    };
  }
  navToHours = () => {
    window.location.href=`/#hours`
  }

//   mobileBgChange = () => {
//     let nav = document.getElementsByClassName("navbar");
// let classes = nav.classList;
// classes.add("mobileWhite");
// console.log(classes);
// // span.textContent = classes;
//   }


  render() {

    const { isMobile } = this.state;



    return (
        <Navbar expand="md"
        //  onClick={this.mobileBgChange}
          style={{ backgroundColor:"transparent"}}>
        <Navbar.Brand href="/">
             <img className="nav-btn" src={blackStar}></img>
             </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{backgroundImage: 'url(${blackStar}'}} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            <Nav.Link as={Link} className="hide-desktop" to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
              <Nav.Link as={Link} to="/about">Visit</Nav.Link>
              <Nav.Link as={Link}  to="/partners">Partners</Nav.Link>
              {/* </ScrollIntoView> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )

  }
}






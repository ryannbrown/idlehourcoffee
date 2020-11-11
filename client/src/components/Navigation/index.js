
import { Container, Nav, Button, Image, NavDropdown } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import { HashLink as Link } from 'react-router-hash-link';
import React, { Component } from 'react';
// import logo from './logo.svg';
import './style.css';
import blackStar from "../../media/blackstar.png"
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



  render() {

    const { isMobile } = this.state;



    return (
        <Navbar expand="md" style={{ backgroundColor:"transparent"}}>
        <Navbar.Brand href="/">
             <img className="nav-btn" src={blackStar}></img>
             </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{backgroundImage: 'url(${blackStar}'}} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/menu">Menu</Nav.Link>
            {/* <ScrollIntoView alignToTop selector="/#hours"> */}
              <Nav.Link href="/#hours">Hours</Nav.Link>
              {/* </ScrollIntoView> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )

  }
}






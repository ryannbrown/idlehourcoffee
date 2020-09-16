
import { Container, Nav, Button, Image, NavDropdown } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import React, { Component } from 'react';
// import logo from './logo.svg';
import './style.css';
import blackStar from "../../media/blackstar.png"
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


  componentDidMount() {

  
  }

  componentDidUpdate() {
    document.removeEventListener("scroll", this.listener);



  }

  render() {

    const { isMobile } = this.state;



    return (
        <Navbar expand="md">
        <Navbar.Brand href="#home">
             <img className="nav-btn" src={blackStar}></img>
             </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{backgroundImage: 'url(${blackStar}'}} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Menu</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )

  }
}






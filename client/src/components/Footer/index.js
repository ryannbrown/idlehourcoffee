import { Container, Nav, Button, Image, Row, Col } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import React, { Component } from 'react';
// import logo from './logo.svg';
// import HomeHero from "../../components/HomeHero/index"
import './style.css';
// import whiteComet from '../../media/white-comet.png'
// import starBackground from '../../media/star-background.png'



export default class Footer extends Component {

    constructor(props) { 
        super(props);

        this.listener = null;
        this.state = {
            status: "top"
        };
    }


    componentDidMount() {

    }

    // componentDidUpdate() {
    //   document.removeEventListener("scroll", this.listener);
    // }

    render() {





        return (
            <Row>
            <Col  style={{
            // backgroundImage: `url(${starBackground})`,
            backgroundColor: `black`,
            // opacity: `90%`,
            backgroundBlendMode: `multiply`,
            backgroundPosition: `center`,
            backgroundSize: `cover`,
            backgroundRepeat: `no-repeat`,
            backgroundAttachment: `fixed`,
            // height: `100vh`,
            display: `flex`,
            alignItems: `center`,
            position: `relative`,
            width: `350px`,
            height:`200px`,
            //   cover no-repeat center center fixed`
        }} className="footer-div">
                <div className="footer-content-box">
                {/* <h2 className="libre"><i>Blue Heron Pasta Water</i></h2> */}
            <p className="mt-5">Powered by The Media Team</p>
            {/* <Image className="comet-image" src={whiteComet}></Image> */}
                </div>
    
            </Col>
          </Row>
 
      )

    }
}
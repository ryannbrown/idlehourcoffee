import { Container, Nav, Button, Image, Row, Col } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import React, { Component } from 'react';
// import logo from './logo.svg';
// import HomeHero from "../../components/HomeHero/index"
import './style.css';
import dots from '../../media/dots.png'
import clock from '../../media/clock-icon-white.png'
import cup from '../../media/cup-icon-white.png'
import flag from '../../media/flag-icon-white.png'
import latte from '../../media/latte-art-icon-white.png'
import star from '../../media/star-icon-white.png'
import tamp from '../../media/tamp-icon-white.png'
// import starBackground from '../../media/star-background.png'



export default class Footer extends Component {

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
    {icon: star},
    {icon: cup},
    {icon: clock},
    {icon: tamp},
    {icon: latte},
    {icon: flag}
];

this.setState({
    icons: icons
})

    }



    render() {
console.log(this.state.icons)
        if (this.state.icons) {
            var showIcons = this.state.icons.map((item, i) => (
                  <img width='100px' src={item.icon}></img>
              ));
        }



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
            height:`37.5vh`,
            //   cover no-repeat center center fixed`
        }} className="footer-div">
            <img className="dots-img" src={dots}></img>
                <div className="footer-content-box">
                    <div className="icon-box">
                    {showIcons}
                    </div>
                    <p>Wanna give us a call?</p>
                    <a href="/contact">
            <button className="contact-btn-link">984-200-1605</button>
          </a>
             
            <p className="justsoup">Powered by Just Soup</p>
            {/* <Image className="comet-image" src={whiteComet}></Image> */}
                </div>
    
            </Col>
          </Row>
 
      )

    }
}
import React, { Component } from "react";
// import logo from './logo.svg';
import Brand from "../../components/Brand";
import MenuHero from "../../components/MenuHero";
import HoursDirections from "../../components/HoursDirections";
import bigDots from "../../media/big-dots.png"
import HandRoasted from "../../components/HandRoasted";
import Collage from "../../components/Collage";
import team from "../../media/team.png";
import donuts from "../../media/donuts.png"
import HomeHero from "../../components/HomeHero/index";
import Footer from "../../components/Footer/index.js";
import "./style.css";
import ScrollIntoView from "react-scroll-into-view";
import Navigation from "../../components/Navigation/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faGlassMartini } from "@fortawesome/free-solid-svg-icons";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import {Link} from "react-router-dom";
import dots from "../../media/dots.png"

export default class Homepage extends Component {
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: "top",
      isMobile: false,
      height: "100vh",
      showBrand: false,
    };
  }

  componentDidMount() {
    const script = document.createElement("script");

    script.src = "https://cdn.lightwidget.com/widgets/lightwidget.js";
    script.async = true;

    document.body.appendChild(script);
  }


  showBrand = () => {
    this.setState({ showBrand: true });
  };
  hideBrand = () => {
    this.setState({ showBrand: false });
  };

  render() {
    const { showBrand } = this.state;
    return (
      <div>
        {showBrand ? (
          <div>
            <Brand hideBrand={this.hideBrand}></Brand>
          </div>
        ) : (
          <div>
            <Navigation />
            <div
              className="homepage-content"
              style={{
                // height: `20vh`, /* Fallback for browsers that do not support Custom Properties */
                height: `${this.state.height}`,
              }}
            >
              <HomeHero height={this.state.height}></HomeHero>
            </div>
            <div className="page-container">
              <div className="heading-block">
                <h2> Welcome to Idle Hour Coffee,</h2>
                <h2>a place for everyone.</h2>
                <img className="lower-dots" src={dots}></img>
              </div>
              <MenuHero></MenuHero>
            </div>
            <div className="team-section">
              {/* <img className="hero-comp-dots" src={dots}></img> */}
              <div className="colms">
                <div className="colm colm-left img">
                  <div className="colm-img" style={{backgroundImage:`url(${team})`}} src={team}></div>
                  <img src={bigDots} className="bigdots" ></img>
                </div>
                <div className="colm colm-right text">
                  <h1>Our Team</h1>
                  <p>
                  It takes a hard working team to achieve quality in everything we do. Find out more about our shop!
                  </p>
                  <Link to="/about"> <button>Visit</button></Link>
                </div>
              </div>
              </div>
              <div class="local-section">
              <div className="colms">
                <div className="colm colm-left text">
                <h1>Our Local Partners</h1>
                  <p>
                  At Idle Hour, we pride ourselves in local quality products that our guests know and love. Take a look at the familiar faces on our shelves.
                  </p>
                  <Link to="/partners"> <button>Our Partners</button></Link>
                </div>
                <div className="colm colm-right img">
                <div className="colm-img" style={{backgroundImage:`url(${donuts})`}} src={donuts}></div>
                <img src={bigDots} className="bigdots"></img>
                </div>
              </div>
           </div>
<div className="page-container">
           <div className="home-grid">
              <div className="grid-left"></div>
              <div className="grid-right">
                <div className="grid-right-top"></div>
                <div className="grid-right-bottom"></div>
              </div>
             </div>
</div>
            <a id="hours">
              {/* <ScrollIntoView selector="#hours"> */}
              {/* <HoursDirections></HoursDirections> */}
              {/* </ScrollIntoView> */}
            </a>
            {/* <HandRoasted></HandRoasted> */}
            <LazyLoadComponent visibleByDefault>
              
              <Collage></Collage>
            </LazyLoadComponent>
            <Footer showBrand={this.showBrand}></Footer>
          </div>
        )}
      </div>
    );
  }
}

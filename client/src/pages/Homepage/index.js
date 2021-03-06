import React, { Component } from "react";
// import logo from './logo.svg';
import Brand from "../../components/Brand";
import MenuHero from "../../components/MenuHero";
import HoursDirections from "../../components/HoursDirections";
import HandRoasted from "../../components/HandRoasted";
import Collage from "../../components/Collage";
import HomeHero from "../../components/HomeHero/index";
import Footer from "../../components/Footer/index.js";
import "./style.css";
import ScrollIntoView from "react-scroll-into-view";
import Navigation from "../../components/Navigation/index"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faGlassMartini } from "@fortawesome/free-solid-svg-icons";
import { LazyLoadComponent } from 'react-lazy-load-image-component';

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
    // let height = window.innerHeight + "px";
    // console.log(height);

    // this.setState({
    //   height: height,
    // });
    // window.addEventListener("resize", () => {
    //   let height = window.innerHeight + "px";
    //   console.log(height);
    //   this.setState({
    //     height: height,
    //   });
    // });
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
               <Navigation/>
            <div
              className="homepage-content"
              style={{
                // height: `20vh`, /* Fallback for browsers that do not support Custom Properties */
                height: `${this.state.height}`,
              }}
            >
              <HomeHero height={this.state.height}></HomeHero>
            </div>
            <MenuHero></MenuHero>
            <a id="hours">
              {/* <ScrollIntoView selector="#hours"> */}
                <HoursDirections></HoursDirections>
              {/* </ScrollIntoView> */}
            </a>
            <HandRoasted></HandRoasted>
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

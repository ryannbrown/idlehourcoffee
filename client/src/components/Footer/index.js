import React, { Component } from "react";

// import logo from './logo.svg';
// import HomeHero from "../../components/HomeHero/index"
import "./style.css";
import dots from "../../media/dots.png";
import clock from "../../media/clock-icon-white.png";
import cup from "../../media/cup-icon-white.png";
import flag from "../../media/flag-icon-white.png";
import latte from "../../media/latte-art-icon-white.png";
import star from "../../media/star-icon-white.png";
import tamp from "../../media/tamp-icon-white.png";
import jsLogo from "../../media/jswhite.png"
// import starBackground from '../../media/star-background.png'

export default class Footer extends Component {
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: "top",
      icons: [],
      showBrand: false,
    };
  }

  componentDidMount() {
    const icons = [
      { icon: star },
      { icon: cup },
      { icon: clock },
      { icon: tamp },
      { icon: latte },
      { icon: flag },
    ];

    this.setState({
      icons: icons,
    });
  }

  render() {
const {showBrand} = this.state;


    // console.log(this.state.icons);
    if (this.state.icons) {
      var showIcons = this.state.icons.map((item, i) => (
        <div key={i} className="icon-container">
          <img className="icon" width="100px" src={item.icon}></img>
        </div>
      ));
    }

      return (
        <div className="footer-parent">
          <div
            style={{
              // backgroundImage: `url(${starBackground})`,
              backgroundColor: `#0E0E0E`,
              // opacity: `90%`,
              backgroundBlendMode: `multiply`,
              backgroundPosition: `center`,
              backgroundSize: `cover`,
              backgroundRepeat: `no-repeat`,
              backgroundAttachment: `fixed`,
              // height: `100vh`,
              display: `flex`,
              alignItems: `center`,
              justifyContent: "center",
              position: `relative`,
              width: `980px`,
              margin: '0px auto'
            }}
            className="footer-div"
          >
            <img className="dots-img" src={dots}></img>
            <div className="footer-content-box">
              <div onClick={this.props.showBrand} className="icon-box">
                {showIcons}
              </div>
              <p className="contact-text">Want to give us a call?</p>
              <a href="tel:984-200-1605">
                <button className="contact-btn-link">984-200-1605</button>
              </a>
              {/* <Image className="comet-image" src={whiteComet}></Image> */}
            </div>
            <div className="bottom-content">
              <a target="_blank" rel="noopener noreferrer" href="https://www.justsoup.io/">
              <img width="20px" src={jsLogo}></img>
                <p className="justsoup">Powered by Just Soup</p>
              </a>
            </div>
          </div>
        </div>
      );
    }
  }

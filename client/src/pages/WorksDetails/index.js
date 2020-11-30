import React, { Component } from "react";
import "./style.css";
// import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// const queryString = require('query-string');
import Navigation from "../../components/Navigation/index"

export default class WorksDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenWork: ""
    };
  }



  componentDidMount() {
    console.log(this.props.match.params);
    let param = Object.values(this.props.match.params);
    console.log(param);

    this.setState({
      chosenWork: param
    });
    // this.addSpaces();
  }


  render() {
    const { chosenWork, currentWork } = this.state;
    const prevModal = this.props.worksObject[Number(chosenWork) - 1];
    const thisModal = this.props.worksObject[chosenWork];
    const nextModal = this.props.worksObject[Number(chosenWork) + 1];
    console.log("previous", prevModal);
    console.log("this", thisModal);
    console.log("next", nextModal);

    if (prevModal) {
      var prevId = Number(chosenWork) - 1;
    }
    if (nextModal) {
      var nextId = Number(chosenWork) + 1;
    }
    // if (thisModal && thisModal.imgs) {
    //   var addPics = thisModal.imgs.map((item, i) => (
    //     <Image
    //       className="off-image-2"
    //       src={`https://millie-site.s3.amazonaws.com/${item}`}
    //     />
    //   ));
    // }

    return (
      <div>
       {/* <Navigation textColor="#86BFFF" scrolledTextColor="#ffffff7a" logo={blueLogo} scrolledLogo={logo} scrolledDistance='5'/> */}
       <Navigation />

        <div className="works-page">
          {thisModal ? (
            <div className="works-container">
              <div className="content-row">
                  <div className="off-image-container">
                    <img
                      className="works-image img-responsive"
                      src={thisModal.img}
                    />
                  </div>
                <div className="off-text-container"
                >
                  <div className="works-description">
                    <h1 className="menu-name">{thisModal.name} <span className="menu-size">{thisModal.size}</span></h1>
                    {/* <hr style={{ width: `50%` }}></hr> */}
                    <p className="modal-price">${thisModal.price}</p>
                    <p className="modal-description">{thisModal.description}</p>
                    <p className="modal-description">{thisModal.moreInfo}</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div></div>
          )}
          {/* <div className="additional-pics">{addPics}</div> */}

          <div className="nav-box">
            <div>
              <a href="/menu">Back to Menu</a>
            </div>
            <div className="prev-next">
              {prevModal && <a href={`/food/${prevId}`}>Previous</a>}
              {prevModal && nextModal && <span> | </span>}
              {nextModal && <a href={`/food/${nextId}`}>Next</a>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

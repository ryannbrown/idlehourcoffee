import React, { Component } from "../../../node_modules/react";
import { Spinner } from "../../../node_modules/react-bootstrap";
import "./style.css";
import logo from "../../media/download.svg";

// const queryString = require('query-string');

// require("./node_modules/dotenv").config();

class Insta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instaData: [],
      isLoading: false,
      showBackup: false,
      showInsta: false,
    };
  }


  render() {
    const { instaData } = this.state;

    return this.state.isLoading ? (
      <div className="insta-wrapper">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    ) : (
      <div className="collage-section">
        <h1>What we've been up to</h1>
          <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script><iframe src="//lightwidget.com/widgets/2a47a34964c55747bfec79852a91ceea.html" scrolling="no" allowtransparency="true" className="lightwidget-widget" style={{width:'100%',border:'0',overflow:'hidden'}}></iframe>
      </div>
    );
  }
}

export default Insta;

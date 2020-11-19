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
      isLoading: true,
      showBackup: false,
      showInsta: false,
    };
  }

  componentDidMount() {
    let hash = "003056d32c2554def87228bc3fd9668a";
    let id = "18906178557";
    fetch(
      `https://www.instagram.com/graphql/query/?query_hash=${hash}&variables={"id":"${id}",%22first%22:4}`
    )
      .then((res) => res.json())
      .then((json) => {
        if (json.status === "fail") {
          this.setState({ isLoading: false, showBackup: true });
          return null;
        }
        console.log(json);
        this.setState({
          instaData: json.data.user.edge_owner_to_timeline_media.edges,
          isLoading: false,
          showInsta: true,
        });
      });
  }

  render() {
    const { instaData } = this.state;


       var imgArray = this.props.imgs.map((item, i) => (
        <div key={i} className="collage-img" style={{backgroundImage:`url(${item.src})`}}></div>
    ));

    const instaPosts = instaData.map((item, i) => (
      <div className="insta-post" key={i}>
        <a
          target="_blank"
          rel='noopener noreferrer'
          href={`https://www.instagram.com/p/${item.node.shortcode}/`}
        >
          {/* <img className="insta-img" src={item.node.display_url} /> */}
          <div className="insta-img" style={{backgroundImage:`url(${item.node.display_url})`}}></div>
          {/* <p className="hover-text">{item.node.edge_media_to_caption.edges[0].node.text}</p> */}
          <img className="hover-text" src={logo} />
        </a>
      </div>
    ));
    return this.state.isLoading ? (
      <div className="insta-wrapper">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    ) : (
      <div className="collage-section">
        <h1>Let's Get Social</h1>
        {this.state.showInsta ? (
          <div className="insta-wrapper">{instaPosts}</div>
        ) : (
          <div className="collage-wrapper">{imgArray}</div>
        )}
      </div>
    );
  }
}

export default Insta;

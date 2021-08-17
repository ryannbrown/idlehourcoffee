import React, { Component } from "react";
// import logo from './logo.svg';
// import HomeHero from "../../components/HomeHero/index"
import "./style.css";
import heroImg from "../../media/chairs.jpg";
import Navigation from "../../components/Navigation/index";
import HoursDirections from "../../components/HoursDirections";
import team from "../../media/team-wide.png"
import Footer from "../../components/Footer";
import { Helmet } from "react-helmet";
// import starBackground from '../../media/star-background.png'

export default class About extends Component {
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {

    };
  }

  

  render() {

    // console.log(this.state);

    return (
      <div>
               <Helmet>
                <meta charSet="utf-8" />
                <title>About | Idle Hour Coffee Roasters</title>
                <meta name="description" content="Boutique coffee shop located in Raleigh NC, serving delicious coffee and sandwiches. Free wifi and aesthetic work space. Open 7 am - 7 pm, 7 days a week." />
                {/* <link rel="canonical" href="http://www.idlehourcoffee.com/" /> */}
            </Helmet>
        <Navigation />
        <div className="menu-component">
          <div
            className="menu-hero"
            style={{
              backgroundImage: `url(${heroImg})`,
              // backgroundColor: `#F9F8F0`,
              opacity: `90%`,
              backgroundBlendMode: `multiply`,
              backgroundPositionY:`55%`,
              backgroundSize: `cover`,
              backgroundRepeat: `no-repeat`,
              // backgroundAttachment: `fixed`,
              // height: `16rem`,
              height: `50vh`,
              color: "white",
              justifyContent: "center",
              // maxHeight: '-webkit-fill-available',
              display: `flex`,
              alignItems: `center`,
              position: `relative`
              //   cover no-repeat center center fixed`
            }}
          >
            <h1>Visit</h1>
          </div>

<HoursDirections></HoursDirections>

  <div className="container-max">
<div className="visit-section">
  <h1>Our team</h1>
  <p>It takes a hard working team to achieve quality in everything we do. A tailored coffee experience is something that we pride ourselves in.  Stop by anytime, we’d love to say hi! </p>
  <img src={team}></img>
</div>
<div className="section-margin jimmy-section">
<h1>Meet Jimmy Bellew, the owner of Idle Hour!</h1>
  {/* <p></p> */}
  <p>
An experienced barista and supporter of the arts, Jimmy wanted a way to give back to the community. He found a way to fulfil that desire by opening a communal space in the Oberlin neighborhood and partnering with local businesses to provide a great experience and serve quality drinks.</p>
<p>
Originally from Fayetteville, Jimmy moved to Philadelphia to attend the Philadelphia Academy of the Fine Arts. He stayed in the city after graduating and began working as a barista at a local coffee shop. There, he had the opportunity to receive technician training from La Marzocco and from Fetco (big names in the coffee industry!). This layer of technical expertise, in addition to his developed palette from years of dialing in espresso, roasting beans and cupping coffee, would prepare him for promising circumstances later on.</p>
<p>
Wanting to be closer to family, Jimmy moved back to NC in 2018. He returned with a depth of coffee knowledge and grand plans, opening the doors of Idle Hour in August 2020!</p>

<p>
Drop in a few times and you’ll quickly become acquainted with the rest of the family: catch Jimmy’s mom HB driving up weekly to deliver her fresh homemade cheesecakes and pastries or glimpse his stepfather Gordan behind the scenes, ensuring we all get paid. </p>

<p>
Come by! We'd love to serve you a hand crafted espresso or pour over, and if time allows, a conversation or two.
</p>
</div>
</div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

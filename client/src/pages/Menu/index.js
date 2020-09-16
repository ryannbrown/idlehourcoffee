import { Container, Nav, Button, Image, Row, Col } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import React, { Component } from "react";
// import logo from './logo.svg';
// import HomeHero from "../../components/HomeHero/index"
import "./style.css";
import heroImg from '../../media/shop1.jpg'

// import starBackground from '../../media/star-background.png'

export default class Menu extends Component {
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: "top",
      drinkItems: [],
      showDrinks: true,
      foodItems: [],
      oFace: [],
      panSan: [],
      showFood: false
    };
  }

  showTheDrinks = () => {
    this.setState({
      showFood: false,
      showDrinks: true
    });
  };
  showTheFood = () => {
    this.setState({
      showDrinks: false,
      showFood: true
    });
  };

  componentDidMount() {
    const drinkItems = [
      {
        name: "CORTADO",
        size: "4OZ",
        description:
          "Two shots of espresso layered with 2oz of lightly steamed milk.",
        price: "3.25"
      },
      {
        name: "ESPRESSO",
        size: "2OZ",
        description: "Two shots of our house espresso.",
        price: "3.25"
      },
      {
        name: "CORTADO",
        size: "4OZ",
        description:
          "Two shots of espresso layered with 2oz of lightly steamed milk.",
        price: "3.25"
      },
      {
        name: "ESPRESSO",
        size: "2OZ",
        description: "Two shots of our house espresso.",
        price: "3.25"
      },
      {
        name: "CORTADO",
        size: "4OZ",
        description:
          "Two shots of espresso layered with 2oz of lightly steamed milk.",
        price: "3.25"
      },
      {
        name: "ESPRESSO",
        size: "2OZ",
        description: "Two shots of our house espresso.",
        price: "3.25"
      },
      {
        name: "CORTADO",
        size: "4OZ",
        description:
          "Two shots of espresso layered with 2oz of lightly steamed milk.",
        price: "3.25"
      },
      {
        name: "ESPRESSO",
        size: "2OZ",
        description: "Two shots of our house espresso.",
        price: "3.25"
      },
      {
        name: "CORTADO",
        size: "4OZ",
        description:
          "Two shots of espresso layered with 2oz of lightly steamed milk.",
        price: "3.25"
      },
      {
        name: "ESPRESSO",
        size: "2OZ",
        description: "Two shots of our house espresso.",
        price: "3.25"
      },
      {
        name: "CORTADO",
        size: "4OZ",
        description:
          "Two shots of espresso layered with 2oz of lightly steamed milk.",
        price: "3.25"
      },
      {
        name: "ESPRESSO",
        size: "2OZ",
        description: "Two shots of our house espresso.",
        price: "3.25"
      },
      {
        name: "ESPRESSO",
        size: "2OZ",
        description: "Two shots of our house espresso.",
        price: "3.25"
      },
      {
        name: "CORTADO",
        size: "4OZ",
        description:
          "Two shots of espresso layered with 2oz of lightly steamed milk.",
        price: "3.25"
      },
      {
        name: "ESPRESSO",
        size: "2OZ",
        description: "Two shots of our house espresso.",
        price: "3.25"
      },
      {
        name: "ESPRESSO",
        size: "2OZ",
        description: "Two shots of our house espresso.",
        price: "3.25"
      },
      {
        name: "ESPRESSO",
        size: "2OZ",
        description: "Two shots of our house espresso.",
        price: "3.25"
      },
      {
        name: "CORTADO",
        size: "4OZ",
        description:
          "Two shots of espresso layered with 2oz of lightly steamed milk.",
        price: "3.25"
      },
      {
        name: "ESPRESSO",
        size: "2OZ",
        description: "Two shots of our house espresso.",
        price: "3.25"
      },
      {
        name: "ESPRESSO",
        size: "2OZ",
        description: "Two shots of our house espresso.",
        price: "3.25"
      },
      {
        name: "ESPRESSO",
        size: "2OZ",
        description: "Two shots of our house espresso.",
        price: "3.25"
      },
      {
        name: "CORTADO",
        size: "4OZ",
        description:
          "Two shots of espresso layered with 2oz of lightly steamed milk.",
        price: "3.25"
      },
      {
        name: "ESPRESSO",
        size: "2OZ",
        description: "Two shots of our house espresso.",
        price: "3.25"
      }
    ];

  


    const panSan = [
      {
        name: "CAPRESE",
        size: "PANINI",
        description: "Tomato, mozzarella, fresh basil, pesto",
        price: "10"
      },
      {
        name: "SALMON",
        size: "LOX",
        description:
          "Cured salmon, cream cheese, capers, red onion, frisee lettuce, tomato BOLD everything bagel",
        price: "12",
      },
      {
        name: "THE",
        size: "G.O.A.T",
        description: "Preserved fig, goat cheese, lemon zest, frisee, bergamot oil",
        price: "9",
      },
      {
        name: "MUFFULETTA",
        size: "PANINI",
        description: "Capicola, mortadella, provolone, aioli, creole olive relish",
        price: "12",
      },
      {
        name: "GRILLED",
        size: "CHEESE",
        description:
          "Assorted cheese, union special bread",
        price: "7",
      },
      {
        name: "BANH",
        size: "MI",
        description: "Vietnamese cured meats, pate, cucumbers, cilantro, pickled relish, jalapeño, fresh black pepper",
        price: "10",
      },
    ]

    const oFace = [
   
      {
        name: "THE",
        size: "ITALIAN",
        description:
          "Prosciutto, olive oil, heirloom tomato, arugula",
        price: "10",
      },
      {
        name: "THE",
        size: "NORWEGIAN",
        description: "Smoked trout, Neufchatel cheese, dill, house crafted pickles",
        price: "12",
      },
      {
        name: "THE",
        size: "NORWEGIAN",
        description: "Smoked trout, Neufchatel cheese, dill, house crafted pickles",
        price: "12",
      }
     
    ];

    this.setState({
        drinkItems: drinkItems,
        panSan: panSan,
        oFace: oFace
      });
   
  }

  render() {

    const {showDrinks, showFood, drinkItems, oFace, panSan}= this.state;
    // console.log(this.state.icons);
    if (showDrinks) {
      var showTheDrinks = this.state.drinkItems.map((item, i) => (
        <div key={i} className={drinkItems.length % 3 == 0 ? 'menu-item-container' : 'menu-item-overflow'}>
          <div className="menu-left">
            <div className="menu-stay">
              <p className="menu-name">{item.name}</p>
              <p className="menu-size">{item.size}</p>
            </div>
            <p className="menu-description">{item.description}</p>
          </div>
          <div className="menu-right">
            <p className="menu-price">${item.price}</p>
          </div>
        </div>
      ));
      
     var lastItem= showTheDrinks
     console.log(21 % 3 == 0)
     console.log(lastItem.length);
    //  .className += 'last-item'

      // console.log(lastItem)
    }
    if (showFood) {
      var showOFace = oFace.map((item, i) => (
        <div className={oFace.length % 3 == 0 ? 'menu-item-container' : 'menu-item-overflow'}>
          <div className="menu-left">
          <div className="menu-stay">
            <p className="menu-name">{item.name}</p>
            <p className="menu-size">{item.size}</p>
              </div>
            <p className="menu-description">{item.description}</p>
          </div>
          <div className="menu-right">
            <p className="menu-price">${item.price}</p>
          </div>
        </div>
      ));
      var showPanSan = this.state.panSan.map((item, i) => (
        <div className={panSan.length % 3 == 0 ? 'menu-item-container' : 'menu-item-overflow'}>
          <div className="menu-left">
            <div className="menu-stay">
              <p className="menu-name">{item.name}</p>
              <p className="menu-size">{item.size}</p>
            </div>
            <p className="menu-description">{item.description}</p>
          </div>
          <div className="menu-right">
            <p className="menu-price">${item.price}</p>
          </div>
        </div>
      ));
    }

    return (
      <div className="menu-component">
        <div className="menu-hero"
        style={{
          backgroundImage: `url(${heroImg})`,
          // backgroundColor: `#F9F8F0`,
          opacity: `90%`,
          backgroundBlendMode: `multiply`,
          backgroundPosition: `center`,
          backgroundSize: `cover`,
          backgroundRepeat: `no-repeat`,
          // backgroundAttachment: `fixed`,
          height: `16rem`,
          color: 'white',
          justifyContent:'center',
          // maxHeight: '-webkit-fill-available',
          display: `flex`,
          alignItems: `center`,
          position: `relative`
          //   cover no-repeat center center fixed`
        }}
      ><h1>Full menu</h1></div>
        <div className="menu-parent">
          <div className="menu-header">
            {/* <div className="menu">
              <img width="50px" src={cup}></img>
              <p>Menu</p>
            </div> */}
            <div className="menu-options">
              {this.state.showDrinks ? (
                <p className="active" onClick={this.showTheDrinks}>
                  Coffee
                </p>
              ) : (
                <p onClick={this.showTheDrinks}>Coffee</p>
              )}
              {this.state.showFood ? (
                <p className="active" onClick={this.showTheFood}>
                  Food
                </p>
              ) : (
                <p onClick={this.showTheFood}>Food</p>
              )}
            </div>
          </div>
     <div>
{showDrinks ? <div className="flex-menu-parent">{showTheDrinks}</div>: <div>
  <p className="food-type">PANINIS <span>+</span> SANDWICHES</p>
  <div  className="flex-menu-parent">
  {showPanSan}
  </div>
  <p className="food-type">OPEN FACE SANDWICHES</p>
  <div  className="flex-menu-parent">
  {showOFace}
  </div>
  </div>}
       </div>
        </div>
      </div>
    );
  }
}

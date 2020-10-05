import { Container, Nav, Button, Image, Row, Col } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import React, { Component } from "react";
// import logo from './logo.svg';
// import HomeHero from "../../components/HomeHero/index"
import "./style.css";
import heroImg from "../../media/shop1.jpg";
import Navigation from "../../components/Navigation/index";

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
      smallBites: [],
      showFood: false,
      showSmallBites: false
    };
  }

  showTheDrinks = () => {
    this.setState({
      showFood: false,
      showDrinks: true,
      showSmallBites: false
    });
  };
  showTheFood = () => {
    this.setState({
      showDrinks: false,
      showFood: true,
      showSmallBites: false
    });
  };
  showTheSmallBites = () => {
    this.setState({
      showDrinks: false,
      showFood: false,
      showSmallBites: true
    });
  };

  componentDidMount() {
    const drinkItems = [
      {
        name: "HOT COFFEE",
        size: "12OZ",
        description: "Beans by Methodical, located in Greenville, SC",
        price: "3"
      },
      {
        name: "ESPRESSO",
        size: "2OZ",
        description: "Two shots of our house espresso",
        price: "3"
      },
      {
        name: "AMERICANO",
        size: "12OZ",
        description: "Espresso with hot water",
        price: "3"
      },
      {
        name: "MACCHIATO",
        size: "3OZ",
        description: "Frothed milk with espresso",
        price: "3.5"
      },
      {
        name: "CAPPUCCINO",
        size: "8OZ",
        description: "Espresso topped with hot milk and froth",
        price: "4"
      },
      {
        name: "LATTE",
        size: "12OZ",
        description:
          "Hot milk poured over espresso, and topped with froth. Various flavors available",
        price: "4.5"
      },
      {
        name: "MOCHA",
        size: "12OZ",
        description:
          "Layers of espresso, steamed milk, and chocolate, and foam",
        price: "5"
      },
      {
        name: "POUR OVER",
        size: "12OZ",
        description:
          "Methodical's Play Nice blend is available year around, with rotating blends available as well",
        price: "4"
      },
      {
        name: "HOT TEA",
        size: "12OZ",
        description: "Your tea of choice",
        price: "4"
      },
      {
        name: "MATCHA SHOT",
        size: "2OZ",
        description: "A powerful shot of Matcha",
        price: "4"
      },
      {
        name: "MATCHA LATTE",
        size: "12OZ",
        description:
          "A tea composed of finely ground powder and specially grown green tea leaves",
        price: "4.5"
      },
      {
        name: "CHAI LATTE",
        size: "12OZ",
        description:
          "Black tea combined with milk, water, and a mixture of aromatic herbs and spices",
        price: "4.5"
      },
      {
        name: "VIETNAMESE COFFEE",
        size: "16OZ",
        description:
          "Jimmy's mom's homemade recipe of ground dark roast cofffee served by a metal Vietnamese drip filter.",
        price: "4.5"
      },
      {
        name: "COLD BREW",
        size: "12OZ",
        description:
          "Ground coffee brewed with cool water, creating a smooth and refreshing flavor without the bitterness",
        price: "4"
      },
      {
        name: "NITRO",
        size: "12OZ",
        description:
          "Cold brew coffee charged with nitrogen, giving it a rich, creamy head of foam",
        price: "5"
      },
      {
        name: "ICED TEA",
        size: "12OZ",
        // description: "",
        price: "4"
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
          "Cured salmon, cream cheese, capers, red onion, frisee lettuce, tomato on a BOLD everything bagel",
        price: "12"
      },
      {
        name: "MUFFULETTA",
        size: "PANINI",
        description:
          "Capicola, mortadella, provolone, aioli, creole olive relish",
        price: "12"
      },
      {
        name: "GRILLED",
        size: "CHEESE",
        description: "Assorted cheese, union special bread",
        price: "7"
      },
      {
        name: "BANH",
        size: "MI",
        description:
          "Our homemade recipe of Vietnamese cured meats, pate, cucumbers, cilantro, pickled relish, jalapeño, fresh black pepper",
        price: "10"
      }
    ];

    const oFace = [
      {
        name: "THE",
        size: "ITALIAN",
        description: "Prosciutto, olive oil, heirloom tomato, arugula",
        price: "10"
      },
      {
        name: "THE",
        size: "G.O.A.T",
        description:
          "Preserved fig, goat cheese, lemon zest, frisee, bergamot oil",
        price: "9"
      },
      {
        name: "THE",
        size: "NORWEGIAN",
        description:
          "Smoked trout, Neufchatel cheese, dill, house crafted pickles",
        price: "12"
      }
    ];

    const smallBites = [
      {
        name: "COOKIE",
        size: "",
        description: "Delicious homemade chocolate chip cookie",
        price: "3"
      },
      {
        name: '"TEPUY"',
        size: "Donut",
        description: "A featured donut from our friend at Tepuy Donuts",
        price: "3.5"
      },
      {
        name: "PASTRY",
        size: "",
        description: "Enjoy a pastry from our selection",
        price: "4"
      },
      {
        name: "CAKE/PIE",
        size: "",
        // description: "",
        price: "5"
      },
      {
        name: "SALAD",
        size: "",
        // description: "",
        price: "6"
      },
      {
        name: '"BOLD"',
        size: "Bagel",
        description:
          "We feature New York Style bagels from BOLD Bagels here in the Triangle",
        price: "3"
      }
    ];

    this.setState({
      drinkItems: drinkItems,
      panSan: panSan,
      oFace: oFace,
      smallBites: smallBites
    });
  }

  render() {
    const {
      showDrinks,
      showFood,
      drinkItems,
      oFace,
      panSan,
      smallBites,
      showSmallBites,
      showTheDrinks,
      showTheSmallBites
    } = this.state;
    // console.log(this.state.icons);
    if (showDrinks) {
      var drinkRender = this.state.drinkItems.map((item, i) => (
        <div
          key={i}
          className={
            drinkItems.length % 3 == 0
              ? "menu-item-container"
              : "menu-item-overflow"
          }
        >
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
    if (showFood) {
      var showOFace = oFace.map((item, i) => (
        <div
          className={
            oFace.length % 3 == 0 ? "menu-item-container" : "menu-item-overflow"
          }
        >
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
        <div
          className={
            panSan.length % 3 == 0
              ? "menu-item-container"
              : "menu-item-overflow"
          }
        >
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
    if (smallBites) {
      var renderSmallBites = this.state.smallBites.map((item, i) => (
        <div
          className={
            smallBites.length % 3 == 0
              ? "menu-item-container"
              : "menu-item-overflow"
          }
        >
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

    console.log(this.state);

    return (
      <div>
        <Navigation />
        <div className="menu-component">
          <div
            className="menu-hero"
            style={{
              backgroundImage: `url(${heroImg})`,
              // backgroundColor: `#F9F8F0`,
              opacity: `90%`,
              backgroundBlendMode: `multiply`,
              backgroundPosition: `center`,
              backgroundSize: `cover`,
              backgroundRepeat: `no-repeat`,
              // backgroundAttachment: `fixed`,
              // height: `16rem`,
              height: `25rem`,
              color: "white",
              justifyContent: "center",
              // maxHeight: '-webkit-fill-available',
              display: `flex`,
              alignItems: `center`,
              position: `relative`
              //   cover no-repeat center center fixed`
            }}
          >
            <h1>Full menu</h1>
          </div>
          <div className="menu-parent">
            <div className="menu-header">
              <div className="menu-options">
                <p
                  onClick={this.showTheDrinks}
                  className={showDrinks ? "active" : ""}
                >
                  Drinks
                </p>
                <p
                  onClick={this.showTheFood}
                  className={showFood ? "active" : ""}
                >
                  Food
                </p>
                <p
                  onClick={this.showTheSmallBites}
                  className={showSmallBites ? "active" : ""}
                >
                  Small Bites
                </p>
              </div>
            </div>

            {showDrinks && (
              <div>
                <p className="size-increase">
                  <i> 12oz {"->"} 16oz... + $1</i>
                </p>
                <div className="flex-menu-parent">{drinkRender}</div>
              </div>
            )}
            {showFood && (
              <div>
                <div className="flex-menu-parent">
                  <div>
                    <p className="food-type">
                      PANINIS <span>+</span> SANDWICHES
                    </p>
                    <div className="flex-menu-parent">{showPanSan}</div>
                    <p className="food-type">OPEN FACE SANDWICHES</p>
                    <div className="flex-menu-parent">{showOFace}</div>
                  </div>
                </div>
              </div>
            )}
            {showSmallBites && (
              <div>
                <div className="flex-menu-parent">{renderSmallBites}</div>
              </div>
            )}

            {/* <div>
            {showDrinks ? (
              <div className="flex-menu-parent">{drinkRender}</div>
            ) : (
              <div>
                <p className="food-type">
                  PANINIS <span>+</span> SANDWICHES
                </p>
                <div className="flex-menu-parent">{showPanSan}</div>
                <p className="food-type">OPEN FACE SANDWICHES</p>
                <div className="flex-menu-parent">{showOFace}</div>
              </div>
            )}
            {showSmallBites ? (
              <div className="flex-menu-parent">{showSmallBites}</div>
            ):<div></div>}
          </div> */}
          </div>
        </div>
      </div>
    );
  }
}

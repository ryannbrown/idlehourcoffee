import React, { Component } from "react";
// import logo from './logo.svg';
// import HomeHero from "../../components/HomeHero/index"
import "./style.css";
import heroImg from "../../media/mixin.jpg";
import Navigation from "../../components/Navigation/index";
import { Helmet } from "react-helmet";

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
      showSmallBites: false,
      seasonal:[],
      showSeasonal:false
    };
  }

  showTheDrinks = () => {
    this.setState({
      showFood: false,
      showDrinks: true,
      showSmallBites: false,
      showSeasonal:false
    });
  };
  showTheFood = () => {
    this.setState({
      showDrinks: false,
      showFood: true,
      showSmallBites: false,
      showSeasonal:false
    });
  };
  showTheSmallBites = () => {
    this.setState({
      showDrinks: false,
      showFood: false,
      showSmallBites: true,
      showSeasonal:false
    });
  };
  showTheSeasonal = () => {
    this.setState({
      showSeasonal: true,
      showDrinks: false,
      showFood: false,
      showSmallBites: false
    });
  };

  navTo = (id) => {
    window.location.href=`/food/${id}`
  }

  componentDidMount() {
    const drinkItems = [
      {
        name: "HOT COFFEE",
        size: "12OZ",
        description: "Fresh drip coffee brewed every two hours; beans by Methodical Roasters™️",
        price: "3"
      },
      {
        name: "ESPRESSO",
        size: "2OZ",
        description: "Dialed in daily to extract a balanced shot, accentuating the beans’ notes and flavor profile",
        price: "3"
      },
      {
        name: "AMERICANO",
        size: "12OZ",
        description: "Two shots of espresso, hot water",
        price: "3"
      },
      {
        name: "MACCHIATO",
        size: "3OZ",
        description: "Two shots of espresso, steamed milk",
        price: "3.5"
      },
      {
        name: "CORTADO",
        size: "4.5OZ",
        description: "Two shots of espresso, steamed milk",
        price: "3.5"
      },
      {
        name: "CAPPUCCINO",
        size: "8OZ",
        description: "Two shots of espresso, steamed milk",
        price: "4"
      },
      {
        name: "LATTE",
        size: "12OZ",
        description:
          "Two shots of espresso, steamed milk",
        price: "4.5"
      },
      {
        name: "MOCHA",
        size: "12OZ",
        description:
          "Two shots of espresso, steamed milk, house-made Ghirardelli™️ mocha",
        price: "5"
      },
      {
        name: "POUR OVER",
        size: "12OZ",
        description:
          "Rotating single origin beans by Methodical Roasters™️",
        price: "4"
      },
      {
        name: "HOT TEA",
        size: "12OZ",
        description: "Your Tin Roof Tea™️ of choice",
        price: "4"
      },
      {
        name: "MATCHA SHOT",
        size: "2OZ",
        description: "Shot of our Ceremonial matcha (finely ground powder of specially grown green tea leaves)Light, sweet and grassy",
        price: "4"
      },
      {
        name: "MATCHA LATTE",
        size: "12OZ",
        description:
          "Culinary matcha, steamed milk",
        price: "4.5"
      },
      {
        name: "CHAI LATTE",
        size: "12OZ",
        description:
          "Marissa’s own recipe of Tin Roof Teas™️ chai blend with ghost pepper honey, wildflower honey, agave and steamed milk",
        price: "4.5"
      },
      {
        name: "VIETNAMESE COFFEE",
        size: "12OZ",
        description:
          "(ICED) Jimmy’s mom’s homemade recipe of Café Du Monde™️ and condensed milk over ice; strong and sweet",
        price: "4.5"
      },
      {
        name: "COLD BREW",
        size: "12OZ",
        description:
          "Coarse ground coffee cold steeped overnight; smooth and nutty",
        price: "4"
      },
      {
        name: "Nitro Cold Brew",
        size: "12OZ",
        description:
          "Our cold brew coffee charged with nitrogen to give a rich and creamy head",
        price: "5"
      },
      {
        name: "ICED TEA",
        size: "12OZ",
        description: "Ask our baristas for the current white, green or black iced tea on rotation",
        price: "4"
      }
    ];

    const panSan = [
      {
        id:0,
        name: "CAPRESE",
        size: "PANINI",
        description: "Tomato, mozzarella, fresh basil, pesto",
        price: "10"
      },
      {
        id:1,
        name: "SALMON",
        size: "LOX",
        description:
          "Cured salmon, cream cheese, capers, red onion, frisee lettuce, tomato on a BOLD everything bagel",
        price: "12"
      },
      {
        id:2,
        name: "MUFFULETTA",
        size: "PANINI",
        description:
          "Capicola, mortadella, provolone, aioli, creole olive relish",
        price: "12"
      },
      {
        id:3,
        name: "GRILLED",
        size: "CHEESE",
        description: "Assorted cheese, union special bread",
        price: "7"
      },
      {
        id:4,
        name: "BANH",
        size: "MI",
        description:
          "Our homemade recipe of Vietnamese cured meats, pate, cucumbers, cilantro, pickled relish, jalapeño, fresh black pepper",
        price: "10"
      }
    ];

    const oFace = [
      {
        id:5,
        name: "THE",
        size: "ITALIAN",
        description: "Prosciutto, olive oil, heirloom tomato, arugula",
        price: "10"
      },
      {
        id:6,
        name: "THE",
        size: "G.O.A.T",
        description:
          "Preserved fig, goat cheese, lemon zest, frisee, bergamot oil",
        price: "9"
      },
      {
        id:7,
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
    const seasonal = [
      {
        name: "Suckerpunch",
        size: "ICED",
        description: "House made hibiscus syrup, our cold brew, lemon juice, hibiscus La Croix™️ and Topo Chico™️",
        price: "3"
      },
      {
        name: 'Violet Beauregarde',
        size: "ICED",
        description: "Blueberry and basil reduction, lemon juice, Topo Chico™️, garnished with fresh basil",
        price: "3.5"
      },
      {
        name: "Southwestern Grilled Cheese",
        size: "",
        description: "The Classic. Add jalapeños, cilantro and tomatoes",
        price: "8"
      }
    ];

    this.setState({
      drinkItems: drinkItems,
      panSan: panSan,
      oFace: oFace,
      smallBites: smallBites,
      seasonal: seasonal
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
      showTheSmallBites,
      seasonal,
      showSeasonal
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
        <div onClick={()=> {this.navTo(item.id)}}
          className={
            oFace.length % 3 == 0 ? "menu-item-container food-links" : "menu-item-overflow food-links"
          }
          // style={{cursor:'pointer'}}
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
        onClick={()=> {this.navTo(item.id)}}
          className={
            panSan.length % 3 == 0
              ? "menu-item-container food-links"
              : "menu-item-overflow food-links"
          }
          // style={{cursor:'pointer'}}
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
    if (showSeasonal) {
      var renderSeasonal = this.state.seasonal.map((item, i) => (
          <div
            key={i}
            className={
              seasonal.length % 3 == 0
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

    // console.log(this.state);

    return (
      <div>
        <Navigation />
        <Helmet>
                <meta charSet="utf-8" />
                <title>Menu | Idle Hour Coffee Roasters</title>
                <meta name="description" content="Boutique coffee shop located in Raleigh NC, serving delicious coffee and sandwiches. Free wifi and aesthetic work space. Open 7 am - 7 pm, 7 days a week." />
                {/* <link rel="canonical" href="http://www.idlehourcoffee.com/" /> */}
            </Helmet>
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
                <p
                  onClick={this.showTheSeasonal}
                  className={showSeasonal ? "active" : ""}
                >
                  Seasonal
                </p>
              </div>
            </div>

            {showDrinks && (
              <div>
                <p className="size-increase">
                  <i> 12oz {"->"} 16oz... + $1</i>
                </p>
                <div className="flex-menu-parent">{drinkRender}</div>
                <div className="drink-details">
                  <p>Drinks available with whole, skim or Oatley™️</p>
                  <p>Standard syrups available with any drink: Vanilla, Caramel, Hazelnut, Caramel
House syrups: Maple Ginger, Lavender Honey, Orange Amaretto</p>
<p>Matcha Latte available with Purple, Pink, Blue and Brown Matcha
(maqui berry, dragonfruit, butterfly pea flower and hojicha)</p>
<p>Vietnamese Coffee available with coconut milk</p>
                </div>
              </div>
            )}
            {showFood && (
              <div>
                <p className="size-increase">
                  <i> Click on an item for pictures and more information</i>
                </p>
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
            {showSeasonal && (
              <div>
                {/* <p className="size-increase">
                  <i> Click on an item for pictures and more information</i>
                </p> */}
                <div className="flex-menu-parent">
                  <div>
                    <div className="flex-menu-parent">{renderSeasonal}</div>
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

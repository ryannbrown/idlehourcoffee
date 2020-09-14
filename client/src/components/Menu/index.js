import { Container, Nav, Button, Image, Row, Col } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import React, { Component } from "react";
// import logo from './logo.svg';
// import HomeHero from "../../components/HomeHero/index"
import "./style.css";
import idleIcons from "../../media/idleicons.png";
import dots from "../../media/half-dots.png";
import clock from "../../media/Black-Comp-Icons/clock-icon-white-ALT.png";
import cup from "../../media/cup-icon-black.png";
import flag from "../../media/Black-Comp-Icons/flag-icon-white-ALT.png";
import latte from "../../media/Black-Comp-Icons/latte-art-icon-white-ALT.png";
import star from "../../media/Black-Comp-Icons/star-icon-white-ALT.png";
import tamp from "../../media/Black-Comp-Icons/tamp-icon-white-ALT.png";
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
      showFood: false
    };
  }



showTheDrinks = () => {
    this.setState({
        showFood:false,
        showDrinks:true
    })
}
showTheFood = () => {
    this.setState({
        showDrinks:false,
        showFood:true,
    })
}

  componentDidMount() {
    const drinkItems = [
      {
        name: "CORTADO",
        size: "4OZ",
        description:
          "Two shots of espresso layered with 2oz of lightly steamed milk.",
        price: "3.25",
      },
      {
        name: "ESPRESSO",
        size: "2OZ",
        description: "Two shots of our house espresso.",
        price: "3.25",
      },
      {
        name: "CORTADO",
        size: "4OZ",
        description:
          "Two shots of espresso layered with 2oz of lightly steamed milk.",
        price: "3.25",
      },
      {
        name: "ESPRESSO",
        size: "2OZ",
        description: "Two shots of our house espresso.",
        price: "3.25",
      },
      {
        name: "CORTADO",
        size: "4OZ",
        description:
          "Two shots of espresso layered with 2oz of lightly steamed milk.",
        price: "3.25",
      },
      {
        name: "ESPRESSO",
        size: "2OZ",
        description: "Two shots of our house espresso.",
        price: "3.25",
      },
      {
        name: "CORTADO",
        size: "4OZ",
        description:
          "Two shots of espresso layered with 2oz of lightly steamed milk.",
        price: "3.25",
      },
      {
        name: "ESPRESSO",
        size: "2OZ",
        description: "Two shots of our house espresso.",
        price: "3.25",
      },
      {
        name: "CORTADO",
        size: "4OZ",
        description:
          "Two shots of espresso layered with 2oz of lightly steamed milk.",
        price: "3.25",
      },
      {
        name: "ESPRESSO",
        size: "2OZ",
        description: "Two shots of our house espresso.",
        price: "3.25",
      },
      {
        name: "CORTADO",
        size: "4OZ",
        description:
          "Two shots of espresso layered with 2oz of lightly steamed milk.",
        price: "3.25",
      },
      {
        name: "ESPRESSO",
        size: "2OZ",
        description: "Two shots of our house espresso.",
        price: "3.25",
      },
      {
        name: "ESPRESSO",
        size: "2OZ",
        description: "Two shots of our house espresso.",
        price: "3.25",
      },
      {
        name: "CORTADO",
        size: "4OZ",
        description:
          "Two shots of espresso layered with 2oz of lightly steamed milk.",
        price: "3.25",
      },
      {
        name: "ESPRESSO",
        size: "2OZ",
        description: "Two shots of our house espresso.",
        price: "3.25",
      },
    ];

  


    const foodItems = [
      {
        name: "CAPRESE",
        size: "PANINI",
        description:
          "Tomato, mozzarella, fresh basil, pesto",
        price: "10",
      },
      {
        name: "Muffuletta",
        size: "PANINI",
        description: "Capicola, mortadella, provolone, aioli, creole olive relish",
        price: "12",
      },
      {
        name: "CAPRESE",
        size: "PANINI",
        description:
          "Tomato, mozzarella, fresh basil, pesto",
        price: "10",
      },
      {
        name: "Muffuletta",
        size: "PANINI",
        description: "Capicola, mortadella, provolone, aioli, creole olive relish",
        price: "12",
      },
      {
        name: "CAPRESE",
        size: "PANINI",
        description:
          "Tomato, mozzarella, fresh basil, pesto",
        price: "10",
      },
      {
        name: "Muffuletta",
        size: "PANINI",
        description: "Capicola, mortadella, provolone, aioli, creole olive relish",
        price: "12",
      },
      {
        name: "CAPRESE",
        size: "PANINI",
        description:
          "Tomato, mozzarella, fresh basil, pesto",
        price: "10",
      },
      {
        name: "Muffuletta",
        size: "PANINI",
        description: "Capicola, mortadella, provolone, aioli, creole olive relish",
        price: "12",
      },
      {
        name: "Muffuletta",
        size: "PANINI",
        description: "Capicola, mortadella, provolone, aioli, creole olive relish",
        price: "12",
      },
     
    ];


    this.setState({
        drinkItems: drinkItems,
        foodItems: foodItems,
      });
   
  }

  render() {
    // console.log(this.state.icons);
    if (this.state.showDrinks) {
      var showItems = this.state.drinkItems.map((item, i) => (
        <div className="menu-item-container">
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
    if (this.state.showFood) {
      var showItems = this.state.foodItems.map((item, i) => (
        <div className="menu-item-container">
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
        <div className="menu-parent">
          <div className="menu-header">
            <div className="menu">
              <img width="50px" src={cup}></img>
              <p>Menu</p>
            </div>
            <div className="menu-options">
                {this.state.showDrinks? <p className="active" onClick={this.showTheDrinks}>Coffee</p> :
                (<p onClick={this.showTheDrinks}>Coffee</p>)}
            {this.state.showFood?  <p className="active" onClick={this.showTheFood}>Food</p> : (<p onClick={this.showTheFood}>Food</p>) }
            </div>
          </div>
     <div className="flex-menu-parent">{showItems}</div>
        </div>
       
      </div>
    );
  }
}

import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
// import Navigation from "./components/Navigation/index"
import Homepage from "./pages/Homepage/index"
import WorksDetails from "./pages/WorksDetails/index"
import Menu from "./pages/Menu/index"
import ScrollToTop from "../src/utils/scrollToTop"
import Partners from "./pages/Partners/index"
import About from "./pages/About/index"
import Brand from "./pages/Brand/index"
import bahn from "./media/menu/bahnmi-min.jpg"
import cap from "./media/menu/caprese-min.jpg"
import gc from "./media/menu/grilledcheese-min.jpg"
import italian from "./media/menu/italian-min.jpg"
import lox from "./media/menu/lox-min.jpg"
import muf from "./media/menu/muf-min.jpg"
import nor from "./media/menu/nor-min.jpg"
import goat from "./media/menu/goat-min.jpg"
import createHistory from 'history/createBrowserHistory';

import { createBrowserHistory } from 'history'
import ReactGA from 'react-ga'
require("dotenv").config();



ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_NO)
const browserHistory = createBrowserHistory()
browserHistory.listen((location, action) => {
  ReactGA.pageview(location.pathname + location.search)
})


const worksObject = [
  {
    id: 0,
    name: "CAPRESE",
    size: "PANINI",
    description: "Tomato, mozzarella, fresh basil, pesto",
    price: "10",
    img: cap
  },
  {
    id: 1,
    name: "SALMON",
    size: "LOX",
    description:
      "Cured salmon, cream cheese, capers, red onion, frisee lettuce, tomato on a BOLD everything bagel",
    price: "12",
    img: lox
  },
  {
    id: 2,
    name: "MUFFULETTA",
    size: "PANINI",
    description:
      "Capicola, mortadella, provolone, aioli, creole olive relish",
    price: "12",
    img: muf
  },
  {
    id: 3,
    name: "GRILLED",
    size: "CHEESE",
    description: "Assorted cheese, union special bread",
    price: "7",
    img: gc
  },
  {
    id: 4,
    name: "BANH",
    size: "MI",
    description:
      "Our homemade recipe of Vietnamese cured meats, pate, cucumbers, cilantro, pickled relish, jalapeño, fresh black pepper",
    price: "10",
    img: bahn
  },
  {
    id: 5,
    name: "THE",
    size: "ITALIAN",
    description: "Prosciutto, olive oil, heirloom tomato, arugula",
    price: "10",
    img: italian
  },
  {
    id: 6,
    name: "THE",
    size: "G.O.A.T",
    description:
      "Preserved fig, goat cheese, lemon zest, frisee, bergamot oil",
    price: "9",
    img: goat
  },
  {
    id: 7,
    name: "THE",
    size: "NORWEGIAN",
    description:
      "Smoked trout, Neufchatel cheese, dill, house crafted pickles",
    price: "12",
    img: nor
  }
];






class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    };
  }
// const history = createHistory({
//     basename: process.env.PUBLIC_URL,
//   });

componentDidMount() {
  ReactGA.pageview(window.location.pathname + window.location.search)
}


render() {



  return (
    <div className="App">
         {/* <Navigation/> */}
         <Router
          // history = {history}
          >
              <ScrollToTop / >
           <Switch>
             {/* <Route path="/brand" component={Brand}/> */}
             <Route path="/menu" component={Menu}/>
             <Route path="/partners" component={Partners}/>
             <Route path="/about" component={About}/>
             <Route path="/food/:id" render={(props) => <WorksDetails {...props} worksObject={worksObject} title={`Props through render`} />} />
             <Route path="/" component={Homepage}/>
           </Switch>
         </Router>
   
         
    </div>
  
  );
}
}


export default App;

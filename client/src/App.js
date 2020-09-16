import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Container, Nav, Button, Col, Row, Card } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Navigation from "./components/Navigation/index"
import Homepage from "./pages/Homepage/index"
import Menu from "./pages/Menu/index"
import Brand from "./pages/Brand/index"

import createHistory from 'history/createBrowserHistory';


function App() {
const history = createHistory({
    basename: process.env.PUBLIC_URL,
  });

  return (
    <div className="App">
         {/* <Navigation/> */}
         <Router history = {history}>
           <Switch>
             {/* <Route path="/brand" component={Brand}/> */}
             <Route path="/menu" component={Menu}/>
             <Route path="/" component={Homepage}/>
           </Switch>
         </Router>
   
         
    </div>
  
  );
}

export default App;

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";

import HomePage from "../HomePage/HomePage";
import Nav from "../Nav/Nav.js";
import AddItems from "../AddtIems/AddItems";
import LikedItems from '../LikedItems/LikedItems';
import ViewAll from "../viewAll/ViewAll";
//import Login from "../Login/Login.js";
import Footer from "../HomePage/Footer";
import { useEffect, useContext } from "react";
import { ViewAllContext } from '../viewAll/ViewAllContext';
import MainComponent from "../MainComponent/MainComponent";



function App() {

    const {items, getItems, combinationsList} = useContext(ViewAllContext);

    useEffect(() => {
        getItems()
        combinationsList()
      }, [])
    
    

  return (
    <Router>
      <Nav />

      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/addItems">
          <AddItems />
        </Route>
        <Route path="/mainComponent">
          <MainComponent />
        </Route>
        <Route path="/likedItems">
          <LikedItems />
        </Route>
        <Route path="/view-all">
          <ViewAll />
        </Route>
        {/* <Route path="/logIn">
          <Login />
        </Route> */}
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;

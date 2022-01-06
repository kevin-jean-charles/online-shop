import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Home from "./components/pages/home/home";
import Items from "./components/pages/items/items";
import Item from "./components/pages/item/item";
import AddItem from "./components/pages/addItem/addItem";
import CreateItem from "./components/pages/createItem/createItem";
import Login from "./components/pages/login/login";



import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/items" component={Items} />
          <Route exact path="/item/:id" component={Item} />
          <Route exact path="/item/add" component={AddItem} />
          <Route exact path="/item/create" component={CreateItem} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;

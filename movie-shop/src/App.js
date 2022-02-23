import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Nav from "./components/organisms/navigation/navigation"
import Home from "./components/pages/home/home";
import Items from "./components/pages/items/items";
import Item from "./components/pages/item/item";
import AddItem from "./components/pages/addItem/addItem";
import CreateItem from "./components/pages/createItem/createItem";
import Cart from "./components/pages/cart/cart";
import Login from "./components/pages/login/login";
import Dashboard from "./components/pages/dashboard/dashboard";
import DashboardAdmin from "./components/pages/dashboard/dashboardAdmin";



import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/items" element={<Items />} />
          <Route exact path="/item/:id" element={<Item />} />
          <Route exact path="/items/category/:id" element={<Items />} />
          <Route exact path="/item/add" element={<AddItem />} />
          <Route exact path="/item/create" element={<CreateItem />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/admin" element={<DashboardAdmin />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;

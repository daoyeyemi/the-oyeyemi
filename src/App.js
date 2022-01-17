import { Link, Route, Router, Switch } from "react-router-dom"

import Home from './components/Home';
import HoursLocations from './components/H&L';
import Menus from "components/Menus";
import Navbar from './components/Navbar';
import Orders from "components/Orders";
import React from 'react';
import Reservations from "components/Reservations";

const App = () => {
    return (
            <Navbar />
    );
}

export default App;

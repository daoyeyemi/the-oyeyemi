import { Link, Route, Router, Switch } from "react-router-dom"

import Home from './components/Home';
import HoursLocations from './components/H&L';
import Menus from "components/Menus";
import Navbar from './components/Navbar';
import OrderMeal from "components/OrderMeal";
import Orders from "components/Orders";
import React from 'react';
import Reservations from "components/Reservations";

const App = () => {

    const meals = [
        {
            category: "Sharing is Caring",
            name: "Shoestring Fries",
            price: 5,
            description: "golden fries served with rich buttermilk ranch",
            slug: "shoestring-fries"
        },
        {
            category: "Sharing is Caring",
            name: '"Everything Bagel" Deviled Eggs',
            price: 9,
            description: "Salmon bacon, everything spice, capers, pickled onion",
            slug: "everything-bagel"
        },
        {
            category: "Sharing is Caring",
            name: "Charred Carrots",
            price: 10,
            description:  "Pistachio pesto, goat cheese",
            slug: "charred-carrots"
        },
        {
            category: "It's 8 AM Somewhere",
            name: "Sourdough Pancakes",
            price: 11,
            description: "Seasonal fruit compote, praline butter",
            slug: "sourdough-pancakes"
        },
        {
            category: "It's 8 AM Somewhere",
            name: "East Coast Breakfast Sammy",
            price: 10,
            description: "Runny egg, American, S&P, hard roll",
            slug: "east-coast-breakfast-sammy"
        },
        {
            category: "It's 8 AM Somewhere",
            name: "Steak & Eggs",
            price: 27,
            description: "Grilled Flank Steak, Twice Cooked Breakfast Potatoes, Chimichurri.",
            slug: "steak&eggs"
        },
        {
            category: "Cans & Bottles",
            name: "Topo Chico Hard Seltzer",
            price: 6,
            description: "Assorted, 4.7% alcohol",
            slug: "topo-chico-hard-seltzer"
        },
        {
            category: "Cans & Bottles",
            name: "Downeast Unfiltered Craft Cider",
            price: 7,
            description: "5.1% alcohol",
            slug: "down-east-unfiltered-craft-cider"
        },
        {
            category: "Cans & Bottles",
            name: 'Odell "Myrcenary" Double IPA',
            price: 8,
            description: "9.3% alcohol",
            slug: "odell-myrcenary"
        }
    ]

    return (
        <>
            <Navbar />

            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path={'/hours&location'} component={HoursLocations} />
                <Route exact path={'/menu'} component={Menus} />
                <Route exact path={'/orders'} component={Orders} />
                <Route exact path={'/reservations'} component={Reservations} />
                <Route exact path={'/orders/:slug'} component={OrderMeal} />
            </Switch>
        </>
            
    );
}

export default App;

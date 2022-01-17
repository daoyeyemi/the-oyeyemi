import "./styles.css"

import { Link, Route, Switch } from "react-router-dom"

import Home from "components/Home"
import HoursLocations from "components/H&L"
import Menus from "components/Menus"
import OrderMeal from "components/OrderMeal"
import Orders from "components/Orders"
import React from 'react'
import Reservations from "components/Reservations"

const Navbar = () => {
    return (
        <>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <a className="top-links" href="#">1111 Figueroa Place Wilmington, CA 90744</a>
                <a className="top-links" href="#">(111) 111-1111</a>
            </div>
            <nav style={{ display: "flex", justifyContent: "center" }}>
                <Link to={'/hours&location'} className="nav-link">Hours & Location</Link>
                <Link to={'/menu'} className="nav-link">Menu</Link>
                <Link to={'/about'} className="nav-link">About Us</Link>
                <Link to={'/events'} className="nav-link">Events</Link>
                <Link to={'/orders'} className="nav-link">Orders</Link>
                <Link to={'/reservations'} className="nav-link">Reservations</Link>
            </nav>
        </>
    )
}

export default Navbar

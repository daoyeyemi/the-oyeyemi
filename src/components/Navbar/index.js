import React from 'react'
import "./styles.css"
const Navbar = () => {
    return (
        <>
            <div style={{
                    display: "flex",
                    justifyContent: "center"
                }}>
                <a className="top-links" href="#">1111 Figueroa Place Wilmington, CA 90744</a>
                <a className="top-links" href="#">(111) 111-1111</a>
            </div>
            <nav style={{
                    display: "flex",
                    justifyContent: "center"
                }}>
                <a className="nav-link" href="#">Hours & Location</a>
                <a className="nav-link" href="#">Menu</a>
                <a className="nav-link" href="#">About Us</a>
                <a className="nav-link" href="#">Events</a>
                <a className="nav-link" href="#">Orders</a>
                <a className="nav-link" href="#">Reservations</a>
            </nav>
        </>
    )
}

export default Navbar

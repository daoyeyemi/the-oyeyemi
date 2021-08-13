import React from 'react'
import plate from './big_food.png'
import './styles.css'
const Home = () => {
    return (
        <>
            <div style={{ textAlign: "center", marginTop: "25px", marginBottom: "25px" }}>
                <img src={plate} alt="plate" />
            </div>
            <p className='title-font' style={{ 
                textAlign: "center",
                fontSize: "80px",
                fontWeight: "800"
            }}>
                The Oyeyemi
            </p>
            <p style={{ textAlign: "center"}}>your go to restaurant for authentic African dishes</p>
        </>
    )
}

export default Home

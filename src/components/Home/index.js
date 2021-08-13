import React from 'react'
import plate from './big_food.png'
import './styles.css'
const Home = () => {
    return (
        <>
            <div style={{ textAlign: "center", marginTop: "25px", }}>
                <img src={plate} alt="plate" />
            </div>
            <p className='title-font' style={{ 
                textAlign: "center",
                color: "white",
                fontSize: "80px",
                fontWeight: "bolder"
            }}>
                The Oyeyemi
            </p>
        </>
    )
}

export default Home

import React from 'react'
import plate from './big_food.png'
import './styles.css'
import { BsFillDiamondFill, BsChevronDoubleDown } from "react-icons/bs"
import salad from "./salad.jpg"

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
            <p style={{ textAlign: "center", marginBottom: "35px"}}>your go to restaurant for authentic Carsonian dishes</p>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3' style={{textAlign: 'center', marginBottom: '15px'}}>
                        Tradition
                    </div>
                    <div className='col-md-1' style={{textAlign: 'center', marginBottom: '15px'}}>
                        <BsFillDiamondFill />
                    </div>
                    <div className='col-md-4' style={{textAlign: 'center', marginBottom: '15px'}}>
                        Identity
                    </div>
                    <div className='col-md-1' style={{textAlign: 'center', marginBottom: '15px'}}>
                        <BsFillDiamondFill />
                    </div>
                    <div className='col-md-3' style={{textAlign: 'center', marginBottom: '15px'}}>
                        Authenticity
                    </div>
                
                <div style={{textAlign: 'center', marginTop: '30px', marginBottom: '40px'}}>
                    <BsChevronDoubleDown style={{ fontSize: '60px' }} />
                </div>
                <section style={{ marginBottom: '30px' }}>
                    <div className='col-md-6' style={{ display: 'inline-block', float: 'left' }}>
                        <img src={salad} height='100%' width='100%' />
                    </div>
                    <div className='col-md-6' style={{ display: 'inline-block', float: 'right' }}>
                        <h3>Our Menus</h3>
                        <p>Our creative, elevated food and beverage program combines satisfying staples with imaginative twists. From boozy brunches and happy hours to family dinners, special occasions and everything in between, The Original has something for everyone.</p>
                    </div>
                
                </section>
                </div>    
                <div></div>
            </div>
        </>
    )
}

export default Home

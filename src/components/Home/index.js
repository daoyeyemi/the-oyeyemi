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
                    <div className='col-md-6' style={{ display: 'inline-block', marginBottom: '25px', textAlign: 'center' }}>
                        <img src={salad} height='100%' width='100%' />
                    </div>
                    <div className='col-md-6' style={{ float: 'right', textAlign: 'center' }}> 
                        <div style={{ width: '80%', display: 'inline-block', textAlign: 'center', border: '2px solid navy', borderRadius: '5px', height: '100%', marginLeft: '20px', marginRight: '20px' }}>
                            <h3 style={{ marginTop: '25px', paddingTop: '25px', textAlign: 'center'}}>Our Menus</h3>
                            <p style={{ paddingTop: '20px', paddingLeft: '50px', paddingRight: '50px', paddingBottom: '20px' }}>Our creative, elevated food and beverage program combines satisfying staples with imaginative twists. From boozy brunches and happy hours to family dinners, special occasions and everything in between, The Original has something for everyone.</p>
                        </div>
                    </div>
                
                </section>
                </div>    
                <div></div>
            </div>
        </>
    )
}

export default Home

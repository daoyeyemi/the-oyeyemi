import React from 'react'
import plate from './big_food.png'
import './styles.css'
import { BsFillDiamondFill, BsChevronDoubleDown } from "react-icons/bs"
import salad from "./salad.jpg"
import pizza from "./pizza.jpg"
import pasta from "./pasta.jpg"

import fries from "./fries.jpg"
import pasta1 from "./pasta.jpg"
import dining from "./dining.jpg"
import dining1 from "./dining1.jpg"
import pasta2 from "./pasta2.jpg"
import wings from "./wings.jpg"
import burgers from "./burgers.jpg"
import icecream from "./icecream.jpg"

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
                    <section style={{ marginBottom: '12px' }}>
                        <div className='col-md-6' style={{ display: 'inline-block', marginBottom: '25px', textAlign: 'center' }}>
                            <img src={salad} height='100%' width='100%' />
                        </div>
                        <div className='col-md-6' style={{ float: 'right', textAlign: 'center' }}> 
                            <div style={{ width: '80%', display: 'inline-block', textAlign: 'center', border: '2px solid navy', borderRadius: '5px', height: '54vh', marginLeft: '20px', marginRight: '20px' }}>
                                <h3 style={{ marginTop: '25px', paddingTop: '25px', textAlign: 'left', paddingLeft: '80px'}}>Our Menus</h3>
                                <p style={{ paddingTop: '20px', paddingLeft: '80px', paddingRight: '80px', paddingBottom: '20px', textAlign: 'left' }}>
                                    Our creative, elevated food and beverage program combines satisfying staples with imaginative twists. 
                                    From boozy brunches and happy hours to family dinners, special occasions and everything in between, The 
                                    Original has something for everyone.
                                </p>
                                <button>View Menus</button>
                            </div>
                        </div>
                    </section>
                    <div className='col-md-4' style={{ marginTop : '7px', marginBottom: '7px' }}>
                        <div class="d-grid gap-2">
                            <button class="btn btn-primary" type="button" style={{ padding: '20px' }}>Button</button>
                        </div>
                    </div>
                    <div className='col-md-4' style={{ marginTop : '7px', marginBottom: '7px' }}>
                        <div class="d-grid gap-2">
                            <button class="btn btn-primary" type="button" style={{ padding: '20px' }}>Button</button>
                        </div>
                    </div>
                    <div className='col-md-4' style={{ marginTop : '7px', marginBottom: '7px' }}>
                        <div class="d-grid gap-2">
                            <button class="btn btn-primary" type="button" style={{ padding: '20px' }}>Button</button>
                        </div>
                    </div>
                    <div className='col-md-3'></div>
                    <div className='col-md-6'>
                        <p style={{ marginTop: '60px', marginBottom: '70px'}}>
                            Inspired by the city of Carson, The Oyeyemi brings a nostalgic flair and a 
                            combination of old school and new school dining; bring an innovative yet 
                            still traditional flair.
                        </p>
                    </div>
                    <div className='col-md-3'></div>
                    <section style={{ marginBottom: '12px' }}>
                        <div className='col-md-6' style={{ float: 'left', textAlign: 'center', marginBottom: '25px' }}> 
                            <div style={{ width: '80%', display: 'inline-block', textAlign: 'center', border: '2px solid navy', borderRadius: '5px', height: '80vh', marginLeft: '20px', marginRight: '20px' }}>
                                <h3 style={{ marginTop: '25px', paddingTop: '25px', textAlign: 'left', paddingLeft: '80px'}}>Events</h3>
                                <p style={{ paddingTop: '20px', paddingLeft: '80px', paddingRight: '80px', paddingBottom: '20px', textAlign: 'left' }}>
                                    What's going on at The Oyeyemi?
                                </p>
                                <button>View Events</button>
                            </div>
                        </div>
                        <div className='col-md-6' style={{ display: 'inline-block', textAlign: 'center' }}>
                            <img src={pizza} height='100%' width='100%' />
                        </div>
                    </section>
                </div>    
                <div className='col-md-12'>
                    <div style={{
                        backgroundImage: `url(${pasta})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundAttachment: 'fixed',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover'
                    }}>
                        <div style={{ height: '500px', width: '100px', marginBottom: '30px', marginTop: '15px' }}></div>
                    </div>
                    <p style={{ textAlign: 'center', marginBottom: '30px'}}> Follow us @davidoyeyem1 </p>
                </div>
                <div className="outer-grid" style={{ textAlign: 'center', display: 'flex', flexWrap: 'wrap', padding: '0 2px' }}>
                    <div className="inner-grid" style={{ flex: '25%', maxWidth: '50%' }}>
                        <img src={pasta1} style={{ width: '100%' }}></img>
                        <img src={burgers} style={{ width: '100%' }}></img>
                        <img src={icecream} style={{ width: '100%' }}></img>
                        <img src={dining1} style={{ width: '100%' }}></img>
                    </div>
                    <div className="inner-grid" style={{ flex: '25%', maxWidth: '50%' }}>
                        <img src={dining} style={{ width: '100%' }}></img>
                        <img src={fries} style={{ width: '100%' }}></img>
                        <img src={pasta2} style={{ width: '100%' }}></img>
                        <img src={wings} style={{ width: '100%' }}></img>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Home
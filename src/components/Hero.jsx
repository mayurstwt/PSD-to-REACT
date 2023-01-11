import React from 'react'
import hero from '../img/Hero.png'

const Hero = () => {
    return (
        <div className="Hero-section">
            <div className="container ">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-lg-6 col-12 text-center text-md-start">
                        <h1 className='text-white display-4 fw-bold z-3'>DISCOVER THE</h1>
                    
                        <h1 className='text-white display-4 fw-bold'>NEW SPORTS</h1>
                        <h1 className='text-white display-4 fw-bold'>ONLINE</h1>

                        <h4 className='mt-4'>13 - 14 June Online Event</h4>
                        <h4 className='mt-4'>Lorem ipsum dolor sit amet<br/> Lorem ipsum dolor sit amet consectetur.</h4>
                        <button type="button" class="btn rounded-0 px-5 text-white mt-4">Read More</button>

                    </div>
                    <div className="col-lg-6 col-12 text-center">
                        <img src={hero} alt=""  className='w-75 my-5' />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Hero
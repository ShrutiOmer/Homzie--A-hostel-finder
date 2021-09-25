import React from 'react'
import About from '../../Components/About/About'
import Testimonials from '../../Components/Testimonials/Testimonials'

const HomePage = () => {
    return (
        <div style= {{display : 'flex', flexDirection : 'column', alignItems : 'center'}}>
        <h4>Homepage</h4>
           <h1> Hello Homzie Girls</h1>
           <About />
           <Testimonials />
        </div>
    )
}

export default HomePage;

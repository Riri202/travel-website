import React from 'react'
import '../../App.css'
import Cards from '../Cards';
import Footer from '../Footer';
import HeroSection from '../HeroSection'


function HomePage() {
    return (
        <div>
            <HeroSection/>
            <Cards 
            src= 'images/img-4.jpeg'
            text='Explore.....'
            label = 'adventure?'
            path = '/services'
            />
            <Footer/>
        </div>
    )
}

export default HomePage;

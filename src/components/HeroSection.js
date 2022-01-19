import Button from './Button'
import { FaPlayCircle } from 'react-icons/fa'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            <video autoPlay loop muted>
              <source src='/videos/video-1.mp4'/>
            </video>
            <h1>ADVENTURE CALLS OUT</h1>
            <p>What are you waiting for?</p>

            <div className='hero-btn-container'>
                <Button children={'GET STARTED'} className = 'btn' buttonSize={'btn-large'} buttonStyle={'btn-outline'}></Button>
                <Button className = 'btn' buttonSize={'btn-large'} buttonStyle={'btn-primary'}>WATCH TRAILER <FaPlayCircle className='fa-play-circle'/> </Button>
            </div>
            
            
        </div>
    )
}

export default HeroSection

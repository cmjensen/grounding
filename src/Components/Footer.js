import React from 'react'
import sight from './sight.png'
import taste from './taste.png'
import smell from './smell.png'
import sound from './sound.png'
import touch from './touch.png'

const Footer = () => {
    return <footer className='footer'>
        <div className='circles'>
            <img 
                src={sight} 
                alt='eye'
                className='img'/>
        </div>
        <div className='circles'>
            <img 
                src={taste} 
                alt='tongue'
                className='img'/>
        </div>
        <div className='circles'>
            <img 
                src={smell} 
                alt='nose'
                className='img'/>
        </div>
        <div className='circles'>
            <img 
                src={sound} 
                alt='ear'
                className='img'/>
        </div>
        <div className='circles'>
            <img 
                src={touch} 
                alt='hand'
                className='img'/>
        </div>
    </footer>
}

export default Footer
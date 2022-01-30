import React from 'react'
import image from '../Pictures/MyPicture.png'
import './styles/Hero.css'

function Hero() {
    return (
        <section className='main-section' id="home">
            <div className='container'>


                <div className="texts">
                    <h1>Hello My Name is</h1>
                    <h1 className='h1-big'>Roxie Schnoor</h1>
                    <p>I am a software engineer with a focus on frontend development and a passion to create and push
                        the boundaries of innovation and design.
                    </p>
                    <a href="https://www.canva.com/design/DAEu6hjyMds/4fDixnKBZzacebYIIywVtQ/view?utm_content=DAEu6hjyMds&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton" 
                    target="_blank" rel="noreferrer" alt="Resume Link"><button className='text-button'>My Resume</button></a>
                </div>

                <div className="sideBorder">
                    <img src={image} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Hero;
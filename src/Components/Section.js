import React from 'react'
import image from '../Pictures/MyPicture.png'
import './styles/Section.css'


const Section = () => {
    return (
        <section className='main-section'>
            <div className='container'>


                <div className="texts">
                    <h1>Hello My Name is</h1>
                    <h1 className='h1-big'>Roxie Schnoor</h1>
                    <p>I am a software engineer with a focus on frontend development and a passion to create and push
                        the boundaries of innovation and design.
                    </p>
                    <button className='text-button'>My Resume</button>
                </div>

                <div className="sideBorder">
                    <img src={image} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Section
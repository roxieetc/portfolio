import React from 'react'
import image from '../Pictures/CouchPic.png'
import './styles/Second.css'

const Second = () => {
    return (
        <section className='section-2'>
            <h1 className='about-me'>About Me</h1>
            <div className="container-2">
                <div className="image-cont">
                    <img src={image} alt="" />
                </div>

                <div className="text-2">
                    <p>Hi, my name is Roxie Schnoor and I am a software engineer. My passion to create and excitement to learn
                    have helped me to become a competent and confident developer that I am today.</p>
                    <br/>
                    <p>From learning frontend languages on my own, such as: HTML5, CSS3, and JavaScript, to expanding my knowledge
                       and skillset through the General Assembly Software Engineering Bootcamp, I have continued to grow my passion
                       and work towards becoming a skilled and valued developer.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Second
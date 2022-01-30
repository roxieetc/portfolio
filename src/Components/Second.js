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
                    have helped me to become the competent and confident developer that I am today.</p>
                    <br />
                    <p>From learning frontend languages on my own, such as: HTML5, CSS3, and JavaScript, to expanding my knowledge
                       and skillset through the General Assembly Software Engineering Bootcamp, I have continued to grow my passion
                       and work towards becoming a skilled and valued developer.
                    </p>
                    <br />
                    <p>When I'm not coding, I enjoy filming and editing vlogs for YouTube, trying out local restaurants and coffee shops,
                        as well as spending time with my two border collies. I try my best to keep a positive outlook on life, always
                        surrounding myself with the things I enjoy and the things that bring me the most happiness.
                    </p>
                </div>
            </div>

            <h1 className='tech-stack'>Current Tech</h1>

            <div className="container-2">
                <div className="text-2">
                    <i class="devicon-html5-plain-wordmark colored"></i>
                    <i class="devicon-css3-plain-wordmark colored"></i>
                    <i class="devicon-javascript-plain colored"></i>
                    <i class="devicon-react-original-wordmark colored"></i>
                    <i class="devicon-bootstrap-plain-wordmark"></i>
                    <i class="devicon-nodejs-plain-wordmark colored"></i>
                    <i class="devicon-mongodb-plain-wordmark colored"></i>
                    <i class="devicon-python-plain-wordmark colored"></i>
                    <i class="devicon-django-plain"></i>
                    <i class="devicon-postgresql-plain-wordmark colored"></i>
                    <i class="devicon-canva-original"></i>
                    <i class="devicon-vscode-plain colored"></i>
                    </div>
                </div>
        </section>
    )
}

export default Second
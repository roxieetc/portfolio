import React from 'react'
import './styles/Projects.css'
import Valorant from '../Pictures/AgentList.png'
import SPAD from '../Pictures/categories.png'
import Clique from '../Pictures/UserProfile.png'


const Projects = () => {
    return (
        <section className='testimonials'>
            <h1>My Projects</h1>
            <div className="cart-container">
                <div className="cart">
                    <img src={Valorant} alt="" />
                    <p>Valorant Database</p>
                    <div className='buttons'>
                    <a href="https://valorantdb.herokuapp.com/" target="_blank" rel="noreferrer"><button className='projectLink'>Live Site</button></a>
                    <a href="https://github.com/roxieetc/valodb" target="_blank" rel="noreferrer"><button className='projectLink'>GitHub</button></a></div>
                    <h5>Created using ReactJS and the unofficial Valorant API, this app showcases all in-game information related to Riot Games' Valorant. 
                    Featuring data regarding agents, weapons, weapon skins, and other player information, this app shows off a responsive design similar to 
                    what a player would find in the game.</h5>
                    <h6>ReactJS, Unofficial Valorant API, Responsive Design</h6>
                    </div>

                <div className="cart">
                    <img src={SPAD} alt="" />
                    <p>Clique Social</p>
                    <div className='buttons'>
                    <a href="https://github.com/roxieetc/clique-frontend" target="_blank" rel="noreferrer"><button className='projectLink'>GitHub</button></a></div>
                    <h5>A photo-sharing social media app created with ReactJS, Python, Django, and PostgreSQL, 
                        This app allows users to sign up and share photos with their friends. Comments, accounts, 
                        and posts allow for full CRUD so that users can make sure they're sharing what they want to share.</h5>
                        <h6>ReactJS, Python, Django, PostgreSQL, Bootstrap</h6>
                </div>

                <div className="cart">
                    <img src={Clique} alt="" />
                    <p>Sprinkle & Dash</p>
                    <div className='buttons'>
                    <a href="https://sprinkleanddash.herokuapp.com/" target="_blank" rel="noreferrer"><button className='projectLink'>Live Site</button></a>
                    <a href="https://github.com/roxieetc/sprinkleanddash" target="_blank" rel="noreferrer"><button className='projectLink'>GitHub</button></a></div>
                    <h5>Recipe generator app created using ReactJS and themealdb API. This app allows users to look up recipes by category. 
                        Each recipe features an image of the dish, instructions on how to prepare, and a YouTube link for visual preparation. 
                        Users can also utilize the random recipe generator.</h5>
                        <h6>ReactJS, themealdb API</h6>
                </div>

            </div>
        </section>
    )
}

export default Projects;
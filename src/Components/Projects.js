import React from 'react'
import './styles/Projects.css'
import Valorant from '../Pictures/AgentList.png'
import SPAD from '../Pictures/categories.png'
import Clique from '../Pictures/UserProfile.png'
import Trivia from '../Pictures/triviaapp.png'


const Projects = () => {
    return (
        <section className='projects'>
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
                    <h6>ReactJS . Unofficial Valorant API . Responsive Design</h6>
                    </div>

                <div className="cart">
                    <img src={Clique} alt="" />
                    <p>Clique Social</p>
                    <div className='buttons'>
                    <a href="https://github.com/roxieetc/clique-frontend" target="_blank" rel="noreferrer"><button className='projectLink'>GitHub</button></a></div>
                    <h5>A photo-sharing social media app created with ReactJS, Python, Django, and PostgreSQL, 
                        This app allows users to sign up and share photos with their friends. Comments, accounts, 
                        and posts allow for full CRUD so that users can make sure they're sharing what they want to share.
                        Features a mock design of Instagram.</h5>
                        <h6>ReactJS . Python . Django . PostgreSQL . Bootstrap</h6>
                </div>

                <div className="cart">
                    <img src={SPAD} alt="" />
                    <p>Sprinkle & Dash</p>
                    <div className='buttons'>
                    <a href="https://sprinkleanddash.herokuapp.com/" target="_blank" rel="noreferrer"><button className='projectLink'>Live Site</button></a>
                    <a href="https://github.com/roxieetc/sprinkleanddash" target="_blank" rel="noreferrer"><button className='projectLink'>GitHub</button></a></div>
                    <h5>Recipe generator app created using ReactJS and themealdb API. This app allows users to look up recipes by category. 
                        Each recipe features an image of the dish, instructions on how to prepare, and a YouTube link for visual preparation. 
                        Users can also utilize the random recipe generator.</h5>
                        <h6>ReactJS . themealdb API</h6>
                </div>

                <div className="cart">
                    <img src={Trivia} alt="" />
                    <p>Final Fantasy Trivia</p>
                    <div className='buttons'>
                    <a href="https://roxieetc.github.io/FFX-Trivia/" target="_blank" rel="noreferrer"><button className='projectLink'>Live Site</button></a>
                    <a href="https://github.com/roxieetc/FFX-Trivia" target="_blank" rel="noreferrer"><button className='projectLink'>GitHub</button></a></div>
                    <h5>A fun and interactive trivia game that tests your knowledge of this longtime fan-favorite franchise RPG. 
                        Work your way through a 10-question character quiz that will calculate a final score at the end. 
                        Each button will flash red or green on selection to indicate right and wrong answers for each question.</h5>
                        <h6>HTML5 . CSS3 . JavaScript DOM</h6>
                </div>

            </div>
        </section>
    )
}

export default Projects;
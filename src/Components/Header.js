
import React,{useState} from 'react'
import './styles/Header.css'
import { links } from './Data'


function Header() {

    return (
        <div className='header'>
            <nav>

                <div className="logo">
                    <h1>RS Dev .</h1>
                </div>


                <div className="navLinks">
                    {links.map((link) => {
                        return (
                            <a href={link.url} key={link.id}>
                                {link.text}
                            </a>
                        )
                    })}
                </div>
            </nav>


        </div>
    )
}

export default Header;
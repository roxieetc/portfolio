import React from "react";
import './styles/Contact.css'

function Contact () {
    return (
        <section className="contact" id ="contact">
            <div className="contactInfo">
                <div className="contactText">
                    <p>Roxie Schnoor</p>
                    <p>Sacramento, CA</p>
                    <p>roxieschnoor@yahoo.com</p>
                    <p>1 (404) 735-6722</p>
                </div>

                <div className="copyright">
                    <p>All content &copy; to Roxie Schnoor 2022</p>
                </div>

                <div className="socials">
                    <p><a href="https://github.com/roxieetc" target="_blank" rel="noreferrer"><i class="devicon-github-original"></i></a>
                       <a href="https://www.linkedin.com/in/roxieschnoor/" target="_blank" rel="noreferrer"><i class="devicon-linkedin-plain"></i></a>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Contact;
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInbox } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

import rhyce from '../../Rhyce.jpg'
import clay from '../../Clay.jpg'
import john from '../../John.jpg'
import ari from '../../Ari.jpg'
import eli from '../../Eli.jfif'


function Contact() {
    return (
        <div className="peopleContainer">
            <div className="columns" id="contactColumn">
                <div className='column'>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <h3 className='contactName'>Rhyce Erickson</h3>
                            <div className="flip-card-front">
                                <img class='profilepics' src={rhyce} />
                            </div>
                            <div className="flip-card-back">
                                <ul>
                                    <div><a className="contactLink aL" href="mailto:a.r.erickson.28@gmail.com">
                                        <FontAwesomeIcon class='icon' icon={faInbox} /><strong>a.r.erickson.28@gmail.com</strong></a>
                                    </div>

                                    <div><a className="contactLink aL" href="https://github.com/arerickson28" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon class='icon' icon={faGithub} />
                                        <strong>github.com/arerickson28</strong></a>
                                    </div>

                                    <div><a className="contactLink aL" href="https://www.linkedin.com/in/rhyce-erickson-a74943a0/" target="_blank">
                                        <FontAwesomeIcon class='icon' icon={faLinkedin} />
                                        <strong>https://www.linkedin.com/in/rhyce-erickson</strong></a>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='column'>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <h3 className='contactName'>Clay Holland</h3>
                            <div className="flip-card-front">
                                <img class='profilepics' src={clay} />
                            </div>
                            <div className="flip-card-back">
                                <ul>
                                    <div><a className="contactLink aL" href="mailto:claholla@gmail.com">
                                        <FontAwesomeIcon class='icon' icon={faInbox} /><strong>claholla@gmail.com</strong></a></div>

                                    <div><a className="contactLink aL" href="https://github.com/Claholla" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon class='icon' icon={faGithub} />
                                        <strong>github.com/Claholla</strong></a></div>

                                    <div><a className="contactLink aL" href="https://www.linkedin.com/in/clayholland/" target="_blank">
                                        <FontAwesomeIcon class='icon' icon={faLinkedin} />
                                        <strong>linkedin.com/in/clayholland/</strong></a></div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='column'>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <h3 className='contactName'>John Hope</h3>
                            <div className="flip-card-front">
                                <img class='profilepics' src={john} />
                            </div>
                            <div className="flip-card-back">
                                <ul>
                                    <div><a className="contactLink aL" href="mailto:johnhope354@gmail.com">
                                        <FontAwesomeIcon class='icon' icon={faInbox} /><strong>johnhope354@gmail.com</strong></a></div>

                                    <div><a className="contactLink aL" href="https://github.com/hope1407" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon class='icon' icon={faGithub} />
                                        <strong>github.com/hope1407</strong></a></div>

                                    <div><a className="contactLink aL" href="https://www.linkedin.com/in/john-hope-426562121/" target="_blank">
                                        <FontAwesomeIcon class='icon' icon={faLinkedin} />
                                        <strong>linkedin.com/in/john-hope</strong></a></div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='column'>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <h3 className='contactName'>Eli Miernicki</h3>
                            <div className="flip-card-front">
                                <img class='profilepics' src={eli} />
                            </div>
                            <div className="flip-card-back">
                                <ul>
                                    <div><a className="contactLink aL" href="mailto:miernickielijah@gmail.com">
                                        <FontAwesomeIcon class='icon' icon={faInbox} /><strong>miernickielijah@gmail.com</strong></a></div>

                                    <div><a className="contactLink aL" href="https://github.com/MiernickiElijah" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon class='icon' icon={faGithub} /><strong>github.com/MiernickiElijah</strong></a></div>

                                    <div><a className="contactLink aL" href="https://www.linkedin.com/in/miernickielijah/" target="_blank">
                                        <FontAwesomeIcon class='icon' icon={faLinkedin} /><strong>linkedIn.com/in/miernickielijah</strong></a></div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='column'>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <h3 className='contactName'>Ariel Martinez</h3>
                            <div className="flip-card-front">
                                <img class='profilepics' src={ari} />
                            </div>
                            <div className="flip-card-back">
                                <ul>
                                    <div><a className="contactLink aL" href="mailto:ari.martinez.tiru@gmail.com">
                                        <FontAwesomeIcon class='icon' icon={faInbox} /><strong>ari.martinez.tiru@gmail.com</strong></a></div>

                                    <div><a className="contactLink aL" href="https://github.com/arielo5" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon class='icon' icon={faGithub} />
                                        <strong>github.com/arielo5</strong></a></div>

                                    <div><a className="contactLink aL" href="https://www.linkedin.com/in/ariel-martinez-tiru/" target="_blank">
                                        <FontAwesomeIcon class='icon' icon={faLinkedin} />
                                        <strong>linkedin.com/in/ariel-martinez-tiru/</strong></a></div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
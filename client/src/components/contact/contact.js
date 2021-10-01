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
            <div className="columns is-mobile is-multiline is-centered is-vcentered" id="contactColumn">
                <div className='column is-narrow contactColumn people'>
                    <div className="flip-card">
                        <h3 className='contactName card-header-title'>Rhyce Erickson</h3>
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img className='profilepics card-image' src={rhyce} alt='rhyce' />
                            </div>
                            <div className="flip-card-back">
                                <ul>
                                    <div><a className="contactLink aL" href="mailto:a.r.erickson.28@gmail.com">
                                        <FontAwesomeIcon className='icon' icon={faInbox} /><strong>a.r.erickson.28@gmail.com</strong></a>
                                    </div>

                                    <div><a className="contactLink aL" href="https://github.com/arerickson28" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon className='icon' icon={faGithub} />
                                        <strong>github.com/arerickson28</strong></a>
                                    </div>

                                    <div><a className="contactLink aL" href="https://www.linkedin.com/in/rhyce-erickson-a74943a0/" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon className='icon' icon={faLinkedin} />
                                        <strong>https://www.linkedin.com/in/rhyce-erickson</strong></a>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='column is-narrow contactColumn people'>
                    <div className="flip-card">
                        <h3 className='contactName card-header-title'>Clay Holland</h3>
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img className='profilepics card-image' src={clay} alt='clay' />
                            </div>
                            <div className="flip-card-back">
                                <ul>
                                    <div><a className="contactLink aL" href="mailto:claholla@gmail.com">
                                        <FontAwesomeIcon className='icon' icon={faInbox} /><strong>claholla@gmail.com</strong></a></div>

                                    <div><a className="contactLink aL" href="https://github.com/Claholla" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon className='icon' icon={faGithub} />
                                        <strong>github.com/Claholla</strong></a></div>

                                    <div><a className="contactLink aL" href="https://www.linkedin.com/in/clayholland/" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon className='icon' icon={faLinkedin} />
                                        <strong>linkedin.com/in/clayholland/</strong></a></div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='column is-narrow contactColumn people'>
                    <div className="flip-card">
                        <h3 className='contactName card-header-title'>John Hope</h3>
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img className='profilepics card-image' id='johnpic' src={john} alt='john' />
                            </div>
                            <div className="flip-card-back">
                                <ul>
                                    <div><a className="contactLink aL" href="mailto:johnhope354@gmail.com">
                                        <FontAwesomeIcon className='icon' icon={faInbox} /><strong>johnhope354@gmail.com</strong></a></div>

                                    <div><a className="contactLink aL" href="https://github.com/hope1407" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon className='icon' icon={faGithub} />
                                        <strong>github.com/hope1407</strong></a></div>

                                    <div><a className="contactLink aL" href="https://www.linkedin.com/in/john-hope-426562121/" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon className='icon' icon={faLinkedin} />
                                        <strong>linkedin.com/in/john-hope</strong></a></div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='column is-narrow contactColumn people'>
                    <div className="flip-card">
                        <h3 className='contactName card-header-title'>Eli Miernicki</h3>
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img className='profilepics card-image' src={eli} alt='eli' />
                            </div>
                            <div className="flip-card-back">
                                <ul>
                                    <div><a className="contactLink aL" href="mailto:miernickielijah@gmail.com">
                                        <FontAwesomeIcon className='icon' icon={faInbox} /><strong>miernickielijah@gmail.com</strong></a></div>

                                    <div><a className="contactLink aL" href="https://github.com/MiernickiElijah" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon className='icon' icon={faGithub} /><strong>github.com/MiernickiElijah</strong></a></div>

                                    <div><a className="contactLink aL" href="https://www.linkedin.com/in/miernickielijah/" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon className='icon' icon={faLinkedin} /><strong>linkedIn.com/in/miernickielijah</strong></a></div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='column is-narrow contactColumn people'>
                    <div className="flip-card">
                        <h3 className='contactName card-header-title'>Ariel Martinez</h3>
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img className='profilepics card-image' src={ari} alt='ari' />
                            </div>
                            <div className="flip-card-back">
                                <ul>
                                    <div><a className="contactLink aL" href="mailto:ari.martinez.tiru@gmail.com">
                                        <FontAwesomeIcon className='icon' icon={faInbox} /><strong>ari.martinez.tiru@gmail.com</strong></a></div>

                                    <div><a className="contactLink aL" href="https://github.com/arielo5" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon className='icon' icon={faGithub} />
                                        <strong>github.com/arielo5</strong></a></div>

                                    <div><a className="contactLink aL" href="https://www.linkedin.com/in/ariel-martinez-tiru/" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon className='icon' icon={faLinkedin} />
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
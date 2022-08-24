import { faCss3, faGithub, faHtml5, faJava, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import { Loader } from 'react-loaders';
import './index.scss';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const aboutArray = ['A', 'b', 'o', 'u', 't', ' ', 'm', 'e'];

    useEffect(() => {
        
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 2400)
    }, [])


    return (
        <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={aboutArray} idx={15} /> 
                </h1>
                <p>
                    I'm pretty cool
                </p>
                <p>
                    Love learning
                </p>
                <p>
                    Please hire me
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faHtml5} color="#f06529" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faJava} color="#0d8ac7" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGithub} color="#171515" />
                    </div>
                </div>

            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const About = () => {
    const aboutArray = ['A', 'b', 'o', 'u', 't', ' ', 'm', 'e'];


    return (
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters strArray={aboutArray} idx={15} /> 
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
        </div>
    )
}

export default About
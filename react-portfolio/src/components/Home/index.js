import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LogoA from '../../assets/images/logo_a.png'
import LogoF from '../../assets/images/logo_f.png'
import LogoAF from '../../assets/images/logo_af.png'
import AnimatedLetters from '../AnimatedLetters';
import "./index.scss";
import Loader from 'react-loaders';
{/* import Logo from './LogoAF' */}

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const firstNameArray = [ 'n', 'd', 'r', 'e', 'w']
    const lastNameArray = [ 'a', 's', 'h']
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', ' ', ' ', ' ']

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 4000)
      }, [])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i</span>
                <span className={`${letterClass} _13`}>,</span>
                <br />
                <span className={`${letterClass} _14`}>I</span>
                <span className={`${letterClass} _15`}>'</span>
                <span className={`${letterClass} _16`}>m</span>
                <span className={`${letterClass} _17`}> </span>
                <img
                class='A'
                src={LogoA}
                alt="JavaScript Developer Name, Web Developer Name"
                />
                <AnimatedLetters
                letterClass={letterClass}
                strArray={firstNameArray}
                idx={18}
                />
                <br /> 
                <span>&nbsp; &nbsp;</span>
                <img
                class='F'
                src={LogoF}
                alt="JavaScript Developer Name, Web Developer Name"
                />
                <AnimatedLetters
                letterClass={letterClass}
                strArray={lastNameArray}
                idx={25}
                />
                <br />
                <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArray}
                idx={30}
                />
                </h1>
                <h2> Frontend Developer </h2>
                <Link to="contact" className='flat-button'>CONTACT ME</Link>
            </div> 
            <div className='logo-containter'>
                <img
                className="solid-logo"
                src={LogoAF}
                alt="JavaScript,  Developer"
                />
            </div>
            {/* <Logo /> */}
        </div>
        <Loader type="line-scale-pulse-out-rapid" style={{transform: 'scale(2)'}} />
        </>
    );
}

export default Home

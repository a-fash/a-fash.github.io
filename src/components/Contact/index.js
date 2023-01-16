import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 4000)
      }, [])

    return (
     <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm' , 'e']}
                        idx={15}
                    />
                </h1>
                <p>
                    Filler
                </p>
                <div className='contact-form'>
                    <form>
                        <ul>
                            <li className='half'>
                                <input type="text" name="name" placeholder='Name' required />
                            </li>
                            <li className='half'>
                                <input type="email" name="email" placeholder="Email" required />
                            </li>
                            <li>
                                <input type="text" name="subject" placeholder="Subject" required />
                            </li>
                            <li>
                                <textarea name="message" placeholder="Message" required />
                            </li>
                            <li>
                                <input type="submit" className='flat-button' value="SEND" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className="info-map">
                Andrew Fash,
                <br />
                Piscataway NJ,
                <br />
                <span>andrewfash@rutgers.edu</span>
            </div>
            <div className="map-wrap">
                <MapContainer center={[40.5470, -74.4658]} zoom={13}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[40.5470, -74.4658]} />
                </MapContainer>
            </div>
        </div>
        <Loader type="line-scale-pulse-out-rapid" style={{transform: 'scale(2)'}} />
     </>   
    )
}

export default Contact
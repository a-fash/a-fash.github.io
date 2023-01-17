import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState, useRef } from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import emailjs from '@emailjs/browser'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 4000)
      }, [])

    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm('service_8lxe3jz', 'template_suv4xx6', form.current, '3rIl9zdCNceYlSECt')
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
    }

    return (
     <>
        <div className="container contact-page">
            <div className="text-zone">
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
                <div className="contact-form">
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className="half">
                                <input type="text" name="name" placeholder="Name" required />
                            </li>
                            <li className="half">
                                <input type="email" name="email" placeholder="Email" required />
                            </li>
                            <li>
                                <input type="text" name="subject" placeholder="Subject" required />
                            </li>
                            <li>
                                <textarea name="message" placeholder="Message" required />
                            </li>
                            <li>
                                <input type="submit" className="flat-button" value="SEND" />
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
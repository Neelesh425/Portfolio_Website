import Loader from "react-loaders"
import "./index.scss"
import AnimatedLetters from "../AnimatedLetters" 
import { useEffect, useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        const timerId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
      
        return () => {
          clearTimeout(timerId);
        };
      }, []);

      const sendEmail = (e) => {
        e.preventDefault() 

        emailjs
            .sendForm(
                'service_4umdnn6',
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                refForm.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    alert("Message successfully sent! I will get back to you within 1 to 2 business days.")
                    refForm.current.reset()
                }, 
                (error) => { 
                    alert("Failed to send the message, please try again")
                    console.log(error);
                }
            )
      }

    return(
        <>
            <div className="container contact-page">
                <div className="contact-container">
                    <div className="contact-left">
                        <h1>
                            <AnimatedLetters 
                                letterClass={letterClass} 
                                strArray={"Contact me".split("")} 
                                idx={15} 
                            />
                        </h1>
                        <p>
                            <br></br>
                            Thank you for taking the time to connect !<br></br><br></br>
                            I value open communication and welcome any inquiries, feedback, or collaboration opportunities. Please don't hesitate to get in touch with me by filling out the contact form.
                        </p>
                        <br></br>
                        <div className="social-links">
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/neelesh-ranjan-0a3a17213/">
                                <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
                            </a>
                            <a target="_blank" rel="noreferrer" href="mailto:neelsinha.ns012@gmail.com">
                                <FontAwesomeIcon icon={faEnvelope} className="social-icon" />
                            </a>
                        </div>
                    </div>
                    
                    <div className="contact-right">
                        <form ref={refForm} onSubmit={sendEmail} className="contact-form">
                            <div className="form-row">
                                <input type="text" name="from_name" placeholder="Name" required />
                                <input type="email" name="reply_to" placeholder="Email" required />
                            </div>
                            <input placeholder="Subject" type="text" name="subject" required />
                            <textarea placeholder="Message" name="message" required></textarea>
                            <button type="submit" className="send-button">SEND</button>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact
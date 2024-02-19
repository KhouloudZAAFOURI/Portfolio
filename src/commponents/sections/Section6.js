import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Section6.css"
import { FaGithub, FaLinkedin } from "react-icons/fa";


export default function Section6() {
  const form = useRef();

  
  const sendEmail = async(e) => {
    e.preventDefault();

    await emailjs.sendForm('service_2ayr5p8', 'template_t9ferti', form.current, '3-jN-qTQVUfK_-WhT')
      .then((result) => {
          console.log(result.text,"true");
          alert("Form submitted!"); 
      }, (error) => {
          console.log(error.text,"false");
      });
      e.target.reset(); 
  };
  
  return (
<>
    <div id='section6'>
        <div id = 'title'>
        CONTACT ME
        </div> 
       
        <div id='container6'>

        <div id='send-msg'> 
           <div id='titre'>
           <h2> Getting in touch! </h2> 
           </div>
           <h4>Use the form below to drop me a message,
             and I'll get back to you as soon as possible.
            </h4>


           <div id='formulaire'> 
           <form ref={form} onSubmit={sendEmail}>
          <input type="text" id="name"  name="user_name"   placeholder="Your Name" required />
          <br></br>
          <input type="email" id="email"  name="user_email" placeholder="Your Email" required />
          <br></br>
          <input type="text" id="subject" name="email_subject" placeholder="Your Subject" required />
          <br></br>
          <textarea id="message" name='email_message' rows="4" placeholder="Your Message" required></textarea>
          <button type="submit" id='send'>Send Message</button>
          <br></br>
           </form>
           </div>

        </div>

        <div id='contact-info'>
           <div id='titre'>
           <h2> Contact Info </h2> 
           </div>
           <h4> Visit my social profile and get connected </h4>



          <div id='social-media'>
            <div id='links'>
            <a href="https://github.com/KhouloudZAAFOURI" id='social'><FaGithub/> </a>
            <a href="https://www.linkedin.com/in/zaafouri-khouloud-3bb455151/" id='social'><FaLinkedin/> </a>
            </div>
          </div>
        </div>

        </div>

        <div id='footer'>
        <p> © 2024. Designed by KHOULOUD ZAAFOURI. All right reserved.</p>
        </div>

    </div>
</>
  )
}

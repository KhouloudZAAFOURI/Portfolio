import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Section6.css"
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt, FaMapMarkerAlt,FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";


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
           <h2> Just say Hello </h2> 
           </div>
           <h4>Use the form below to drop me a message,
             and I'll get back to you as soon as possible.
             Thank you for getting in touch!</h4>


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
         <h4>Welcome! I'm thrilled to connect with you.
          Whether you have questions, feedback, or just want to say hello,
          feel free to reach out. Your thoughts are important to me,
          and I look forward to hearing from you.</h4>
          <div id='e-mail'>
            <p id='ICON'> <MdOutlineEmail /></p>
            <div id='email-info'>
              <h3> Email </h3>
              <p> khouloudzaafouri1@gmail.com </p>
            </div>
          </div>

          <div id='phone'>
            <p id='ICON'> <FaPhoneAlt /> </p>
            <div id='phone-info'>
              <h3> Phone </h3>
              <p> +21697138936  </p>
            </div>
          </div>

          <div id='adress'>
            <p id='ICON'><FaMapMarkerAlt /></p>
            <div id='adress-info'>
              <h3> Adress </h3>
              <p> Tunisia - Tunis  </p>
            </div>
          </div>

          <div id='social-media'>
            <p> Visit my social profile and get connected </p>
            <div id='links'>
            <a href="https://facebook.com" id='social'><FaGithub/> </a>
            <a href="https://facebook.com" id='social'><FaLinkedin/> </a>
            <a href="https://facebook.com" id='social'><FaTwitter/> </a>
            <a href="https://facebook.com" id='social'><FaFacebook/> </a>
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

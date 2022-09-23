import React from 'react';
import "./Contact.css";
import Form from "./Form"
import ContactInfo from './Info';

function Contact() {

  return (
    <div id="contact" className='container'>
      <div className='title_container'>
        <h1>Contact Us</h1>
      </div>

      <div className='subtitle_container'>
        <h3>Please fill out the form below to send us an email and we will get back to you as soon as possible.</h3>
      </div>

      <div className='contact_container'>
        <div className='form_container'>
          <Form/>
        </div>

        <div className='info_container'>
          <ContactInfo/>
        </div>
      </div>
    </div>
  );
}

export default Contact;
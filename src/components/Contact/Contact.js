import React from 'react';
import "./Contact.css";
import Form from "./Form"
import ContactInfo from './Info';
import Divider from '@mui/material/Divider';

function Contact() {

  return (
    <div id="contact" className='container'>
      <div className='title_container'>
        <h1>Contact Us</h1>
      </div>

      <div className='subtitle_container'>
        <h2>Please fill out the form below to send us an email and we will get back to you as soon as possible.</h2>
      </div>

      <div className='contact_container'>
        <div className='form_container'>
          <Form/>
        </div>
	    <div className='divider_vertical'>
          <Divider orientation="vertical" variant="middle" flexItem />
		</div>
	    <div className='divider_horizontal'>
          <Divider orientation="horizontal" variant="middle" flexItem />
		</div>
        <div className='info_container'>
          <ContactInfo/>
        </div>
      </div>
    </div>
  );
}

export default Contact;

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Link from 'next/link';

import Form from './Form';
import Confirmation from '../global/Confirmation';
import Status from '../global/Status';

import useVisualMode from '../../utils/hooks/useVisualMode';

export default function ContactMe({ styles, subject, setSubject }) {
  const { mode, transition } = useVisualMode("FORM")
  const [message, setMessage] = useState({name: undefined})
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    e.preventDefault();
    setMessage(prev => {
      const obj = prev;
      obj[e.target.name] = e.target.value;
      return obj;
    })
  }

  const addError = (errorName) => {
    formErrors[errorName] = true 
  }

  const removeError = (errorName) => {
    formErrors[errorName] = false;
  }

  const validateMessage = () => {
    const emailRegrex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    (!message.name || message.name.length <= 2) ? addError('name') : removeError('name');
    (!subject && !message.subject) ? (!message.subject || message.subject.length <= 5) ? addError('subject') : removeError('subject'): '';
    (!message.email || !message.email.match(emailRegrex)) ? addError('email') : removeError('email');
    (!message.message || message.message.length <= 25) ? addError('message') : removeError('message');
  }
  
  const sendEmail = () => {
    transition("STATUS");
    (subject && !message.subject) ? message.subject = subject : '';
    emailjs.send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, 
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE, 
      message, 
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
      .then((result) => {
        transition("SUCCESS");
      }, (error) => {
        transition("ERROR");
      }
      );
    }
    
    const submitForm = (e) => {
    e.preventDefault();
    validateMessage();
    
    let errBool = false;
    
    for (let key in formErrors){
      formErrors[key] ? errBool = true : '';
    }
    
    console.log(formErrors)
    errBool ? setFormErrors({ ...formErrors }) : sendEmail();
  };

  return (
    <section className={ styles.contact }>
      <article className={ styles.formContainer } id="contact-form">
        <div className={ [styles.contactMessage, styles.gridItem].join(' ') }>
          <h3>Reach Out</h3>
          <p className={ styles.contactLine }>Contact us to book an appointment, get more information on our services, or ask any other questions.</p>
        </div>

        <div className={ [styles.contactDetails, styles.gridItem].join(' ') }>
          <div>
            <h4><strong>Our Email:</strong></h4>
            <Link href="malito:ariana.gverzdys@precisionfirsttherapy.com"><p className={ styles.contactEmail }>ariana.gverzdys@precisionfirsttherapy.com</p></Link>
          </div>
          <div>
            <h4><strong>Our Phone:</strong></h4>
            <p className={ styles.contactEmail }>(778) 744-9178</p>
          </div>
        </div>

        <div className={ [styles.disclaimer, styles.gridItem].join(' ') }>
          <p>We pride ourselves in our ability to respond quickly to all inquiries. Responses can be expected within one business day. </p>
        </div>

        { mode === "FORM" && < Form 
          styles={ styles }
          submitForm={ submitForm } 
          handleChange={ handleChange }
          subject={ subject }
          error={ formErrors }
          /> }
        { mode === "STATUS" && < Status componentStyles={ [styles.email, styles.gridItem].join(' ') }/> }
        { mode === "SUCCESS" && < Confirmation componentStyles={ [styles.email, styles.gridItem].join(' ') } /> }
        { mode === "ERROR" && < Confirmation componentStyles={ [styles.email, styles.gridItem].join(' ') } error={ true } /> }
      </article>
    </section>
  );
};
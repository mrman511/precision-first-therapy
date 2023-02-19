import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

import Form from './Form';
// import Status from '../Status';
import Confirmation from './Confirmation';

import useVisualMode from '../../utils/hooks/useVisualMode';
// import sendEmail from '../../utils/apiRequests/sendEmail';

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
    console.log("ERROR_NAME",errorName)
    console.log('FORM ERRORs::: ', formErrors)
    formErrors[errorName] = true 
  }

  const removeError = (errorName) => {
    console.log(":::REMOVE-ERRORs:::");
    formErrors[errorName] = false;
  }

  const validateMessage = () => {
    if (!message.name || message.name.length <= 5){
      addError('name');
    } else {
      removeError('name');
    }

    if (!message.subject || message.subject.length <= 10){
      addError('subject');
    } else {
      removeError('subject');
    }

    const emailRegrex = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"

    if (!message.email || !message.email.match(emailRegrex)){
      addError('email');
    } else {
      removeError('email');
    }

    if (!message.message || message.message.length <= 100){
      addError('message');
    } else {
      removeError('message');
    }
  }

  console.log("ERRORS::::", formErrors)
  useEffect(() => {
    console.log("USEEFFECT ERRORS::::", formErrors)
  }, [formErrors])

  
  const sendEmail = (form) => {
    emailjs.send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, 
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE, 
      message, 
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
      .then((result) => {
          // transition("CONFIRM");
      }, (error) => {
          console.log(error.text);
      }
    );
  }

  const submitForm = (e, form) => {
    e.preventDefault();
    console.log("ERROR OBJ:::", formErrors)
    validateMessage();

    let errBool = false;

    for (let key in formErrors){
      formErrors[key] ? errBool = true : '';
    }

    console.log(errBool)

    errBool ? setFormErrors({ ...formErrors }) : sendEmail();

    //
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
            <p className={ styles.contactEmail }>admin@aotservices.ca</p>
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
          // form={ form } 
          handleChange={ handleChange }
          subject={ subject }
          error={ formErrors }
          /> }
        {/* { mode === "STATUS" && < Status styles={ statusStyles }/> } */}
        { mode === "CONFIRM" && < Confirmation styles={ styles }/>}
      </article>
    </section>
  );
};
import React, { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';

import Form from './Form';
// import Status from '../Status';
import Confirmation from './Confirmation';

import useVisualMode from '../../utils/hooks/useVisualMode';
// import sendEmail from '../../utils/apiRequests/sendEmail';

export default function ContactMe({ styles, subject, setSubject }) {
  // props.setPage('CONTACT');
  const { mode, transition } = useVisualMode("FORM")
  const [name, setName] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [message, setMessage] = useState(undefined);

  const [errorType, setErrorType] = useState(undefined);

  const handleChange = (setTo, setChange) => {
    if (setTo.target.value.length === 0){
      setChange(undefined);
    } else {
      setChange(setTo.target.value);
    }
  }

  const form = useRef();

  const sendEmail = () => {
   let x=1
    // emailjs.sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, 
    //   process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE, 
    //   form.current, 
    //   process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
    //   .then((result) => {
    //       transition("CONFIRM");
    //   }, (error) => {
    //       console.log(error.text);
    //   });
  };

  const confirmForm = (event) => {
    let x=2
    // event.preventDefault();
    // if (!name || !email|| !message){
    //   setErrorType('INCOMPLETE');
    // } else if (!email.includes('@') || !email.includes('.')){
    //   setErrorType('EMAIL');
    // } else if (message.length < 50) {
    //   setErrorType('MESSAGE');
    // } else {
    //   transition("STATUS");
    //   sendEmail(form.current, transition);
    // }
}

  return (
    <section className={ styles.contact }>
      { mode === "FORM" && < Form 
        styles={ styles }
        submitForm={ confirmForm } 
        form={ form } 
        handleChange={ handleChange }
        setName={ setName }
        setEmail={ setEmail }
        setMessage={ setMessage }
        subject={ subject }
        setSubject={ setSubject }
        error={ errorType } 
        /> }
      {/* { mode === "STATUS" && < Status styles={ statusStyles }/> } */}
      { mode === "CONFIRM" && < Confirmation styles={ styles }/>}
    </section>
  );
};
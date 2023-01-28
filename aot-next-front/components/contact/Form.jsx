import React from "react";

export default function Form(props) {

  const placeholder = 'Please write your message here and you will hear from me as soon as possible.'

  const { styles, setName, setEmail, setMessage, subject, setSubject, form, submitForm, handleChange, error } = props;

  return (
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
          <p className={ styles.contactEmail }>(778) 788-8887</p>
        </div>
      </div>

      <div className={ [styles.disclaimer, styles.gridItem].join(' ') }>
        <p>All enquiries are handled with absolute discretion. Before calling or writing to us please read our <span>Privacy Policy</span> for more details on how we use and look after your information.</p>
      </div>

      {/* <div className={ styles.form } ></div> */}
      <form ref={ form } onSubmit={ submitForm } className={ [styles.email, styles.gridItem].join(' ') }>
        { error === "INCOMPLETE" && <p className={ styles.error }>
          *Please ensure all input feilds are complete*
        </p> }
        { error === "EMAIL" && <p className={ styles.error }>
          *Please enter a vaild email ex. johndoe@gmail.com*
        </p> }
        { error === "MESSAGE" && <p className={ styles.error }>
          *Please enter a more detailed message*
        </p> }

        <div className={ [styles.info, styles.sentBy].join(' ') }>
          <input placeholder="Name*" type="text" id="name" name="user_name" className={ styles.inputArea } onChange={(e) => handleChange(e, setName) } />
        </div>
        
        <div className={ [styles.info, styles.sentBy].join(' ') }>
          <input placeholder="Email*" type="email" id="email" name="user_email" className={ styles.inputArea } onChange={(e) => handleChange(e, setEmail) } />
        </div>

        <div className={ [styles.info, styles.sentBy].join(' ') }>
          <input 
            placeholder="Subject*" 
            type="text" id="subject" 
            name="subject" 
            className={ styles.inputArea } 
            onChange={(e) => handleChange(e, setSubject) }
            value={ subject ? subject : '' } 
            />
        </div>

        <div className={ [styles.info, styles.message].join(' ') }>
          <textarea placeholder={ placeholder } name="message" id="message" className={ styles.inputArea } onChange={(e) => handleChange(e, setMessage) }/>
        </div>
        <button className={ [styles.btn, styles.btnLg].join(' ') } type="submit" >SEND</button>
      </form>
    </article>
  );
}
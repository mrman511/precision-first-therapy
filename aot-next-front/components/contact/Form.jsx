import React from "react";

export default function Form(props) {

  const placeholder = 'Please write your message here and you will hear from me as soon as possible.'

  const { styles, setName, setEmail, setMessage, form, submitForm, handleChange, error } = props;

  return (
    <article className={ styles.form }>
      <div className={ styles.contactMessage }>
        <h3>Reach Out</h3>
        <p className={ styles.contactLine }>Contact us to book an appointment, get more information on our services, or ask any other questions.</p>
        <p className={ styles.contactEmail }><strong>admin@aotservices.ca</strong></p>
      </div>

      <form ref={ form } onSubmit={ submitForm } className={ styles.email }>
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
          <label>Name:</label>
          <input type="text" id="name" name="user_name" className={ styles.inputArea } onChange={(e) => handleChange(e, setName) } />
        </div>
        <div className={ [styles.info, styles.sentBy].join(' ') }>
          <label>Email:</label>
          <input type="email" id="email" name="user_email" className={ styles.inputArea } onChange={(e) => handleChange(e, setEmail) } />
        </div>
        <div className={ [styles.info, styles.message].join(' ') }>
          <textarea name="message" id="message" className={ styles.inputArea } onChange={(e) => handleChange(e, setMessage) } placeholder={ placeholder }/>
        </div>
        <button className={ [styles.btn, styles.btnLg].join(' ') } type="submit" >SEND</button>
      </form>
    </article>
  );
}
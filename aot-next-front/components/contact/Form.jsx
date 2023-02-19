export default function Form(props) {
  const placeholder = 'Please write your message here and you will hear from me as soon as possible.'

  const { styles, subject, submitForm, handleChange, error} = props;

  return (
    <form 
      onSubmit={ (e) => { submitForm(e, form) } } 
      className={ [styles.email, styles.gridItem].join(' ') }
      >

      <div className={ [styles.info, styles.sentBy].join(' ') }>
        { error.name && <p className={ styles.error }>
          *Please enter a name of at least two characters*
        </p> }
        <input placeholder="Name*" 
          type="text" 
          id="name" 
          name="name" 
          className={ styles.inputArea } 
          onChange={(e) => handleChange(e) } />
      </div>
      
      <div className={ [styles.info, styles.sentBy].join(' ') }>
        { error.email && <p className={ styles.error }>
          *Please enter a valid email address*
        </p> }
        <input placeholder="Email*" 
          type="email" 
          id="email" 
          name="email" 
          className={ styles.inputArea } 
          onChange={(e) => handleChange(e) } />
      </div>

      <div className={ [styles.info, styles.sentBy].join(' ') }>
        { error.subject && <p className={ styles.error }>
          *Please add a subject*
        </p> }
        <input 
          type="text" id="subject" 
          name="subject" 
          className={ styles.inputArea } 
          onChange={(e) => handleChange(e) }
          placeholder={ subject ? subject : 'Subject*' } 
          />
      </div>

      <div className={ [styles.info, styles.message].join(' ') }>
        { error.email && <p className={ styles.error }>
          *Please add a more detailed message*
        </p> }
        <textarea placeholder={ placeholder } 
          name="message" 
          id="message" 
          className={ styles.inputArea } 
          onChange={(e) => handleChange(e) }/>
      </div>
      <button 
        className={ [styles.btn, styles.btnLg].join(' ') } 
        type="submit" 
      >
        SEND
      </button>
    </form>
  );
}
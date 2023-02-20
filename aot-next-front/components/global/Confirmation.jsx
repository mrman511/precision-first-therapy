import styles from '../../styles/Confirmation.module.scss';

export default function Confirmation({ componentStyles, error }) {

  return (
    <article className={ componentStyles }>
      {!error && <div className={ styles.success }>
        <h3>Thank you for reaching out.</h3>
        <p>
          We will be in contact shortly.
        </p>
      </div>}
      {error && <div className={ styles.error }>
        <h3>An Error has Occured</h3>
        <p>Please try again later  </p>
        <p>We apologize for the inconvenience</p>
      </div>}
    </article>
  );
}
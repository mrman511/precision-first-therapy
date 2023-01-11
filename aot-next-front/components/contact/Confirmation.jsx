import React from "react";

export default function Confirmation({ styles }) {

  return (
    <div className={  styles.confirm }>
      <div className={ styles.confirmation } >
        <h4>Thank You!</h4>
        <div className={ styles.messageContainer }>
          <p className={ styles.confirmMessage }>
            I have recieved your email
            and will respond as soon as I
            am able too.
          </p>
        </div>
      </div>
    </div>
  );
}
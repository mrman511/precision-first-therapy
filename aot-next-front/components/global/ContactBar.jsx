import Link from "next/link";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function ContactBar({styles}){

  return(
    <div className={ styles.contactBar }>
        <ul>
          <li className={ styles.phone }>
            <Link href={ `tel:${7787449178}` }>
              <FontAwesomeIcon className={ styles.icon } icon={ faPhone } /> 
              <span className={styles.linkText}>(778) 744-9178</span>
            </Link>
          </li>
          <li className={ styles.email }>
            <Link href="malito:admin@precisionfirsttherapy.com">
              <FontAwesomeIcon className={ styles.icon } icon={ faEnvelope } /> 
              <span className={ styles.linkText }>admin@precisionfirsttherapy.com</span>
            </Link>
          </li>
          <li className={ styles.location }>New Westminster, BC</li>
        </ul>
      </div>
  );
}
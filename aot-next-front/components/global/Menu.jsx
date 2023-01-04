import MenuItem from './MenuItem';
import styles from '../../styles/Menu.module.scss';

export default function Menu(){
  const menu = [
    'Concussion Management', 'Cogitive Rehabilitation', 'Return to Work Planning', 'Anxiety Focus Treatments', 'Ergonomic Assessments', 'Functional Evaluations'
  ];

  const parsedMenu = menu.map( item => <MenuItem key={ `menuItem-${item}` } styles={ styles } item={ item }/>)

  return(
    <div className={ styles.menuCard }>
      <h3 className={ styles.menuTitle }>Occupational Therapy Services</h3>
      <ul className={ styles.menu }>
        { parsedMenu }
      </ul>
    </div>
  );
}
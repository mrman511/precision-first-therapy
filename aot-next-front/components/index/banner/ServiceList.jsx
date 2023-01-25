import ServiceItem from './ServiceItem';

export default function ServiceList({ styles }){
  const services = [
    'Concussion Management', 'Cogitive Rehabilitation', 'Return to Work Planning', 'Anxiety Focus Treatments', 'Ergonomic Assessments', 'Functional Evaluations'
  ];

  const parsedMenu = services.map( item => <ServiceItem key={ `serviceItem-${item}` } styles={ styles } item={ item }/>)

  return(
    <div className={ styles.servicesCard }>
      <h3 className={ styles.servicesTitle }>Ariana's Occupational Therapy Services</h3>
      <h4 >Focus on what MATTERS to you.</h4>
      <ul className={ styles.services }>
        { parsedMenu }
      </ul>
    </div>
  );
}
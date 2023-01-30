import ServiceItem from './ServiceItem';

export default function ServiceList({ styles, services }){

  const parsedMenu = services.map( service => <ServiceItem key={ `serviceItem-${service.title}` } styles={ styles } service={ service }/>)

  return(
    <div className={ styles.servicesCard }>
      <h3 className={ styles.servicesTitle }>Ariana's Occupational Therapy Services</h3>
      <ul className={ styles.services }>
        { parsedMenu }
      </ul>
    </div>
  );
}
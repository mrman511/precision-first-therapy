import ServiceItem from './ServiceItem';

import styles from '../../styles/Services.module.scss';

import services from '../../utils/data/servicesData';

export default function ServiceList(){

  const parsedServices = services.map((item, i) => {
    return (
      <ServiceItem
        key={ `Service-${item.id_tag}` }
        index={ i }
        styles={ styles }
        service={ item }
      />
    );
  })

  return (
    <section className={ styles.serviceList }>
      { parsedServices }
    </section>
  );
}
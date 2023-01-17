import ServiceItem from './ServiceItem';

import services from '../../utils/data/servicesData';

export default function ServiceList({ styles }){

  const parsedServices = services.map((item, i) => {
    return (
      <ServiceItem
        key={ `ServicesListItem-${item.id_tag}` }
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
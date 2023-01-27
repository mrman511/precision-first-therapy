import { useEffect, useState } from 'react';
import styles from '../../../styles/Highlights.module.scss';

import HighLightItem from './HighlightItem';

import servicesData from '../../../utils/data/servicesData';

export default function HighlightList(){

  const [services, setServices] = useState(servicesData)

  useEffect(() => {
    if ( services && services.length < 6){
      setServices((prev) => {
        return [...prev, { 
          title: 'aot Servies',
          id_tag: 'aot',
          route_path: '/about'
        }]
      })
    }
  }, [services])

  const parsedData = services.map((item, i) => {
    return <HighLightItem 
      key={ `highlight-${ item.id_tag }` }  
      styles={ styles }
      highlight={ item }
      i={ i }
    />
  })

  return(
    <section className={ styles.highlights }>
      { parsedData }
    </section>
  );
}
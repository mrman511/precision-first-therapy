import styles from '../../../styles/Highlights.module.scss';

import HighLightItem from './HighlightItem';

export default function HighlightList({ services }){

  const aot =  {
    title: 'aot Servies',
    id_tag: 'aot',
    route_path: '/about'
  };

  const parsedData = services.map((item, i) => {
    return <HighLightItem 
      key={ `highlight-${ item.id_tag }` }  
      styles={ styles }
      highlight={ item }
      i={ i }
    />
  })

  const parsedAot = (<HighLightItem 
  key={ `highlight-${ aot.id_tag }` }  
  styles={ styles }
  highlight={ aot }
  i={ 19 }
/>);

  return(
    <section className={ styles.highlights }>
      { parsedData }
      { parsedAot }
    </section>
  );
}
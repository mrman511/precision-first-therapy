import styles from '../../../styles/Highlights.module.scss';

import mockData from '../../../utils/mockData/mockhighlights'
import HighLightItem from './HighlightItem';


export default function HighlightList(){

  const parsedData = mockData.map(item => {
    return <HighLightItem key={ `highlight-${ item.id_tag }` }  styles={ styles } highlight={ item } />
  })

  return(
    <section className={ styles.highlights }>
      { parsedData }
    </section>
  );
}
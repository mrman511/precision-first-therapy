import Image from 'next/image';
import leafImage from '../../../public/images/leaf-purple.png'


export default function ServiceItem({ styles, item}){

  return(
    <li className={ styles.serviceItem }>
      <div className={ styles.imageContainer }>
        <Image src={ leafImage } layout="fill" objectFit="contain" alt={`hero-service-${item}`}/>
      </div>
      { item }
    </li>
  );
}
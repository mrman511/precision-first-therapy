import Image from 'next/image';
import leafImage from '../../public/images/leaf-purple.png'


export default function MenuItem({ styles, item}){

  return(
    <li className={ styles.menuItem }>
      <div className={ styles.imageContainer }>
        <Image src={ leafImage } layout="fill" objectFit="contain"/>
      </div>
      { item }
    </li>
  );
}
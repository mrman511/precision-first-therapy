import Image from "next/image";
import { useRouter } from "next/router";

export default function ServiceItem({ styles, service, index }){

  const router = useRouter();
  const posImage = require(`../../public/images/${service.positive_image_path}`);

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push({
      pathname: '/services/service/',
      query: { id: service.id }
    })
  }

  const titleComponent = (<div className={ styles.titleContainer }>
    <h2 className={ styles.title }>{ service.title }</h2>
    { service.subtitle && <h3 className={ styles.subTitle }>{ service.subtitle }</h3> }
  </div>)

  return(
    <article className={[styles.serviceCard, styles[service.display + 'Card'], styles[service.id_tag], (index % 2 !== 0 ? styles.alt : '' )].join(' ')}>
      <div className={ styles.serviceImageContainer }>
        <Image src={ posImage } alt={ service.title } fill placeholder="blur" />
      </div>

      {/* { service.display === 'std' && <div className={ [styles.highlightImage, styles.negative].join(' ') }>
        <Image src={ negImage } alt={ service.title } layout="fill" objectFit="contain" />
      </div>} */}

      <div className={ [ styles.info, styles.regInfo ].join(' ') }>
        { titleComponent }
        <p>{ service.info }</p>
        <button className={ [styles.btn, styles.btnLg].join(' ') } onClick={(e) => { handleSubmit(e) }}>Learn About Our Approach</button>
      </div>

    </article>
  );

}
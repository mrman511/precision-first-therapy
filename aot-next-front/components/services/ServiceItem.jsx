import Image from "next/image";

export default function ServiceItem({ styles, service, index }){

  const posImage = require(`../../public/images/${service.positive_image_path}`)

  return(
    <article className={[styles.serviceCard, styles[service.display + 'Card'], styles[service.id_tag], (index % 2 !== 0 ? styles.alt : '' )].join(' ')}>
      <div className={ styles.serviceImageContainer }>
        <Image src={ posImage } alt={ service.title } fill placeholder="blur" />
      </div>
      <div className={ styles.titleContainer }>
        <h2 className={ styles.title }>{ service.title }</h2>
        { service.subtitle && <h3 className={ styles.subTitle }>{ service.subtitle }</h3> }
      </div>

      {/* { service.display === 'std' && <div className={ [styles.highlightImage, styles.negative].join(' ') }>
        <Image src={ negImage } alt={ service.title } layout="fill" objectFit="contain" />
      </div>} */}

      <div className={ [ styles.info, styles.regInfo ].join(' ') }>
        <p>{ service.info }</p>
        <button className={ [styles.btn, styles.btnLg].join(' ') }>Learn About Our Approach</button>
      </div>

      { service.clinic_info && <div className={ [styles.info, styles.clinicInfo].join(' ') }>
        <p>{ service.clinic_info }</p>
      </div>}
    </article>
  );

}
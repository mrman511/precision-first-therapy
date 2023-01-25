import Image from "next/image";
import { useRouter } from "next/router";

export default function ServiceFullPage({ styles, service }) {

  // console.log('SERVICEFULLPAGE::: ', service)

  const router = useRouter();
  const image = require(`../../public/images/service-page/${ service.image_path }`);

  const handleSubmit = (e) => {
    e.preventDefault
    router.push({
      pathname: '/contact',
      query: {
        subject: service.title,
      }
    })
  }

  return(
    <section className={ styles.service }>

      <article className={ styles.titleContainer }>
        <div className={ styles.imageContainer }>
          <Image src={ image } layout='fill' objectFit="contain" alt={ service.title } />
        </div>
        <div className={ styles.title }>
          <h2 >{ service.title }</h2>
          { service.subtitle && <h3>{ service.subtitle }</h3> }
        </div>
      </article>

      <div className={ styles.infoContainer }>
        <p>{ service.info }</p>
      </div>

      <div className={ [styles.infoContainer, styles.clinicInfo].join(' ') }>
        <p>{ service.clinic_info }</p>
      </div>

      <button className={ [styles.btn, styles.btnLg].join(' ') } onClick={(e) => { handleSubmit(e) }}>
        Request { service.subject }
      </button>

    </section>
  );
}
import Image from "next/image";
import { useRouter } from "next/router";

export default function ServiceFullPage({ styles, service }) {

  // console.log('SERVICEFULLPAGE::: ', service)

  const router = useRouter();
  const image = require(`../../public/images/services/${ service.image_path }`);

  const handleSubmit = (e) => {
    e.preventDefault
    router.push({
      pathname: '/contact',
      query: {
        subject: service.title,
      },
      hash: "contact-form"
    })
  }

  return(
    <section className={ styles.service }>

      <div className={ [styles.titleCard, styles.card].join(' ') }>
        <div className={ styles.imageContainer }>
          <div>
            <Image src={ image } fill alt={ service.title } />
          </div>
        </div>

        <div className={ styles.title }>
          <h2 >{ service.title }</h2>
        </div>
      </div>

      <div className={ [styles.infoCard, styles.card].join(' ') }>
        <div className={ styles.infoContainer }>
          <p>{ service.info }</p>
        </div>
      </div>

      <div className={ [styles.infoCard, styles.card].join(' ') }>
        <div className={ [styles.infoContainer, styles.clinicInfo].join(' ') }>
          <p>{ service.clinic_info }</p>
        </div>
      </div>

      <div className={ styles.card }>
        <button className={ [styles.btn, styles.btnLg].join(' ') } onClick={(e) => { handleSubmit(e) }}>
          Request { service.subject }
        </button>
      </div>

    </section>
  );
}
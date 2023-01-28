import Image from "next/image";
import { useRouter } from "next/router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faEnvelope  } from "@fortawesome/free-solid-svg-icons";

export default function ServiceItem({ styles, service, index }){

  const router = useRouter();
  const image = require(`../../public/images/services/${service.image_path}`);

  const handleClickInfo = (e) => {
    e.preventDefault();
    router.push({
      pathname: '/services/service/',
      query: { id: service.id }
    });
  }

  const handleClickMail = (e) => {
    e.preventDefault();
    router.push({
      pathname: '/contact',
      query: {
        subject: service.title,
      },
      hash: "contact-form"
    })
  }

  const listItems = service.list.map((item, i) => 
    <li key={ `${service.id_tag}-listitem-${i}` }>
      { item }
    </li>
  )

  return(
    <article className={[styles.serviceCard, styles[service.display + 'Card'], styles[service.id_tag], (index % 2 !== 0 ? styles.alt : '' )].join(' ')}>
      <div className={ styles.titleContainer }>
        <div className={ styles.imageContainer }>
          <Image src={ image } alt={ service.title } fill />
        </div>

        <div className={ styles.title }>
          <h2>{ service.title }</h2>
        </div>

      </div>

      <ul>
        { listItems }
      </ul>

      <div className={ styles.routes }>
        <a href="/services/service" onClick={(e) => { handleClickInfo(e) }}> 
          <FontAwesomeIcon icon={ faCircleInfo } className={ styles.icon }/>
        </a>

        <a href="/contact" onClick={(e) => { handleClickMail(e) }}>
          <FontAwesomeIcon icon={ faEnvelope } className={ styles.icon }/>
        </a>
      </div>
    </article>
  );

}
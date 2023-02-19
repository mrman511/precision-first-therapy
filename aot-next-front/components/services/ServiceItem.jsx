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
      <svg className={ styles.svg } data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 308.93 184.25">
        <path className={ styles.svgPath } d="m.22,173.36c-.03-.07-.48-1.22,0-1.69.87-.88,4.17,1.17,5.46,1.88,5.43,2.98,11.23,1.94,16.75,1.69,4.1-.18,12.4,1.13,28.99,3.76,18.42,2.92,24,4.98,31.81,1.51,3.77-1.68,6.29-3.85,7.91-5.27,8.23-7.23,11.43-16.7,12.99-22.96,5.71-22.94,1.38-50.9,4.52-74.16.36-2.7,7.91-53.62,43.67-71.53C168.86-1.71,186.17-.28,200.88.93c29.28,2.42,46.32,14.47,71.53,6.02,7.08-2.37,9.67-4.64,10.92-3.39,5.36,5.37-32.85,56.64-84.33,91.86-25.79,17.64-41.96,22.4-55.72,17.69-2.31-.79-11.16-3.95-16.19-12.42-10.58-17.84,3.67-45.9,19.95-60.61,15.99-14.44,35.32-17.26,48.56-19.2,23.47-3.43,41.99.91,42.16-.38.15-1.09-12.97-5.2-28.61-6.02-11.16-.59-38.62-2.04-62.87,16.56-3.89,2.98-14.93,12.04-22.96,27.86-3.52,6.94-15.96,33.9-4.89,65.13,9.76,27.54,32.23,42.67,48.19,48.94,13.56,5.33,26.75,5.97,39.53,6.59,5.7.28,15.69-1.69,35.58-1.69,0,0,43.71-2.76,64.56,4.89.72.26,2.71,1,2.64,1.32-.22.91-16.92-2.36-19.39-2.82-24.63-4.68-48.08.64-82.82,1.51-53.41,1.33-62.39-9.63-94.49-2.82-6.57,1.39-17.47,4.24-32.75,3.95-17.45-.33-33.69-3.58-33.69-3.58-5.69-1.14-10.58-2.43-18.45-2.82-2.78-.14-6.03-.17-12.61-.56-8.96-.53-13.5-1.1-14.49-3.58Z"/>
      </svg>
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
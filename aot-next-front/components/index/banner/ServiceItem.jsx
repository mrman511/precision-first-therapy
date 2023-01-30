import { useCycle } from 'framer-motion';
import { useRouter } from 'next/router';
import Image from 'next/image';
import leafImage from '../../../public/images/leaf-purple.png'


export default function ServiceItem({ styles, service}){

  const router = useRouter();
  const [hover, toggleHover] = useCycle(false, true);
  
  const handleOver = (e) => {
    e.preventDefault(e);
    if (!hover) {
      toggleHover();
    }
  }

  const handleLeave = (e) => {
    e.preventDefault(e);
    if (hover) {
      toggleHover();
    }
  }

  const handleRouting = (e) => {
    e.preventDefault();

    router.push({
      pathname: service.route_path,
      query: { id: service.id },
    })
  }



  return(
    <li className={ styles.serviceItem }
      onMouseOver={ (e) => { handleOver(e) } }
      onMouseLeave={ (e) => { handleLeave(e) } }
    >
      <a  href={ service.route_path } onClick={(e) => { handleRouting(e) }}>
        <div className={ styles.imageContainer }>
          { hover && <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 302.13 22.53">
            <path className={ styles.svgPath } d="m.58,19.16c.51.36,1.23.82,2.17,1.22.86.37,4.58,1.99,7.06.56.98-.56,1.5-1.8,2.52-4.25,2.04-4.91,1.63-6.3,3.51-8.64,1.35-1.68,2.83-2.49,3.29-2.73.54-.28,1.78-.85,3.48-1.04,2.47-.27,5.09.36,5.08.85,0,.59-3.89-.05-7.39,2.32-2.4,1.62-4.77,4.77-3.95,6.64.94,2.15,6.08,2.51,9.74.93,6.77-2.92,9.12-12.76,7.53-13.93-.54-.4-1.19.46-3.39.94-3.86.84-5.61-.92-8.47-.75-3.76.22-8.34,3.75-9.08,8.58-.7,4.58,2.21,9.03,5.61,10.58,2.36,1.08,3.48.08,11.19-.25,1.5-.07,1.28-.02,8.66,0,4.97.01,6.48,0,13.93-.02,10.49-.02,18.95,0,23.86,0,31.73.02,108.52-.21,184.8-.14,8.34,0,22.94.02,41.41.06"/>
          </svg> }
        </div>
        <p>{ service.title }</p>
      </a>
    </li>
  );
}
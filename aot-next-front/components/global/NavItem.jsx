import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function NavItem({ styles, routeData, subMenu, toggle, handleOver, handleOut, mobile }){

  const router = useRouter();
  const selected = router.pathname === routeData.href ? true : false;
  const selectedSub = subMenu && routeData.id === parseInt(router.query.id) ? true : false
  const routePath = subMenu ? { pathname: routeData.route_path, query: { id: (routeData.id ? routeData.id : '') } } : { pathname: routeData.href };
  
  const servicesData = (routeData.children && mobile) ? routeData.children.map((item, i) => <NavItem 
    key={ `ServiceNavListItem${i}` }
    styles={ styles }
    routeData={ item }
    subMenu={ true }
  />) : false;
  
  const handleClick = (e) =>{
    e.preventDefault();
    router.push(routePath)
  }

  
  return(
 
    <li>
      <a className={ selected || selectedSub ? styles.selected : '' } 
        href={ routePath.pathname } 
        onClick={(e) => { handleClick(e) }} 
        onMouseOver={(e) => { toggle ? handleOver(e, toggle) : '' }}
        onMouseOut={(e) => { toggle ? handleOut(e, toggle) : '' }}
      >
        { routeData.title }
        { (routeData.children && !mobile) &&  <FontAwesomeIcon className={ styles.icon } icon={ faChevronDown }/> }
      </a>

      { (routeData.children && mobile) &&  <FontAwesomeIcon 
        className={ styles.icon } 
        icon={ faChevronDown } 
        onClick={(e) => { mobile.toggleService(e) }}
      /> }

      <AnimatePresence>
        { (servicesData && mobile.state) && <motion.div 
          className={ styles.subMenu }
          initial={{ height: 0 }}
          animate={{ height: 'auto', transition: { duration: .25 } }}
          exit={{ height: 0 }}
        >
            <ul>
              {servicesData}
            </ul>
          </motion.div>}
      </AnimatePresence>
    </li>

  );
}
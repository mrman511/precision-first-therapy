import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function NavItem({ routeData, styles, subMenu }){

  const router = useRouter();

  const selected = router.pathname === routeData.href ? true : false;

  const routePath = subMenu ? { pathname: '/services/service', query: { id: routeData.id} } : { pathname: routeData.href };

  const handleClick = (e) =>{
    e.preventDefault();

    console.log('CLICK:::', routePath)
    router.push(routePath)
  }

  
  return(
    <a className={ selected ? styles.selected : '' } href={ routePath.pathname } onClick={(e) => { handleClick(e) }}>
      <li>
        { routeData.title }
        { routeData.children &&  <FontAwesomeIcon className={ styles.icon } icon={ faChevronDown }/> }
      </li>
    </a>
  );
}
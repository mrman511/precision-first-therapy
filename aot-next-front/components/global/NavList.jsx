import NavItem from './NavItem';

import routeData from '../../utils/data/routeData';
import servicesData from '../../utils/data/servicesData';

export default function NavList({ styles }){

  const navItems = routeData.map((item, i) => <NavItem
    key={ `navItem-${ item.title }` }
    styles={ styles }
    routeData={ item }
    />
  )

  const serviceNavItems = servicesData.map((item, i) => <NavItem 
    key={ `ServiceNavListItem${i}` }
    styles={ styles }
    routeData={ item }
    subMenu={ true }
  />)

  return(
    <div className={ styles.nav }>
      <ul>
        { navItems }
      </ul>

      <div className={ styles.servicesList }>
        <ul>
          { serviceNavItems }
        </ul>
      </div>
    </div>
  );
}
import NavItem from './NavItem';

import routeData from '../../utils/data/routeData'

export default function NavList({ styles }){

  const navItems = routeData.map(item => <NavItem 
    routeData={ item }
    styles={ styles }
    />
  )

  return(
    <div className={ styles.nav }>
      <ul>
        { navItems }
      </ul>
    </div>
  );
}
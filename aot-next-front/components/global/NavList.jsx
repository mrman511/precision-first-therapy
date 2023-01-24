import { AnimatePresence, motion } from 'framer-motion'

import NavItem from './NavItem';

import routeData from '../../utils/data/routeData';
import servicesData from '../../utils/data/servicesData';

export default function NavList({ styles, parent, child, dropMenu, handle }){

  const navItems = routeData.map((item, i) => <NavItem
    key={ `navItem-${ item.title }` }
    styles={ styles }
    routeData={ item }
    handleOver={ handle.over }
    handleOut={ handle.out }
    toggle={ item.title === 'Services' ? parent.toggle : undefined }
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
      <AnimatePresence>
        { dropMenu.menu && <motion.div 
          className={ styles.servicesList } 
          onMouseOver={(e) => { handle.over(e, child.toggle) }}
          onMouseOut={(e) =>{ handle.out(e, child.toggle) }}
          initial={{ height: 0, }}
          animate={{ height: 'auto',}}
          exit={{ height: 0, }}
        >
          <ul>
            { serviceNavItems }
          </ul>
        </motion.div> }
      </AnimatePresence> 
    </div>
  );
}